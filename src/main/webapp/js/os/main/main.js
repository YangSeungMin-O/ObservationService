$(function(){
	createMap();
})

var map;
var pointLocation = [];

var rasterLayer =  new ol.layer.Tile({
	source: new ol.source.XYZ({url: 'http://xdworld.vworld.kr:8080/2d/Base/201710/{z}/{x}/{y}.png'})
})
var hybridLayer =  new ol.layer.Tile({
	source: new ol.source.XYZ({url: 'http://xdworld.vworld.kr:8080/2d/Hybrid/201612/{z}/{x}/{y}.png'})
})
var satelliteLayer =  new ol.layer.Tile({
	source: new ol.source.XYZ({url: 'http://xdworld.vworld.kr:8080/2d/Satellite/201710/{z}/{x}/{y}.jpeg'})
})

/* 지도유형 변경 */
function mapUpdate(option){	
	map.removeLayer(rasterLayer);
	map.removeLayer(hybridLayer);
	map.removeLayer(satelliteLayer);
	switch (option) {
	case 'vword':
		map.addLayer(rasterLayer);
		markerView();
		break;
	case 'hybrid':
		map.addLayer(satelliteLayer);
		map.addLayer(hybridLayer);
		markerView();
		break;
	case 'satellite':
		map.addLayer(satelliteLayer);
		markerView();
		break;
	case undefined:
		map.addLayer(rasterLayer);
		markerView();
		break;
	}
}

/* 마커현행유지 */
function markerView(){
	console.log(pointLocation.length);
	console.log(pointLocation);
	for (var i=0; i<pointLocation.length; i++) {
		addMarker2(pointLocation[i]);
	}
}

/* 지도 모듈 */
function createMap(){
	/* 벡터레이어 */
	var vectorLayer = new ol.layer.Vector({
		source: new ol.source.Vector()
	});

	var mousePositionCtrl = new ol.control.MousePosition({
		  coordinateFormat: ol.coordinate.createStringXY(4),
		  projection: 'EPSG:4326',
		  className: 'custom-mouse-position',
		  target: document.getElementById('mouse-position'),
		  undefinedHTML: '&nbsp;'
		});
	
	map = new ol.Map({
		/* map DIV가 타겟 */
		target: 'map',
		controls: ol.control.defaults().extend( [mousePositionCtrl] ),
		layers: [new ol.layer.Tile({
					source: new ol.source.XYZ({
						url: 'http://xdworld.vworld.kr:8080/2d/Base/202002/{z}/{x}/{y}.png'
					})
					}),
					vectorLayer
				],
		view: new ol.View({
	        center: new ol.geom.Point([ 126.97659953, 37.579220423 ])
	      	/* GPS 좌표계 -> 구글 좌표계 */
	        .transform('EPSG:4326', 'EPSG:3857')
        	.getCoordinates(),
			zoom: 7,
			minZoom: 7,
			maxZoom: 19
		})
	});
	
	/* 클릭한 지도위치 좌표 반환(배열) */
	map.on('click', function(evt) {
		console.log(evt)
	    var coordinate = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');
	    /* 클릭한 좌표로 마커 생성 */
	    addMarker(coordinate);
	})
}

/* 마커생성 모듈 */
function addMarker(coordinate){
	pointLocation.push(coordinate);
    var feature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([coordinate[0], coordinate[1]])) //경도 위도에 포인트 설정
    });

    /* 마커스타일 설정 */
    var markerStyle = new ol.style.Style({
        image: new ol.style.Icon({ //마커 이미지
        	opacity: 1,
        	scale: 1.2,
            src: '/images/marker3.png'
        })
    });

    var markerSource = new ol.source.Vector({
        features: [feature]
    });

    var markerLayer = new ol.layer.Vector({
        source: markerSource, 
        style: markerStyle 
    });
    /* 지도에 마커가 그려진 레이어 추가 */
    map.addLayer(markerLayer);
}

/* 마커현행유지 위한 마커생성 모듈 */
function addMarker2(coordinate){
    var feature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([coordinate[0], coordinate[1]]))
    });

    /* 마커스타일 설정 */
    var markerStyle = new ol.style.Style({
        image: new ol.style.Icon({
        	opacity: 1,
        	scale: 1.2,
            src: '/images/marker3.png'
        })
    });

    var markerSource = new ol.source.Vector({
        features: [feature]
    });

    var markerLayer = new ol.layer.Vector({
        source: markerSource, 
        style: markerStyle 
    });
    /* 지도에 마커추가 */
    map.addLayer(markerLayer);
}