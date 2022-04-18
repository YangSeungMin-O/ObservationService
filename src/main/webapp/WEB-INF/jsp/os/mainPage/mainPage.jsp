<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>관측서비스-대시보드</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
<script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.5.0/build/ol.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
<script src="/js/os/common/common.js"></script>
<script src="/js/os/main/main.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.4.3/css/ol.css">
<script type="text/javascript">
	function createMap(){
		var map = new ol.Map({
			target: 'map',
			layers: [new ol.layer.Tile({
						source: new ol.source.XYZ({
							url: 'http://xdworld.vworld.kr:8080/2d/Base/202002/{z}/{x}/{y}.png'
						})
					})],
			view: new ol.View({
			center: [14126669.41589247, 4493404.190498611],
			zoom: 7,
			minZoom: 7,
			maxZoom: 19
			})
		});
	}
	function createChart(){
		var ctx = document.getElementById("myChart").getContext('2d');
		var myChart = new Chart(ctx, {
		    type: 'bar',
		    data: {
		        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
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
		                'rgba(255,99,132,1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)',
		            ],
		            borderWidth: 1
		        }]
		    },
		    options: {
		        maintainAspectRatio: true,
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:true
		                }
		            }]
		        }
		    }
		});
	}
</script>
<style type="text/css">
	#contentDiv {
	}
	#map {
		height: 100%;
		width : 100%;
	}
	#status {
		width:400px;
		text-align: center;
	}
	.left {
		width: 50%;
		height: 880px;
		float: left;
		box-sizing: border-box;
		background: #D3D3D3;
	}
	.right {
		width: 25%;
		height: 880px;
		float: left;
		box-sizing: border-box;
		background: #D3D3D3;
	}
	.right2 {
		width: 25%;
		height: 880px;
		float: left;
		box-sizing: border-box;
		background: #D3D3D3;
	}
</style>
</head>
<body>
	<!-- Header -->
	<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
		<a class="navbar-brand" href="#">ObservationService</a>
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
	<div id="contentDiv">
		<!-- 왼쪽 DIV 지도 -->
   		<div class="left">
			<div id="map"></div>
		</div>
		<!-- 오른쪽 컨텐츠 내용 -->
      	<div class="right">
      		<h3>OO지점 측정데이터</h3>
			<div id="chart" style="position: relative; height:200px; width:400px;">
				<canvas id="myChart"></canvas>
			</div>
			<h3>지역별 측정소 상태정보</h3>
			<table id="status" class="table table-striped table-dark">
				<tr>
					<td>지역</td>
					<td>측정소 갯수</td>
					<td>정상</td>
					<td>점검중</td>
					<td>이상</td>
				</tr>
				<tr>
					<td>경기</td>
					<td>100</td>
					<td>80</td>
					<td>10</td>
					<td>10</td>
				</tr>
			</table>
      	</div>
      	<div class="right2">
      	</div>
    </div>
</body>
</html>