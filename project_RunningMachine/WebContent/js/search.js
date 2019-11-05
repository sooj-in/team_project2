let coordinates = [];

$('document').ready(
		function() {

			var search_form = $("#search_f");

			search_form.on('submit', function(e) {
				e.preventDefault();

				var keyword = search_form.serialize();

				$.ajax({
					type : 'POST',
					url : search_form.attr('action'),
					data : keyword,
					dataType : 'json',
					success : function(res) {
						alert(res[0]);
						// 출력을 구분해 주기 위해 키값 가져오기
						let key = Object.keys(res[Object.keys(res)[0]])[0];

						if (key == "location_number") {

							// 동 검색시 추천 입지 목록 띄우기
							let addr = "<table>";

							for (let i = 0; i < res.length; i++) {
								addr += "<tr><td><a href='#'>" + res[i].addr
										+ "</a></td></tr>"
							}
							addr += "</table>"

							$('#search_result').html(addr);
							$('#search_result').css('display', 'block');

						} else if (key == "daycare_number") {

							// 어린이집 정보 출력
							if (res.length > 1) {

								// 2개 이상일때
								let daycare_list = "<table>";

								for (let i = 0; i < res.length; i++) {
									daycare_list += "<tr><td><a href '#'>"
											+ res[i].name + "</a></td>"
											+ "<td>" + res[i].area + "</td>"
											+ "</tr>"
								}
								daycare_list += "</table>"

								$('#search_result').html(daycare_list);
								$('#search_result').css('display', 'block');

							} else {

								// 1개 일때 출력
								let info = showDaycareInfo(res);
								$('#search_result').html(info);
								$('#search_result').css('display', 'block');

								// 해당 어린이집 경위도 리스트
								coordinates = [ [ [ res[0].lng ],
										[ res[0].lat ] ] ];
							}

						} else if (key == "near_number") {

							alert("b")
						}

					}
				});
			});
		});

function showDaycareInfo(res) {

	let info = "<table>" + "<tr><td>어린이집</td><td>" + res[0].name + "</td></tr>"
			+ "<tr><td>유형</td><td>" + res[0].type + "</td></tr>"
			+ "<tr><td>어린이수</td><td>" + res[0].childNum + "</td></tr>"
			+ "<tr><td>선생님수</td><td>" + res[0].teacherNum + "</td></tr>"
			+ "<tr><td>운영시간</td><td>" + res[0].time + "</td></tr>"
			+ "<tr><td>버스여부</td><td>" + res[0].bus + "</td></tr>"
			+ "<tr><td>설립연도</td><td>" + res[0].build + "</td></tr>"
			+ "<tr><td>주소</td><td>" + res[0].city + " " + res[0].local + " "
			+ res[0].road + "</td></tr>" + "</table>"

	return info;
}