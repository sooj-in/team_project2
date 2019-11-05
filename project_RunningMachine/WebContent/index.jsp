<%@page import="com.model.LocationDTO"%>
<%@page import="com.model.LocationDAO"%>
<%@page import="java.util.ArrayList"%>
<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>어린이집 추천 ::: 내 맘 속 어린이집</title>
<link href="https://fonts.googleapis.com/css?family=Jua&display=swap" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="css/style.css">
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=b96708b59f89d07f4d8df92371fb3c4f&libraries=services,clusterer,drawing"></script>
<script src="js/jquery.min.js"></script>
</head>
<body>
   <% request.setCharacterEncoding("utf-8"); %>
      <div id="wrap">
      	<div id="header"><div id="logo"><img src="image/logo.png"></div></div>
      	<div id="search">
			<div id="search_wrap">
			<div id="search_data">
				<div id="search_input">
					<form id="search_f" method="post" action="ajaxTest">
				        <input id="searchKeyword" type="text" name="keyword">
				        <input id="search_btn" type="submit" value="검색">
				    </form>
		   		</div> <!-- search_input -->
	   			<div id="search_result"></div>
	   		</div>
   			</div> <!-- search_wrap -->
   			<div id="main">
				<!-- 지도가 표시될 div -->
				<div id="map">
					<div class="category">
						<ul>
							<!-- 지도 위에 표시될 마커 카테고리 -->
							<li id="artmuseum" onclick="changeMarker('artmuseum')">
							<span class="ico_comm ico_artmuseum"></span> 미술관</li>
							<li id="museum" onclick="changeMarker('museum')">
							<span class="ico_comm ico_museum"></span> 박물관</li>
							<li id="hospital" onclick="changeMarker('hospital')">
							<span class="ico_comm ico_hospital"></span> 병원</li>
							<li id="kidscafe" onclick="changeMarker('kidscafe')">
							<span class="ico_comm ico_kidscafe"></span> 키즈카페</li>
							<li id="park" onclick="changeMarker('park')">
							<span class="ico_comm ico_park"></span> 공원</li>
							<li id="daycarecenter" onclick="changeMarker('daycarecenter')">
							<span class="ico_comm ico_daycarecenter"></span> 어린이집</li>
							<li id="kindergarden" onclick="changeMarker('kindergarden')">
							<span class="ico_comm ico_kindergarden"></span> 유치원</li>
						</ul>
					</div> <!-- 카테고리 -->
				</div> <!-- 지도 -->
			</div> <!-- main -->
   		</div> <!-- search -->
		<div class="clear"></div>
		<div id="hidden2"></div>
	</div>
	<script type="text/javascript" src="js/main.js"></script>
	<script type="text/javascript" src="js/marker.js"></script>
	<script type="text/javascript" src="js/center.js"></script>
</body>
</html>