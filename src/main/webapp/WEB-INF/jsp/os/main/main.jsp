<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.5.0/build/ol.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
<script src="/js/os/common/common.js"></script>
<script src="/js/os/main/main.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.4.3/css/ol.css">
<title>관측서비스-메인페이지</title>
<style>
	#map {
		height: 500px;
		width : 30%;
	}
</style>
</head>
<body>
	<h2>MainPage</h2>
	<div id="map"></div>
	<table border="1" style="text-align: center; height:100px; width:400px;">
		<tr>
			<td>GL</td>
			<td>EL</td>
			<td>전기전도도</td>
		</tr>
		<tr>
			<td>1</td>
			<td>1</td>
			<td>1</td>
		</tr>
		<tr>
			<td>1</td>
			<td>1</td>
			<td>1</td>
		</tr>
	</table>
	<div style="position: relative; height:200px; width:400px;">
		<canvas id="myChart"></canvas>
	</div>
</body>
</html>