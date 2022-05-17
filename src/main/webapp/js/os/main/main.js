var map;
var source;
var vector;
var raster;
/* 브이월드 */
var rasterLayer =  new ol.layer.Tile({
	source: new ol.source.XYZ({url: 'http://xdworld.vworld.kr:8080/2d/Base/201710/{z}/{x}/{y}.png'})
})
/* 하이브리드 */
var hybridLayer =  new ol.layer.Tile({
	source: new ol.source.XYZ({url: 'http://xdworld.vworld.kr:8080/2d/Hybrid/201612/{z}/{x}/{y}.png'})
})
/* 위성지도 */
var satelliteLayer =  new ol.layer.Tile({
	source: new ol.source.XYZ({url: 'http://xdworld.vworld.kr:8080/2d/Satellite/201710/{z}/{x}/{y}.jpeg'})
})

/* 이벤트 함수 */
$(function(){
	/* 지도생성 */
	createMap();
	/* 차트생성 */
	createChart();
	/* 선택한 도형 타입 */
    var typeSelect = document.getElementById('type');
    /* 선택한 지도 타입 */
    var mapTypeSelect = document.getElementById('mapType');
    /* 커서 타입 */
    var draw;
	
    /* 타입이 바뀌면 */
    typeSelect.onchange = function(){
    	console.log(draw);
    	/* 커서효과 초기화 */
        map.removeInteraction(draw);
        addInteraction();
    };
    
    /* 지도 타입이 바뀌면 */
    mapTypeSelect.onchange = function(){
    	var mapType = mapTypeSelect.value;
    	/* 지도타입 업데이트 함수 호출 */
    	mapUpdate(mapType);
    };
    
    /* 첫턴에는 무조건 한번 타야함 */
    addInteraction();
    
	/* 선택한 타입으로 도형생성모양 변경 */
    function addInteraction(){
        var value = typeSelect.value;
        if (value !== 'None'){
            draw = new ol.interaction.Draw({
                source: source,
                type: value
            });
            map.addInteraction(draw);
        }else if (value == 'Marker') {
			alert("Marker");
		}
    }
})


/* 지도생성 모듈 */
function createMap(){
	raster = new ol.layer.Tile({
	source: new ol.source.OSM()
	});
	/* wrapX는 False로 둘때 화면상의 동일한 좌표에 대해 중복으로 도형을 표시하지 않도록 한다 */
	source = new ol.source.Vector({ wrapX: false });
	vector = new ol.layer.Vector({
		source: source
	});
	
	map = new ol.Map({
		target: 'map',
		layers: [new ol.layer.Tile({
					source: new ol.source.XYZ({
						url: 'http://xdworld.vworld.kr:8080/2d/Base/202002/{z}/{x}/{y}.png'
					})
				}),
					vector
				],
		view: new ol.View({
	        center: new ol.geom.Point([ 126.97659953, 37.579220423 ])
	        .transform('EPSG:4326', 'EPSG:3857')
	    	.getCoordinates(),
			zoom: 13,
			minZoom: 6.5,
			maxZoom: 19
		})
	});
};

/* 지도유형 변경 */
function mapUpdate(option){	
	map.removeLayer(rasterLayer);
	map.removeLayer(hybridLayer);
	map.removeLayer(satelliteLayer);
	switch (option) {
	case 'vWord':
		map.addLayer(rasterLayer);
		break;
	case 'Hybrid':
		map.addLayer(satelliteLayer);
		map.addLayer(hybridLayer);
		break;
	case 'SatelLite':
		map.addLayer(satelliteLayer);
		break;
	case undefined:
		map.addLayer(rasterLayer);
		break;
	}
}

/* 차트그리기 모듈 */
function createChart(){
	var ctx = document.getElementById('myChart').getContext('2d');
	var myChart = new Chart(ctx, {
	    type: 'line',
	    data: {
	        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
	        datasets: [{
	            label: 'Label',
	            data: [12, 19, 3, 5, 2, 3],
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(255, 206, 86, 0.2)',
	                'rgba(75, 192, 192, 0.2)',
	                'rgba(153, 102, 255, 0.2)',
	                'rgba(255, 159, 64, 0.2)'
	            ],
	            borderColor: [
	                'rgba(255, 99, 132, 1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)',
	                'rgba(75, 192, 192, 1)',
	                'rgba(153, 102, 255, 1)',
	                'rgba(255, 159, 64, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            y: {
	                beginAtZero: true
	            }
	        }
	    }
	});
}

function slideMenu() {
	$("#rightDiv").hide();
	$("#map").css("width", 2000);
}

/* API호출 (기상청 예시) */
/*
 * function weatherApiCall(){ $.ajax({ type : "GET", url : "/weatherData.do",
 * dataType : "JSON", success: function(result){ console.log(result.result); }
 * }); }
 */
