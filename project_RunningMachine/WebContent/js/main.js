																							// 스프라이트 이미지입니다
var mapContainer = document.getElementById('map'), // 지도를 표시할 div
mapOption = {
	center : new kakao.maps.LatLng(35.1524542891979, 126.85566058506141), // 지도의 중심좌표
	level : 8 // 지도의 확대 레벨
};

var map = new kakao.maps.Map(mapContainer, mapOption),
customOverlay = new kakao.maps.CustomOverlay({}),
infowindow = new kakao.maps.InfoWindow({
	removable : true
});

var mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPLEFT);
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.LEFT);
		
var polygons = [];

$.getJSON('json/gwangju_map_polygon.json', function(geojson) {
	var data = geojson.features;
	var coordinates = [];
	var name = '';

	$.each(data, function(index, val) {
		coordinates = val.geometry.coordinates;
		name = val.properties.EMD_KOR_NM;
		
		displayArea(coordinates, name);
	});
});
		
// 다각형을 생상하고 이벤트를 등록하는 함수입니다
function displayArea(coordinates, name) {
	var path = [];
	var points = [];

	$.each(coordinates[0], function(index, coordinate) {
		var point = new Object();
		point.x = coordinate[1];
		point.y = coordinate[0];
		points.push(point);
		path.push(new kakao.maps.LatLng(point.x, point.y));
	})
	
	// 다각형을 생성합니다
	var polygon = new kakao.maps.Polygon({
		map : map, // 다각형을 표시할 지도 객체
		path : path,
		strokeWeight : 2,
		strokeColor : '#685a4f',
		strokeOpacity : 0.8,
		fillColor : '#fff',
		fillOpacity : 0.7
	});
			
	polygons.push(polygon);
	
	// 다각형에 mouseover 이벤트를 등록하고 이벤트가 발생하면 폴리곤의 채움색을 변경합니다
	// 지역명을 표시하는 커스텀오버레이를 지도위에 표시합니다
	kakao.maps.event.addListener(polygon, 'mouseover', function(mouseEvent) {
		polygon.setOptions({
			fillColor : '#f5d139'
		});

		customOverlay.setContent('<div class="area">' + name + '</div>');
		customOverlay.setPosition(mouseEvent.latLng);
		customOverlay.setMap(map);
	});

		// 다각형에 mousemove 이벤트를 등록하고 이벤트가 발생하면 커스텀 오버레이의 위치를 변경합니다
	kakao.maps.event.addListener(polygon, 'mousemove', function(mouseEvent) {
		customOverlay.setPosition(mouseEvent.latLng);
	});

		// 다각형에 mouseout 이벤트를 등록하고 이벤트가 발생하면 폴리곤의 채움색을 원래색으로 변경합니다
		// 커스텀 오버레이를 지도에서 제거합니다
	kakao.maps.event.addListener(polygon, 'mouseout', function() {
		polygon.setOptions({
			fillColor : '#fff'
		});
		customOverlay.setMap(null);
	});

	// 다각형에 click 이벤트를 등록하고 이벤트가 발생하면 다각형의 이름과 면적을 인포윈도우에 표시합니다
	kakao.maps.event.addListener(polygon, 'click', function(mouseEvent) {
		var level = map.getLevel()-2;
		
		map.setLevel(level, {anchor: centroid(points), animate: {
			duration: 350
		}});
		
		deletePolygon(polygons);
	});
}

//중심좌표 구하기		
function centroid(points) {
	var i, j, len, p1, p2, f, area, x, y;
			
	area = x = y = 0;
			
	for (i = 0, len = points.length, j = len - 1; i < len; j = i++) {
		p1 = points[i];
		p2 = points[j];
				
		f = p1.y * p2.x - p2.y * p1.x;
		x += (p1.x + p2.x) * f;
		y += (p1.y + p2.y) * f;
		area += f * 3;
	}
	return new kakao.maps.LatLng(x / area, y / area);
}

// 지도 위 폴리곤 제거
function deletePolygon(polygons) {
	for (var i = 0; i < polygons.length; i++) {
		polygons[i].setMap(null);
	}
	polygons = [];
}