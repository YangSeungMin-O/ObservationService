<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>관측서비스-대시보드</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.5.0/build/ol.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.6.2/proj4.js"></script>
<script type="text/javascript" src="/js/os/main/polygon.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.4.3/css/ol.css">
<!-------------------------------------------------- 스크립트 시작 -------------------------------------------------->
<script type="text/javascript">
</script>
<style type="text/css">
	#contentDiv {
	}
	#map {
		height: 100%;
		width : 100%;
	}
	#status {
		width:200px;
		text-align: center;
		margin-left: 10px;
		margin-top: 10px;
	}
	.left {
		width: 70%;
		height: 880px;
		float: left;
		box-sizing: border-box;
		background: #D3D3D3;
	}
	.right {
		width: 30%;
		height: 880px;
		float: left;
		box-sizing: border-box;
		background: #D3D3D3;
	}
	.a {
		height: 48px;
	}
	.form-check {
		margin-left: 10px;
	}
	#removeLay {
		margin-left: 10px;
	}
</style>
</head>
<body>
	<!-- 헤더 -->
	<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
		<a class="navbar-brand" href="/mainPage2.do">ObservationService</a>
		<div class="collapse navbar-collapse" id="collapsibleNavbar">
			<ul class="navbar-nav navbar-dark">
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Menu1</a>
					<div class="dropdown-menu">
						<a class="dropdown-item" href="#">Link 1</a>
						<a class="dropdown-item" href="#">Link 2</a>
						<a class="dropdown-item" href="#">Link 3</a>
					</div>
				</li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Menu2</a>
					<div class="dropdown-menu">
						<a class="dropdown-item" href="#">Link 1</a>
						<a class="dropdown-item" href="#">Link 2</a>
						<a class="dropdown-item" href="#">Link 3</a>
					</div>
				</li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Menu3</a>
					<div class="dropdown-menu">
						<a class="dropdown-item" href="#">Link 1</a>
						<a class="dropdown-item" href="#">Link 2</a>
						<a class="dropdown-item" href="#">Link 3</a>
					</div>
				</li>
			</ul>
			<div class="collapse navbar-collapse justify-content-end" id="navbarCollapse">
				<ul class="navbar-nav">
			    	<li class="nav-item">
			      		<a class="nav-link" href="#">Login</a>
			    	</li>
			    	<li class="nav-item">
			      		<a class="nav-link" href="#">MyPage</a>
			     	</li>
			  	</ul>
			</div>
		</div>
	</nav>
	<!-- 컨텐츠 -->
	<div id="contentDiv">
		<!-- 왼쪽 DIV 지도 -->
   		<div class="left">
			<div id="map"></div>
		</div>
		<!-- 오른쪽 컨텐츠 내용 -->
      	<div class="right">
	    	<form class="form-inline">
 		    	<!-- <label for="type">Geometry type: &nbsp;</label> -->
		      	<select class="form-control mr-2 mb-2 mt-2" id="type" style="margin-left: 10px; width: 120px;">
		        	<option value="Point">Point</option>
		        	<option value="LineString">LineString</option>
		        	<option value="Polygon">Polygon</option>
		        	<option value="Circle">Circle</option>
		        	<option value="None">None</option>
		      	</select>
		      	<select class="form-control mr-2 mb-2 mt-2" id="mapType" style="width: 135px;">
		        	<option value="vWorld">vWorld</option>
		        	<option value="SatelLite">SatelLite</option>
		        	<option value="Hybrid">Hybrid</option>
		      	</select>
		    </form>
		    <button id="removeLay" class="btn btn-danger">RemoveLayer</button>
		    <button id="removeAllLay" class="btn btn-danger">RemoveAllLayer</button>
   		</div>
    </div>
</body>
</html>