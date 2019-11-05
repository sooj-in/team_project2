// 지도 위 마커 표시
var marks = [];
var content = [];
var markerImageSrc = './image/icon/data_category.png'; // 마커이미지의 주소입니다.

// 미술관 선택 시 마커 표시
function artmuseumLoad(){
	$.getJSON('json/artmuseum.json', function(data) {
		$.each(data, function(index, art) {
			var title = art.title;

			var imageSize = new kakao.maps.Size(22, 26), imageOptions = {
				spriteOrigin : new kakao.maps.Point(10, 0),
				spriteSize : new kakao.maps.Size(36, 252)
			};
			var mark = createMarker(new kakao.maps.LatLng(art.lat, art.lng),
					createMarkerImage(markerImageSrc, imageSize, imageOptions));
			mark.setMap(map);
			marks.push(mark);
		});
	});
	
}


function museumLoad(){
	$.getJSON('json/museum.json', function(data) {
		$.each(data, function(index, museum) {
			var title = museum.title;
			
			var imageSize = new kakao.maps.Size(22, 26), imageOptions = {
				spriteOrigin : new kakao.maps.Point(10, 36),
				spriteSize : new kakao.maps.Size(36, 252)
			};
			
			var mark = createMarker(new kakao.maps.LatLng(museum.lat, museum.lng),
					createMarkerImage(markerImageSrc, imageSize, imageOptions));
			mark.setMap(map);
			marks.push(mark);
		});
	});
}

function hospitalLoad(){
	$.getJSON('json/hospital.json', function(data) {
		$.each(data, function(index, hospital) {
			var title = hospital.title;
			
			var imageSize = new kakao.maps.Size(22, 26), imageOptions = {
				spriteOrigin : new kakao.maps.Point(10, 72),
				spriteSize : new kakao.maps.Size(36, 252)
			};
			
			var mark = createMarker(new kakao.maps.LatLng(hospital.lat, hospital.lng),
					createMarkerImage(markerImageSrc, imageSize, imageOptions));
			mark.setMap(map);
			marks.push(mark);
		});
	});
}

function kidscafeLoad(){
	$.getJSON('json/kidscafe.json', function(data) {
		$.each(data, function(index, kidscafe) {
			var title = kidscafe.title;
			
			var imageSize = new kakao.maps.Size(22, 26), imageOptions = {
				spriteOrigin : new kakao.maps.Point(10, 108),
				spriteSize : new kakao.maps.Size(36, 252)
			};
			
			var mark = createMarker(new kakao.maps.LatLng(kidscafe.lat, kidscafe.lng),
					createMarkerImage(markerImageSrc, imageSize, imageOptions));
			mark.setMap(map);
			marks.push(mark);
		});
	});
}

function parkLoad(){
	$.getJSON('json/park.json', function(data) {
		$.each(data, function(index, park) {
			var title = park.title;
			
			var imageSize = new kakao.maps.Size(22, 26), imageOptions = {
				spriteOrigin : new kakao.maps.Point(10, 144),
				spriteSize : new kakao.maps.Size(36, 252)
			};
			
			var mark = createMarker(new kakao.maps.LatLng(park.lat, park.lng),
					createMarkerImage(markerImageSrc, imageSize, imageOptions));
			mark.setMap(map);
			marks.push(mark);
		});
	});
}

function daycarecenterLoad(){
	$.getJSON('json/daycarecenter.json', function(data) {
		$.each(data, function(index, daycarecenter) {
			var title = daycarecenter.title;
			
			var imageSize = new kakao.maps.Size(22, 26), imageOptions = {
				spriteOrigin : new kakao.maps.Point(10, 180),
				spriteSize : new kakao.maps.Size(36, 252)
			};
			
			var mark = createMarker(new kakao.maps.LatLng(daycarecenter.lat, daycarecenter.lng),
					createMarkerImage(markerImageSrc, imageSize, imageOptions));
			mark.setMap(map);
			marks.push(mark);
		});
	});
}

function kindergardenLoad(){
	$.getJSON('json/kindergarden.json', function(data) {
		$.each(data, function(index, kindergarden) {
			var title = kindergarden.title;
			
			var imageSize = new kakao.maps.Size(22, 26), imageOptions = {
				spriteOrigin : new kakao.maps.Point(10, 216),
				spriteSize : new kakao.maps.Size(36, 252)
			};
			
			var mark = createMarker(new kakao.maps.LatLng(kindergarden.lat, kindergarden.lng),
					createMarkerImage(markerImageSrc, imageSize, imageOptions));
			mark.setMap(map);
			marks.push(mark);
		});
	});
}

//마커이미지의 주소와, 크기, 옵션으로 마커 이미지를 생성하여 리턴하는 함수입니다
function createMarkerImage(src, size, options) {
	var markerImage = new kakao.maps.MarkerImage(src, size, options);
	return markerImage;
}

//좌표와 마커이미지를 받아 마커를 생성하여 리턴하는 함수입니다
function createMarker(position, image) {
	var marker = new kakao.maps.Marker({
		position : position,
		image : image
	});
	return marker;
}

function deleteMarker(mark) {
	for (var i = 0; i < mark.length; i++) {
		mark[i].setMap(null);
	}
	mark = [];
}

// 카테고리를 클릭했을 때 type에 따라 카테고리의 스타일과 지도에 표시되는 마커를 변경합니다
function changeMarker(type) {

	var artmuseum = document.getElementById('artmuseum');
	var museum = document.getElementById('museum');
	var hospital = document.getElementById('hospital');

	// 미술관 카테고리가 클릭됐을 때
	if (type === 'artmuseum') {
		// 미술관 카테고리를 선택된 스타일로 변경하고
		// 나머지 카테고리는 선택되지 않은 스타일로 바꿉니다
		artmuseum.className = 'menu_selected';
		museum.className = '';
		hospital.className = '';
		kidscafe.className = '';
		park.className = '';
		daycarecenter.className = '';
		kindergarden.className = '';

		deleteMarker(marks);
		marks = [];
		artmuseumLoad();

	} else if (type === 'museum') { // 박물관 카테고리가 클릭됐을 때
		// 박물관 카테고리를 선택된 스타일로 변경하고
		// 나머지 카테고리는 선택되지 않은 스타일로 바꿉니다
		artmuseum.className = '';
		museum.className = 'menu_selected';
		hospital.className = '';
		kidscafe.className = '';
		park.className = '';
		daycarecenter.className = '';
		kindergarden.className = '';

		deleteMarker(marks);
		marks = [];
		museumLoad();

	} else if (type === 'hospital') { // 병원 카테고리가 클릭됐을 때
		// 병원 카테고리를 선택된 스타일로 변경하고
		// 나머지 카테고리는 선택되지 않은 스타일로 바꿉니다
		artmuseum.className = '';
		museum.className = '';
		hospital.className = 'menu_selected';
		kidscafe.className = '';
		park.className = '';
		daycarecenter.className = '';
		kindergarden.className = '';

		deleteMarker(marks);
		marks = [];
		hospitalLoad();
	} else if (type === 'kidscafe') { // 키즈카페 카테고리가 클릭됐을 때
		// 키즈카페 카테고리를 선택된 스타일로 변경하고
		// 나머지 카테고리는 선택되지 않은 스타일로 바꿉니다
		artmuseum.className = '';
		museum.className = '';
		hospital.className = '';
		kidscafe.className = 'menu_selected';
		park.className = '';
		daycarecenter.className = '';
		kindergarden.className = '';

		deleteMarker(marks);
		marks = [];
		kidscafeLoad();
	} else if (type === 'park') { // 공원 카테고리가 클릭됐을 때
		// 공원 카테고리를 선택된 스타일로 변경하고
		// 나머지 카테고리는 선택되지 않은 스타일로 바꿉니다
		artmuseum.className = '';
		museum.className = '';
		hospital.className = '';
		kidscafe.className = '';
		park.className = 'menu_selected';
		daycarecenter.className = '';
		kindergarden.className = '';

		deleteMarker(marks);
		marks = [];
		parkLoad();
	} else if (type === 'daycarecenter') { // 어린이집 카테고리가 클릭됐을 때
		// 어린이집 카테고리를 선택된 스타일로 변경하고
		// 나머지 카테고리는 선택되지 않은 스타일로 바꿉니다
		artmuseum.className = '';
		museum.className = '';
		hospital.className = '';
		kidscafe.className = '';
		park.className = '';
		daycarecenter.className = 'menu_selected';
		kindergarden.className = '';

		deleteMarker(marks);
		marks = [];
		daycarecenterLoad();
	} else if (type === 'kindergarden') { // 유치원 카테고리가 클릭됐을 때
		// 유치원 카테고리를 선택된 스타일로 변경하고
		// 나머지 카테고리는 선택되지 않은 스타일로 바꿉니다
		artmuseum.className = '';
		museum.className = '';
		hospital.className = '';
		kidscafe.className = '';
		park.className = '';
		daycarecenter.className = '';
		kindergarden.className = 'menu_selected';

		deleteMarker(marks);
		marks = [];
		kindergardenLoad();
	}
}