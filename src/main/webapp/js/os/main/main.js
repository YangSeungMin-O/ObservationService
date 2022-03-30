$(function(){
	openLayersMap();
})

/* 오픈레이어스 지도 띄우기 (EPSG : 4326) */
function openLayersMap(){
	var map = new ol.Map({
	    target: 'map',
	    layers: [
	    	new ol.layer.Tile({
	    		source: new ol.source.XYZ({
	    		url: 'http://xdworld.vworld.kr:8080/2d/Base/201802/{z}/{x}/{y}.png'
	    		})
	    	})
	    ],
	    view: new ol.View({
	        center: [14128579.82, 4512570.74],
	        zoom: 14,
	        minZoom: 10,
	        maxZoom: 19
	    })
	});
};
