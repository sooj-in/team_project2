let coordinates = [];
let point = new Object();
var moveLatLon;
var result = document.getElementById('search_result');

$('document').ready(function() {
	let search_form = $("#search_f");
	search_form.on('submit', function(e) {
		e.preventDefault();
		let keyword = search_form.serialize();

		$.ajax({type : 'POST',
			    url : search_form.attr('action'),
			    data : keyword,
			    dataType : 'json',
			    success : function(res) {
			    	
			    	// 출력을 구분해 주기 위해 키값 가져오기
					let key = Object.keys(res[Object.keys(res)[0]])[0];
					if (key == "location_number") {
						// 동 검색시 추천 입지 목록 띄우기
						let searchdata = $("#searchKeyword").val();
						let addr = "<table>";
						for (let i = 0; i < res.length; i++) {
							addr += "<tr><td><span>" + res[i].addr + "</span></td></tr>";
						}
						point.x = Number(res[0].lat);
						point.y = Number(res[0].lng);
						moveLatLon = new kakao.maps.LatLng(point.x,point.y);
						map.setCenter(moveLatLon);
						map.setLevel(2, {animate : {duration : 350}});
						addr += "</table>";
						$('#search_result').html(addr);
						makeCoorList(res);
					} else if (key == "daycare_number") {
						// 어린이집 정보 출력
						if (res.length > 1) { // 2개 이상일때
							let daycare_list = "<table>";
							for (let i = 0; i < res.length; i++) {
								daycare_list += "<tr><td><span class='daycareInfo' id='" + i + "'>" + res[i].name + "</span></td>" +
                                "<td>"+ res[i].area +"</td></tr>";
							}
							daycare_list += "</table>";
							makeCoorList(res);

							$('#search_result').html(daycare_list);
							let spans = document.querySelectorAll('span.daycareInfo');

			                for (let i = 0; i < res.length; i++) {
			                	$('#' + i).on('click', function(){
			                		showDaycareInfo(res, i);
			                	});
			                }
						} else { // 1개 일때 출력
							let info = showDaycareInfo(res, 0);
							//해당 어린이집 경위도 리스트
			                makeCoorList(res);
						}

					}
				}
			});
		});
	});

function showDaycareInfo(res, i) {
	let info = "<table>" + "<tr><td>어린이집</td><td>" + res[i].name + "</td></tr>" +
			   "<tr><td>유형</td><td>" + res[i].type + "</td></tr>"  +
	           "<tr><td>어린이수</td><td>" + res[i].childNum + "</td></tr>"  +
			   "<tr><td>선생님수</td><td>" + res[i].teacherNum + "</td></tr>"  +
			   "<tr><td>운영시간</td><td>" + res[i].time + "</td></tr>" +
			   "<tr><td>버스여부</td><td>" + res[i].bus + "</td></tr>" +
			   "<tr><td>설립연도</td><td>" + res[i].build + "</td></tr>" +
			   "<tr><td>주소</td><td>" + res[i].city + " " + res[i].local + " " + res[i].road+ "</td></tr>" +
			   "<tr><td>점수</td><td>" + res[i].score + "</td></tr>" +
			   "</table>";
	point.x = Number(res[i].lat);
	point.y = Number(res[i].lng);

	moveLatLon = new kakao.maps.LatLng(point.x,point.y);
	map.setCenter(moveLatLon);
	map.setLevel(2, {animate : {duration : 350}});
	
	$('#search_result').html(info);
	   
	coordinates = [];
	coordinates[0] = [[res[i].lat],[res[i].lng]];
}

function makeCoorList(res) {
	coordinates = [];
	for (let i = 0; i < res.length; i++) {
		
		coordinates[i] = [[res[i].lat],[res[i].lng]];
	}
	
	
	return coordinates;
}