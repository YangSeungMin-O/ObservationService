var map;
var source;
var vector;
var raster;
var rasterLayer =  new ol.layer.Tile({
	source: new ol.source.XYZ({url: 'http://xdworld.vworld.kr:8080/2d/Base/201710/{z}/{x}/{y}.png'})
})
var hybridLayer =  new ol.layer.Tile({
	source: new ol.source.XYZ({url: 'http://xdworld.vworld.kr:8080/2d/Hybrid/201612/{z}/{x}/{y}.png'})
})
var satelliteLayer =  new ol.layer.Tile({
	source: new ol.source.XYZ({url: 'http://xdworld.vworld.kr:8080/2d/Satellite/201710/{z}/{x}/{y}.jpeg'})
})
/* 이벤트 함수 */
$(function(){
	/* 지도생성 */
	createMap();
	
	/* 폴리곤 타입 */
    var typeSelect = document.getElementById('type');
    var mapTypeSelect = document.getElementById('mapType');
    var draw;
	
    /* 타입이 바뀌면 */
    typeSelect.onchange = function(){
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
        }
    }
    
    /* 레이어 순차적 삭제 */
    $("#removeLay").click(function(){
    	alert("Remove");
    	console.log(vector);
    });
    /* 레이어 모두 삭제 */
    $("#removeAllLay").click(function(){
    	alert("RemoveAll");
    	/* 지워지긴 하나 다음 도형이 그려지지 않음 (마우스형태는 그대로) */
		map.removeLayer(vector);	
    });
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
			zoom: 12,
			minZoom: 7,
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
		markerView();
		break;
	case 'Hybrid':
		map.addLayer(satelliteLayer);
		map.addLayer(hybridLayer);
		markerView();
		break;
	case 'SatelLite':
		map.addLayer(satelliteLayer);
		markerView();
		break;
	case undefined:
		map.addLayer(rasterLayer);
		markerView();
		break;
	}
}