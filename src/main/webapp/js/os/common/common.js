
function getContextPath() {
    return window.location.pathname.substring(0, window.location.pathname.indexOf("/",2));
}
/**
 * 함수 설명 : 코드성 라디오박스 생성
 * @param id : span태그 id값
 * @param name : radio name값
 * @param params : 파라미터
 * @param async  :  동기/비동기 여부
 * @param selVal  :  초기값 세팅 -  필요할 경우 사용
 * CD, CD_NM 사용
 * 
 * ex)
 * <span id="rTest"></span>
 * setRadioBoxList("rTest","ATTR_2", {pType : 0, ATTR_1 : '223'},false, '');
 */
function setRadioBoxList(id, name, params, async, selVal) {
	if (async == undefined)
		async = true;
	var obj = $("#" + id);
	obj.html("");
	var url = "/cms/codeUtil/codeListAjax";
	var params = params;
	var sucessFunc = function(data) {
		var list = data.list;
		for (var i = 0; i < list.length; i++) {
			var ck = "";
			if(list[i].CD == selVal) ck = "checked='checked'";
			if((selVal == undefined || selVal == "") && i == 0) ck = "checked='checked'";
			
			var html = "<input type='radio' name='"+name+"' id='"+name+i+"' "+ck+" value='"+list[i].CD+"'/><label for='"+name+i+"'>"+list[i].CD_NM+"</label>&nbsp;" 
			$("#" + id).append(html);
		}
	};
	ajaxCallNoBlock(url, params, sucessFunc, "", async);
}

/**
 * 함수 설명 : 코드성 라디오박스 생성
 * @param id : span태그 id값
 * @param name : radio name값
 * @param params : 파라미터
 * @param async  :  동기/비동기 여부
 * @param selVal  :  초기값 세팅 -  필요할 경우 사용
 * CD_NO, CD_NM 사용
 * 
 * ex)
 * <span id="rTest"></span>
 * setRadioBoxList("rTest","ATTR_2", {pType : 0, ATTR_1 : '223'},false, '');
 */
function setRadioBoxList2(id, name, params, async, selVal) {
	if (async == undefined)
		async = true;
	var obj = $("#" + id);
	obj.html("");
	var url = "/cms/codeUtil/codeListAjax";
	var params = params;
	var sucessFunc = function(data) {
		var list = data.list;
		for (var i = 0; i < list.length; i++) {
			var ck = "";
			if(list[i].CD_NO == selVal) ck = "checked='checked'";
			if((selVal == undefined || selVal == "") && i == 0) ck = "checked='checked'";
			
			var html = "<input type='radio' name='"+name+"' id='"+name+i+"' "+ck+" value='"+list[i].CD_NO+"'/><label for='"+name+i+"'>"+list[i].CD_NM+"</label>&nbsp;" 
			$("#" + id).append(html);
		}
	};
	ajaxCallNoBlock(url, params, sucessFunc, "", async);
}


/**
 * 함수 설명 : 코드성 콤보박스 생성
 * @param type  :  S:선택, A:전체,null:없음, 그외에는 표시값을 표시
 * @param id  :  id
 * @param params  :  파라미터
 * @param async  :  동기/비동기 여부
 * @param selVal  :  초기값 세팅 -  필요할 경우 사용
 * CD, CD_NM 사용
 */
function setComboBoxObjList(type, obj, params, async, selVal) {
	if (async == undefined)
		async = true;
	obj.html("");
	var url = "/cms/codeUtil/codeListAjax";
	var params = params;
	var sucessFunc = function(data) {
		var list = data.list;
		if (type == "S") {
			AddOptionSelectBox(obj, '', false, '-선택-');
		} else if (type == "A") {
			AddOptionSelectBox(obj, '', false, '-전체-');
		} else if (type != "" && type != undefined && type != null) {
			AddOptionSelectBox(obj, '', false, type);
		}

		for (var i = 0; i < list.length; i++) {
			var ck = false;
			if (list[i].CD == selVal)
				ck = true;
			var codeNm = list[i].CD_NM;
			if (codeNm == undefined)
				codeNm = list[i].CD;
			AddOptionSelectBox(obj, list[i].CD, ck, codeNm);
		}
	};
	ajaxCallNoBlock(url, params, sucessFunc, "", async);
}



/**
 * 함수 설명 : 코드성 콤보박스 생성
 * @param type  :  S:선택, A:전체,null:없음, 그외에는 표시값을 표시
 * @param id  :  id
 * @param params  :  파라미터
 * @param async  :  동기/비동기 여부
 * @param selVal  :  초기값 세팅 -  필요할 경우 사용
 * CD, CD_NM 사용
 */
function setComboBoxList(type, id, params, async, selVal) {
	if (async == undefined)
		async = true;
	var obj = $("#" + id);
	obj.html("");
	var url = "/cms/codeUtil/codeListAjax";
	var params = params;
	var sucessFunc = function(data) {
		var list = data.list;
		if (type == "S") {
			AddOptionSelectBox(obj, '', false, '-선택-');
		} else if (type == "A") {
			AddOptionSelectBox(obj, '', false, '-전체-');
		} else if (type != "" && type != undefined && type != null) {
			AddOptionSelectBox(obj, '', false, type);
		}

		for (var i = 0; i < list.length; i++) {
			var ck = false;
			if (list[i].CD == selVal)
				ck = true;
			var codeNm = list[i].CD_NM;
			if (codeNm == undefined)
				codeNm = list[i].CD;
			AddOptionSelectBox(obj, list[i].CD, ck, codeNm);
		}
	};
	ajaxCallNoBlock(url, params, sucessFunc, "", async);
}
/**
 * 함수 설명 : 코드성 콤보박스 생성
 * @param type  :  S:선택, A:전체,null:없음, 그외에는 표시값을 표시
 * @param id  :  id
 * @param params  :  파라미터
 * @param async  :  동기/비동기 여부
 * @param selVal  :  초기값 세팅 -  필요할 경우 사용
 * CD_NO, CD_NM 사용
 */
function setComboBoxList2(type, id, params, async, selVal) {
	if (async == undefined)
		async = true;
	var obj = $("#" + id);
	obj.html("");
	var url = "/cms/codeUtil/codeListAjax";
	var params = params;
	var sucessFunc = function(data) {
		var list = data.list;
		if (type == "S") {
			AddOptionSelectBox(obj, '', false, '-선택-');
		} else if (type == "A") {
			AddOptionSelectBox(obj, '', false, '-전체-');
		} else if (type != "" && type != undefined && type != null) {
			AddOptionSelectBox(obj, '', false, type);
		}
		
		for (var i = 0; i < list.length; i++) {
			var ck = false;
			if (list[i].CD_NO == selVal)
				ck = true;
			var codeNm = list[i].CD_NM;
			if (codeNm == undefined)
				codeNm = list[i].CD_NO;
			AddOptionSelectBox(obj, list[i].CD_NO, ck, codeNm);
		}
	};
	ajaxCallNoBlock(url, params, sucessFunc, "", async);
}

/**
 * selectBox 생성
 * @param $element
 * @param strValue
 * @param bSelected
 * @param strText
 */
function AddOptionSelectBox($element, strValue, bSelected, strText) {
	if (bSelected)
		$element.append('<option value="' + strValue + '" selected>' + strText
				+ '</option>');
	else
		$element.append('<option value="' + strValue + '">' + strText
				+ '</option>');
}

/**
 * 함수 설명 : 엑셀 다운로드 시 사용 - 다운로드 시간이 오래걸리는 경우 사용 (화면에 다운로드 중이라고 표시해줌)
 * @param formId  :  form id
 */
function excelDownLoad(url, formId) {
	startDownBlockUi();
	var formObj = $("#" + formId);
	$.fileDownload(url, {
		httpMethod : 'POST',
		data : formObj.serialize()
	}).done(function(url) {
		stopBluckUi();
		var menu_no = $($("input[name='cur_menu_no']")[0]).val();
		gfnInsertMenuLog(menu_no, 'D');
	}).fail(function(responseHtml, url) {
		stopBluckUi();
		alert("시스템 오류가 발생하였습니다.\n잠시후에 사용하시기 바랍니다.")
	});
}

/**
 * 함수 설명 : 엑셀 다운로드 시 사용 - 다운로드 시간이 오래걸리는 경우 사용 (화면에 다운로드 중이라고 표시해줌)
 * @param url  :  요청 URL
 * @param paramData  :  요청 데이타
 */
function excelDownLoadParamData(url, paramData) {
	startDownBlockUi();
	$.fileDownload(url, {
		httpMethod : 'POST',
		data : paramData
	}).done(function(url) {
		stopBluckUi();
	}).fail(function(responseHtml, url) {
		stopBluckUi();
		alert("시스템 오류가 발생하였습니다.\n잠시후에 사용하시기 바랍니다.")
	});
}

/**
 * 함수 설명 : blockUi - 엑셀 다운로드용
 */
function startDownBlockUi() {
	startBlockUi("엑셀 다운로드 중입니다.....<br/>잠시만 기다려 주시기 바랍니다.");
}

/**
 * 함수 설명 : blockUi - Ajax 조회용
 * @param msg  :  보여지는 메시지 글
 */
function startBlockUi(msg) {
	if (msg == undefined)
		msg = '데이터 로딩중입니다.....<br/>잠시만 기다려 주시기 바랍니다.';
	$.blockUI({
		message : msg,
		css : {
			border : 'none',
			padding : '15px',
			backgroundColor : '#000',
			'-webkit-border-radius' : '10px',
			'-moz-border-radius' : '10px',
			position : 'absolute',
			'z-index' : '9999999',
			opacity : .5,
			color : '#fff'
		}
	});
	/*$.blockUI({ message: null, overlayCSS: { backgroundColor: '#f5f5f5' ,opacity : 0.6}});*/
}
/**
 * 함수 설명 : blockUi 종료
 */
function stopBluckUi() {
	$.unblockUI();
}

function ajaxCallHtml(url, params, sucessFun, errorFun, async) {
	if (async == undefined)
		async = true;
	$.ajax({
		cache : false,
		type : "POST",
		url : url,
		data : params,
		async : async,
		dataType : 'html',
		contentType : "application/x-www-form-urlencoded; charset=UTF-8", // AJAX contentType
		success : function(data) {
			var result = data;
			try {
				result = JSON.parse(data);
			} catch (e) {
				result = data;
			}

			if (result.resultCode != undefined && result.resultCode == '401') {
				alert(result.resultMsg);
				location.href = "/cms";
				if (typeof (errorFun) == 'function')
					errorFun(result);
				return;
			}
			if (result.resultMsg != undefined && result.resultMsg != '') {
				alert(result.resultMsg);
			}
			if (typeof (sucessFun) == 'function')
				sucessFun(result);
		},
		error : function(xhr, status, error) {
			alert("시스템 오류가 발생하였습니다." + error);
			if (typeof (errorFun) == 'function')
				errorFun();
			return;
		},
		beforeSend : function() {
		},
		complete : function() {
		}
	});
}
//엑셀업로드 
function ajaxfileUpload(url, formId, sucessFun, errorFun) {
	var formData = new FormData($("#" + formId)[0]);
	$.ajax({
		cache : false,
		async : true, //동기통신 false, 비동기통신 true
		processData : false,
		dataType : "json",
		url : url,
		type : 'post',
		enctype : "multipart/form-data",
		data : formData,
		contentType : false,
		//submit이후의 처리
		success : function(data) {
			if (data.resultCode != undefined && data.resultCode == '401') {
				alert(data.resultMsg);
				if (typeof (errorFun) == 'function') errorFun(data);
				return;
			}
			if (data.resultMsg != undefined && data.resultMsg != '') {
				alert(data.resultMsg);
			}
			if (typeof (sucessFun) == 'function') sucessFun(data);
		},
		error : function(e) {
			alert("시스템 오류가 발생하였습니다.\n엑셀 서식에 문제가 있습니다.");
			if (typeof (errorFun) == 'function')
				errorFun();
			return;
		},
		beforeSend : function() {
			startBlockUi("엑셀 업로드 중입니다.....<br/>잠시만 기다려 주시기 바랍니다.");
		},
		complete : function() {
			stopBluckUi();
		}
	});
}
//그냥 파일 
function ajaxfileUpload2(url, formId, sucessFun, errorFun) {
	var formData = new FormData($("#" + formId)[0]);
	$.ajax({
		cache : false,
		async : true, //동기통신 false, 비동기통신 true
		processData : false,
		dataType : "json",
		url : url,
		type : 'post',
		enctype : "multipart/form-data",
		data : formData,
		contentType : false,
		//submit이후의 처리
		success : function(data) {
			if (data.resultCode != undefined && data.resultCode == '401') {
				alert(data.resultMsg);
				if (typeof (errorFun) == 'function') errorFun(data);
				return;
			}
			if (data.resultMsg != undefined && data.resultMsg != '') {
				alert(data.resultMsg);
			}
			if (typeof (sucessFun) == 'function') sucessFun(data);
		},
		error : function(e) {
			alert("시스템 오류가 발생하였습니다.");
			if (typeof (errorFun) == 'function')
				errorFun();
			return;
		},
		beforeSend : function() {
			startBlockUi("파일 업로드 중입니다.....<br/>잠시만 기다려 주시기 바랍니다.");
		},
		complete : function() {
			stopBluckUi();
		}
	});
}
//기본 Ajax 처리 메소드
function ajaxCall(url, params, sucessFun, errorFun, async) {
	if (async == undefined) async = true;
	$.ajax({
		cache : false,
		type : "POST",
		url : url,
		data : params,
		async : async,
		dataType : 'json',
		contentType : "application/x-www-form-urlencoded; charset=UTF-8", // AJAX contentType
		success : function(data) {
			if (data.resultCode != undefined && data.resultCode == '401') {
				alert(data.resultMsg);
				if (data.resultCode == '401') location.href = "/";//세션정보가 없을경우
				return;
			}
			if (data.resultMsg != undefined && data.resultMsg != '') {
				alert(data.resultMsg);
			}
			if (typeof (sucessFun) == 'function')
				sucessFun(data);
		},
		error : function(xhr, status, error) {
			alert("시스템 오류가 발생하였습니다." + error);
			if (typeof (errorFun) == 'function') errorFun();
			return;
		},
		beforeSend : function() {
			if (typeof (startBlockUi) == 'function') startBlockUi("시스템 처리중입니다.....<br/>잠시만 기다려 주시기 바랍니다.");
		},
		complete : function() {
			if (typeof (stopBluckUi) == 'function') stopBluckUi();
		}
	});
}
function ajaxMobileCall(url, params, sucessFun, errorFun, async) {
	if (async == undefined) async = true;
	$.ajax({
		cache : false,
		type : "POST",
		url : url,
		data : params,
		async : async,
		dataType : 'json',
		contentType : "application/x-www-form-urlencoded; charset=UTF-8", // AJAX contentType
		success : function(data) {
			if (data.resultCode != undefined && data.resultCode == '401') {
				alert(data.resultMsg);
				if (data.resultCode == '401') location.href = "/";//세션정보가 없을경우
				return;
			}
			if (data.resultMsg != undefined && data.resultMsg != '') {
				alert(data.resultMsg);
			}
			if (typeof (sucessFun) == 'function')
				sucessFun(data);
		},
		error : function(xhr, status, error) {
			alert("시스템 오류가 발생하였습니다." + error);
			if (typeof (errorFun) == 'function') errorFun();
			return;
		},
		beforeSend : function() {
			$.blockUI({ message: null, overlayCSS: { backgroundColor: '#f5f5f5' ,opacity : 0.6}});
			$("#viewLoading").show();
		},
		complete : function() {
			$("#viewLoading").hide();
            $.unblockUI();
		}
	});
}
function ajaxCallNoBlock(url, params, sucessFun, errorFun, async) {
	if (async == undefined) async = true;
	$.ajax({
		cache : false,
		type : "POST",
		url : url,
		data : params,
		async : async,
		dataType : 'json',
		contentType : "application/x-www-form-urlencoded; charset=UTF-8", // AJAX contentType
		success : function(data) {
			if (data.resultCode != undefined && data.resultCode == '401') {
				alert(data.resultMsg);
				if (data.resultCode == '401') location.href = "/";//세션정보가 없을경우
				return;
			}
			if (data.resultMsg != undefined && data.resultMsg != '') {
				alert(data.resultMsg);
			}
			if (typeof (sucessFun) == 'function')
				sucessFun(data);
		},
		error : function(xhr, status, error) {
			alert("시스템 오류가 발생하였습니다." + error);
			if (typeof (errorFun) == 'function') errorFun();
			return;
		}
	});
}

/**
 * Array 파라미터 정보를 전송할경우 사용
 * (ajax option으로 traditional :true 설정)
 * @param url
 * @param params : Array 파라미터
 * @param sucessFun
 * @param errorFun
 * @param async
 */
function ajaxTraditionalCall(url, params, sucessFun, errorFun, async) {
	if (async == undefined)
		async = true;
	$("#viewLoading").show();
	$.ajax({
		cache : false,
		type : "POST",
		url : url,
		traditional : true,
		data : params,
		async : async,
		dataType : 'json',
		contentType : "application/x-www-form-urlencoded; charset=UTF-8", // AJAX contentType
		success : function(data) {
			//$("#viewLoading").hide();
			if (data.resultCode != undefined && data.resultCode == '401') {
				alert(data.resultMsg);
				if (typeof (errorFun) == 'function')
					errorFun(data);
				return;
			}
			if (data.resultMsg != undefined && data.resultMsg != '') {
				alert(data.resultMsg);
			}
			if (typeof (sucessFun) == 'function')
				sucessFun(data);
		},
		error : function(xhr, status, error) {
			//$("#viewLoading").hide();
			stopBluckUi();
			alert("시스템 오류가 발생하였습니다." + error);
			if (typeof (errorFun) == 'function')
				errorFun();
			return;
		}
	});
}
/************************************************* 달력 하나에 사용 되는 공통 함수 Begin *************************************************/
/**
 * 함수 설명 : 달력(DatePicker)적용 - 개별 날짜 사용시 사용
 * @param obj  :  해당 객체
 * @param dateformat  :  날짜형식
 */
function gfnSetDatePickerOne(obj, dateformat) {

	if (dateformat == "" || dateformat == undefined) {
		dateformat = 'yy-mm-dd';
	}
	$(obj).datepicker(
			{
				closeText : '닫기',
				prevText : '이전달',
				nextText : '다음달',
				currentText : '오늘',
				monthNamesShort : [ '1월', '2월', '3월', '4월', '5월', '6월', '7월',
						'8월', '9월', '10월', '11월', '12월' ],
				dayNamesMin : [ '일', '월', '화', '수', '목', '금', '토' ],
				weekHeader : 'Wk',
				dateFormat : dateformat, // 날짜형식 = 20130329
				autoSize : false, // 자동리사이즈 (false 이면 상위 정의에 따름)
				changeMonth : true, // 월변경 가능
				changeYear : true, // 연변경 가능
				showMonthAterYear : true, // 년 위에 월 표시
				showOn : 'both', // 엘리먼트와 이미지 동시사용 (both, button)
				buttonImageOnly : true, // 이미지 표시
				buttonText : '달력', // 버튼 텍스트 표시
				buttonImage : '/com/images/sub/calendar.png', // 이미지 주소
				showMonthAfterYear : true,
				showButtonPanel : true,
				onSelect : function() { //날짜 선택시 호출되는 함수
					$(this).removeClass("errInpt");
				},
			//yearRange: 'c-99:c+99',  // 1990~2020년 까지
			//maxDate: '+6Y',    // 오늘 부터 6년 후까지만.  +0d 오늘 이전 날짜만 선택
			//minDate: '-30d'
			});

}
/************************************************* 달력 하나에 사용 되는 공통 함수 end *************************************************/

/************************************************* 달력 기간에 사용 되는 공통 함수 Begin *************************************************/
/**
 * 함수 설명 : 기간 날짜 설정 간단하게 세팅하는 함수 input id는 고정으로 사용 pStartDay,pEndDay 
 * @param obj  :  해당 객체
 * @param dateformat  :  날짜형식
 */
function gfnInitDatePickerTwo(pId, pId2, dateformat) {
	if(pId == undefined){
		gfnSetDatePickerTwo($("#pStartDay"), dateformat, 'pStartDay', 'pEndDay');
	}else{
		gfnSetDatePickerTwo($("#"+pId), dateformat ,pId, pId2);
	}
	if(pId2 == undefined){
		gfnSetDatePickerTwo($("#pEndDay"), '', 'pStartDay', 'pEndDay');
	}else{
		gfnSetDatePickerTwo($("#"+pId2), dateformat, pId, pId2);
	}
}

/**
* 함수 설명 : 기간 날짜 설정 간단하게 세팅하는 함수 input id는 고정으로 사용 pStartDay,pEndDay  + 선택가능한 년도 1997년부터로 설정기능 필요하여 생성 (2022-05-13 소다시스템)
* @param obj  :  해당 객체
* @param dateformat  :  날짜형식
*/
function gfnInitDatePickerThree(pId, pId2, dateformat) {
	if(pId == undefined){
		gfnSetDatePickerThree($("#pStartDay"), dateformat, 'pStartDay', 'pEndDay');
	}else{
		gfnSetDatePickerThree($("#"+pId), dateformat ,pId, pId2);
	}
	if(pId2 == undefined){
		gfnSetDatePickerThree($("#pEndDay"), '', 'pStartDay', 'pEndDay');
	}else{
		gfnSetDatePickerThree($("#"+pId2), dateformat, pId, pId2);
	}
}

/**
 * 함수 설명 : 달력(DatePicker)적용 - 시작날짜와 종료날짜 같이 사용할 경우 이함수사용
 * @param obj  :  해당 객체
 * @param dateformat  :  날짜형식
 */
function gfnSetDatePickerTwo(obj, dateformat, pId, pId2) {

	if (dateformat == "" || dateformat == undefined) {
		dateformat = 'yy-mm-dd';
	}
	$(obj)
			.datepicker(
					{
						closeText : '닫기',
						prevText : '이전달',
						nextText : '다음달',
						currentText : '오늘',
						monthNamesShort : [ '1월', '2월', '3월', '4월', '5월', '6월',
								'7월', '8월', '9월', '10월', '11월', '12월' ],
						dayNamesMin : [ '일', '월', '화', '수', '목', '금', '토' ],
						weekHeader : 'Wk',
						dateFormat : dateformat, // 날짜형식 = 20130329
						autoSize : false, // 자동리사이즈 (false 이면 상위 정의에 따름)
						changeMonth : true, // 월변경 가능
						changeYear : true, // 연변경 가능
						showMonthAterYear : true, // 년 위에 월 표시
						showOn : 'both', // 엘리먼트와 이미지 동시사용 (both, button)
						buttonImageOnly : true, // 이미지 표시
						buttonText : '달력', // 버튼 텍스트 표시
						buttonImage : '/com/images/sub/calendar.png', // 이미지 주소
						showMonthAfterYear : true,
						showButtonPanel : true,
						onSelect : function() { //날짜 선택시 호출되는 함수
							$(this).removeClass("errInpt");
							if (typeof (gfnSelectDPEvent) == 'function') gfnSelectDPEvent(this, pId, pId2);
							if (typeof (userSelectEvent) == 'function') userSelectEvent(this);
								
						}/*,
						minDate : (typeof (gfnSetDPMinDate) == 'function') ? gfnSetDPMinDate($(obj), pId, pId2)
								: '',
						maxDate : (typeof (gfnSetDPMaxDate) == 'function') ? gfnSetDPMaxDate($(obj), pId, pId2)
								: ''*/

					//yearRange: 'c-99:c+99',  // 1990~2020년 까지
					//maxDate: '+6Y',    // 오늘 부터 6년 후까지만.  +0d 오늘 이전 날짜만 선택
					//minDate: '-30d'
					});
}

/**
 * 함수 설명 : 달력(DatePicker)적용 - 시작날짜와 종료날짜 같이 사용할 경우 이함수사용 + 선택가능한 년도 1997년부터로 설정기능 필요하여 생성 (2022-05-13 소다시스템)
 * @param obj  :  해당 객체
 * @param dateformat  :  날짜형식
 */
function gfnSetDatePickerThree(obj, dateformat, pId, pId2) {
	if (dateformat == "" || dateformat == undefined) {
		dateformat = 'yy-mm-dd';
	}
	$(obj)
			.datepicker(
					{
						closeText : '닫기',
						prevText : '이전달',
						nextText : '다음달',
						currentText : '오늘',
						monthNamesShort : [ '1월', '2월', '3월', '4월', '5월', '6월',
								'7월', '8월', '9월', '10월', '11월', '12월' ],
						dayNamesMin : [ '일', '월', '화', '수', '목', '금', '토' ],
						weekHeader : 'Wk',
						dateFormat : dateformat, // 날짜형식 = 20130329
						autoSize : false, // 자동리사이즈 (false 이면 상위 정의에 따름)
						changeMonth : true, // 월변경 가능
						changeYear : true, // 연변경 가능
						showMonthAterYear : true, // 년 위에 월 표시
						showOn : 'both', // 엘리먼트와 이미지 동시사용 (both, button)
						buttonImageOnly : true, // 이미지 표시
						buttonText : '달력', // 버튼 텍스트 표시
						buttonImage : '/com/images/sub/calendar.png', // 이미지 주소
						showMonthAfterYear : true,
						showButtonPanel : true,
						onSelect : function() { //날짜 선택시 호출되는 함수
							$(this).removeClass("errInpt");
							if (typeof (gfnSelectDPEvent) == 'function') gfnSelectDPEvent(this, pId, pId2);
							if (typeof (userSelectEvent) == 'function') userSelectEvent(this);
								
						},/*,
						minDate : (typeof (gfnSetDPMinDate) == 'function') ? gfnSetDPMinDate($(obj), pId, pId2)
								: '',
						maxDate : (typeof (gfnSetDPMaxDate) == 'function') ? gfnSetDPMaxDate($(obj), pId, pId2)
								: ''*/

					yearRange: '1997:c+99',  // 1997~2020년 까지
					maxDate: '+0d'    // 오늘 부터 6년 후까지만.  +0d 오늘 이전 날짜만 선택
					//minDate: '-30d'
					});
}

//달력 선택시 min,max 값 재설정
function gfnSelectDPEvent(obj, pId, pId2) {
	
	var d1 = Number($("#"+pId).val().replace(/-/g, '').replace(/[.]/g, ''));
	var d2 = Number($("#"+pId2).val().replace(/-/g, '').replace(/[.]/g, ''));
	var id = $(obj).attr("id");
	if (id == pId) {
		if(d1 > d2) $("#"+pId2).val($("#"+pId).val());
	}else if (id == pId2) {
		if(d1 > d2) $("#"+pId).val($("#"+pId2).val());
	}
	
	/*var id = $(obj).attr("id");
	if (id == pId) {
		$('#'+pId2).datepicker("option", "minDate", $("#"+pId).val());
	} else if (id == pId2) {
		$('#'+pId).datepicker("option", "maxDate", $("#"+pId2).val());
	}*/
}
//시작날짜의 min날짜 설정
function gfnSetDPMinDate(obj, pId, pId2) {
	var retVal = "";
	var id = $(obj).attr("id");
	if (id == pId2) {
		retVal = $("#"+pId).val();
	}
	return retVal;
}
//시작날짜의 max날짜 설정
function gfnSetDPMaxDate(obj) {
	var retVal = "";
	var id = $(obj).attr("id");
	if (id == "pStartDay") {
		retVal = $("#pEndDay").val();
	}
	return retVal;
}
/************************************************* 달력 기간에 사용 되는 공통 함수 End *************************************************/

/************************************************* Jquery를 좀더 쉽게 사용하기 위해 만든 공통 함수 Begin *************************************************/
/**
 * 함수 설명 : selectBox 값을 리턴함
 * @param ojbIdorNm  :  id 및 name값을 인자로 사용(필수)
 */
function gfnIdVal(ojbId) {
	var retVal = "";
	if (ojbId != undefined)
		retVal = $("#" + ojbId).val();
	return gfnCheckNull(retVal);
}

/**
 * 함수 설명 : selectBox 값을 리턴함
 * @param ojbIdorNm  :  id 및 name값을 인자로 사용(필수)
 */
function gfnSelectBoxVal(ojbIdorNm) {
	var retVal = "";
	if (ojbIdorNm != undefined)
		retVal = $("#" + ojbIdorNm + " option:selected").val();
	if (retVal == undefined)
		retVal = $("select[name=" + getSelectBoxVal + "]").val();
	return gfnCheckNull(retVal);
}

/**
 * 함수 설명 : radio 값을 리턴함
 * @param ojbNm  :  name값을 인자로 사용(필수)
 */
function gfnRadioVal(ojbNm) {
	var retVal = "";
	retVal = $("input:radio[name=" + ojbNm + "]:checked").val();
	return gfnCheckNull(retVal);
}
/************************************************* Jquery를 좀더 쉽게 사용하기 위해 만든 공통 함수 End *************************************************/

/************************************************* 편리하기 사용하기 위해 만든 공통 유틸 javascript Begin *************************************************/
/**
 * 함수 설명 : null값을 다른 문자열로 대체, 대체문자열이 없을 경우 공백으로 리턴
 * @param data :  검사 데이터값(필수)
 * @param chr  :  대체문자 
 */
function gfnCheckNull(data, chr) {
	if (chr == null || chr == undefined)
		chr = '';

	if (data == null || data == undefined || data == 'null' || data === '') {
		return chr;
	} else {
		return data;
	}
}

/**
 * 함수 설명 : null값을 '-' 바 형태의 문자열로 리턴
 * @param data :  검사 데이터값(필수)
 */
function gfnCheckNullToBar(data) {
	return gfnCheckNull(data, '-');
}

/**
 * 체크된 항목들 값을 취합해서 리턴
 * @param itemName 체크박스명
 * @param delim    구분자
 */
function gfnCheckBoxCheckedToString(itemName, delim) {
	var obj = document.getElementsByName(itemName);
	var div = delim;
	if (div == "")
		div = "|";
	var chkCnt = 0;
	if (typeof (obj) == 'undefined') {
		return "";
	}
	var s = "";
	var n = 0;
	for (var i = 0; i < obj.length; i++) {
		if (obj[i].checked) {
			if (n > 0)
				s += div;
			s += obj[i].value;
			n++;
		}
	}
	return s;
}

/**
 * 특정이름의 멀티체크박스를 체크 또는 체크해제한다.
 * ex) <input type=checkbox name=IDS value='...'>
 *     <script language='javascript'>
 *		gfnToggleMultiChk(this.checked, 'IDS')
 *	   </script>
 *
 * @param bCheck    true|false(체크할 상태)
 * @param itemName  체크대상 체크박스이름
 */
function gfnToggleMultiChk(bCheck, itemName) {
	var obj = document.getElementsByName(itemName);
	if (typeof (obj) == 'undefined') {
		return;
	}

	for (var i = 0; i < obj.length; i++) {
		obj[i].checked = bCheck;
	}
}

/**
 * input 객체들 구분자로 문자열 반환
 * @param obj 해당 객체들 
 */
function gfnObjToString(obj) {
	var len = obj.length;
	var ele = obj;
	var str = "";
	if (obj.length > 1) {
		for (var i = 0; i < len; i++) {
			if (i > 0) {
				str += "|";
			}
			str += ele[i].value;
		}
	} else {
		str = obj.value;
	}
	return str;
}

/**
 * 체크된 항목들 값을 취합해서 리턴
 * @param itemName 체크박스명
 * @param delim    구분자
 */
function gfnMultiCheckedString(itemName, delim) {
	var obj = document.getElementsByName(itemName);
	var div = delim;
	if (div == "" || div == undefined)
		div = "|";
	var chkCnt = 0;
	if (typeof (obj) == 'undefined') {
		return "";
	}
	var s = "";
	var n = 0;
	for (var i = 0; i < obj.length; i++) {
		if (obj[i].checked) {
			if (n > 0)
				s += div;
			s += obj[i].value;
			n++;
		}
	}
	return s;
}

function gfntMultiNonCheckedString(itemName, delim) {
	var obj = document.getElementsByName(itemName);
	var div = delim;
	if (div == "" || div == undefined)
		div = "|";
	var chkCnt = 0;
	if (typeof (obj) == 'undefined') {
		return "";
	}
	var s = "";
	var n = 0;
	for (var i = 0; i < obj.length; i++) {
		if (obj[i].checked) {

		} else {
			if (n > 0)
				s += div;
			s += obj[i].value;
			n++;

		}
	}
	return s;
}

/**
 * 팝업 오픈
 * @param url URL 
 * @param w 폭 
 * @param h 너비
 * @param s 스크롤바 여부 1, 'Y'이면 보여줌, 0, '', 'N'이면 숨김 
 */
function gfnPopup(url, w, h, s, target) {

	var l, t, objPopup
	if (target == 'undefined' || target == '' || target == null) {
		var target = 'win1';
	}
	l = (screen.width - w) / 2;
	t = (screen.height - h) / 2;
	if (s == 1 || s == "Y")
		objPopup = window.open(url, target, 'width=' + w + ',height=' + h
				+ ',left=' + l + ',top=' + t + ',resizable=0,scrollbars=1');
	else if (s == 2)
		objPopup = window.open(url, target, 'width=' + w + ',height=' + h
				+ ',left=' + l + ',top=' + t + ',resizable=1,scrollbars=1');
	else if (s == "" || s == 0 || s == "N" || !s || s == "0")
		objPopup = window.open(url, target, 'width=' + w + ',height=' + h
				+ ',left=' + l + ',top=' + t
				+ ',resizable=0,scrollbars=0,status=0');
	else
		objPopup = window.open(url, target, 'width=' + w + ',height=' + h
				+ ',left=' + l + ',top=' + t
				+ ',resizable=1,menubar=1,toolbar=1,scrollbars=1,status=1');
	if (objPopup == null) {
		alert("차단된 팝업창을 허용해 주십시오.");
	}
	return objPopup;
}

/**
 * 쿠키값 세팅
 * @param cookieName 쿠키이릅 
 * @param value 쿠키값
 * @param exdays 만료일
 */
function gfnSetCookie(cookieName, value, exdays) {
	if (value == undefined)
		value = "on";
	if (exdays == undefined)
		exdays = 1;
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var cookieValue = escape(value)
			+ ((exdays == null) ? "" : "; path=/; expires="
					+ exdate.toGMTString());
	document.cookie = cookieName + "=" + cookieValue;
}

/**
 * 쿠키값 삭제
 * @param cookieName 쿠키이릅 
 */
function gfnDeleteCookie(cookieName) {
	var expireDate = new Date();
	expireDate.setDate(expireDate.getDate() - 1);
	document.cookie = cookieName + "= " + "; path=/; expires="
			+ expireDate.toGMTString();
}

/**
 * 쿠키값 가져오기
 * @param cookieName 쿠키이릅 
 */
function gfnGetCookie(cookieName) {
	cookieName = cookieName + '=';
	var cookieData = document.cookie;
	var start = cookieData.indexOf(cookieName);
	var cookieValue = '';
	if (start != -1) {
		start += cookieName.length;
		var end = cookieData.indexOf(';', start);
		if (end == -1)
			end = cookieData.length;
		cookieValue = cookieData.substring(start, end);
	}
	return unescape(cookieValue);
}

/* 쿠키 사용 팝업 닫기 */
function gfnCloseWin(cookieName) {
	gfnSetCookie(cookieName);
	self.close();
}

/* 쿠키 사용 레이어 팝업 닫기 */
function gfnCloseLayer(cookieName) {
	gfnSetCookie(cookieName);
	$("#" + cookieName).hide();
	return false;
}

//현재 메시지 바이트 수 계산
function gfnLengthMsg(objMsg) {
	var nbytes = 0;
	for (i = 0; i < objMsg.length; i++) {
		var ch = objMsg.charAt(i);
		if (escape(ch).length > 4) {
			nbytes += 2;
		} else if (ch == '\n') {
			if (objMsg.charAt(i - 1) != '\r') {
				nbytes += 1;
			}
		} else if (ch == '<' || ch == '>') {
			nbytes += 4;
		} else {
			nbytes += 1;
		}
	}
	return nbytes;
}
/*
 * 검색기간 체크
 * */
function gfnDayDifCheck(obj, obj2) {
	var d1 = Number(obj.val().replace(/-/g, ''));
	var d2 = Number(obj2.val().replace(/-/g, ''));
	if (d2 - d1 < 0) {
		alert("기간설정이 잘못되었습니다.");
		obj.focus();
		return false;
	}
	return true
}

function gfnLeadingZeros(n, digits) {
	var zero = '';
	n = n.toString();

	if (n.length < digits) {
		for (i = 0; i < digits - n.length; i++)
			zero += '0';

	}
	return zero + n;
}

function gfnCurYYYY() {
	var d = new Date();

	return gfnLeadingZeros(d.getFullYear(), 4);
}

function gfnCurMM() {
	var d = new Date();

	return gfnLeadingZeros(d.getMonth() + 1, 2);
}

function gfnCurDD() {
	var d = new Date();

	return gfnLeadingZeros(d.getDate(), 2);
}

function gfnCurYYYYMMDD() {
	return gfnCurYYYY()+gfnCurMM()+gfnCurDD();
}

function gfnCurDate() {
	var d = new Date();

	var date = '';

	date += gfnLeadingZeros(d.getFullYear(), 4) + '-';
	date += gfnLeadingZeros(d.getMonth() + 1, 2) + '-';
	date += gfnLeadingZeros(d.getDate(), 2) + ' ';
	date += gfnLeadingZeros(d.getHours(), 2) + ':';
	date += gfnLeadingZeros(d.getMinutes(), 2) + ':';
	date += gfnLeadingZeros(d.getSeconds(), 2);

	return date;
}

function gfnIsDateCheck(str) {
	if (!/([0-9]{4})([0-9]{2})([0-9]{2})/.test(str)) {
		//alert("날짜의 형식이 잘못 입력되었습니다.\n예) 1996-04-05");
		return false;
	}
	// 현재 날짜
	var toDay = new Date();

	var arrDate0 = str.substr(0, 4);
	var arrDate1 = str.substr(4, 2);
	var arrDate2 = str.substr(6, 2);

	var maxDay = new Date(new Date(arrDate0, arrDate1, 1) - 86400000).getDate();

	if (arrDate0 == 0000 || arrDate0 > toDay.getFullYear()) {
		//alert("잘못된 년도를 입력하였습니다.");
		return false;
	}
	if (arrDate1 == 00 || arrDate1 > 12) {
		//alert("잘못된 월을 입력하였습니다.");
		return false;
	}
	if (arrDate2 == 00 || arrDate2 > maxDay) {
		//alert("잘못된 일을 입력하였습니다.");
		return false;
	}
	return true;
}

/************************************************* 편리하기 사용하기 위해 만든 공통 유틸 javascript End *************************************************/


//날짜형식 체크
function gfnDayFormatCheck(format, val){
	format = format.toUpperCase();
	var pattern;
	if (format == 'YYYYMMDDHH24MI') {
		pattern = /^\d{4}\d{2}\d{2}\d{2}\d{2}$/;
	} else if (format == 'YYYYMMDD HH24MI') {
		pattern = /^\d{4}\d{2}\d{2} \d{2}\d{2}$/;
	} else if (format == 'YYYY.MM.DD HH24:MI') {
		pattern = /^\d{4}\.\d{2}\.\d{2} \d{2}\:\d{2}$/;
	} else if (format == 'YYYYMMDD') {
		pattern = /^\d{4}\d{2}\d{2}$/;
	} else if (format == 'YYYY.MM.DD') {
		pattern = /^\d{4}\.\d{2}\.\d{2}$/;
	} else if (format == 'YYYY-MM-DD') {
		pattern = /^\d{4}\-\d{2}\-\d{2}$/;
	} else if (format == 'YYYY') {
		pattern = /^\d{4}$/;
	} else if (format == 'MMDD') {
		pattern = /^\d{2}\d{2}$/;
	} else if (format == 'MM.DD') {
		pattern = /^\d{2}\.\d{2}$/;
	} else if (format == 'MM-DD') {
		pattern = /^\d{2}\-\d{2}$/;
	} else if (format == 'HH24MI') {
		pattern = /^\d{2}\d{2}$/;
	} else if (format == 'HH24:MI') {
		pattern = /^\d{2}\:\d{2}$/;
	} else if (format == 'MM') {
		pattern = /^\d{2}$/;
	} else if (format == 'DD') {
		pattern = /^\d{2}$/;
	}
	return pattern.test(val);
}


/**
 * 함수 설명 : 좌측문자열채우기
 * @param str  :  원 문자열
 * @param padLen  :  최대 채우고자 하는 길이
 * @param padStr  :  채우고자하는 문자(char)
 */
function setStrLpad(str, padLen, padStr) {
    if (padStr.length > padLen) {
        console.log("오류 : 채우고자 하는 문자열이 요청 길이보다 큽니다");
        return str;
    }
    str += ""; // 문자로
    padStr += ""; // 문자로
    while (str.length < padLen)
        str = padStr + str;
    str = str.length >= padLen ? str.substring(0, padLen) : str;
    return str;
}

/**
 * 공통 첨부파일 다운로드
 * @param fileId
 * @param fileSeq
 */
function gfnFileDown(fileId, fileSeq){
	gfnInsertMenuLog($($("input[name='pMENU_NO']")[0]).val(), 'D');//다운 이력 저장
	location.href = "/jfile/readDownloadFile.do?fileId="+fileId+"&fileSeq="+fileSeq;
}
/**
 * 공통 첨부파일 전체 다운로드
 * @param fileId
 * @param fileSeq
 */
function gfnFileAllDown(fileId){
	gfnInsertMenuLog($($("input[name='pMENU_NO']")[0]).val(), 'D');//다운 이력 저장
	location.href = "/jfile/downloadAll.do?fileId="+fileId;
}


/**
 * 함수 설명 : 각 메뉴별 접근 로그 저장
 * @param menuNo :  메뉴번호
 * @param accesSe :   구분값 A:메뉴접근, I:검색조회 ,D:엑셀다운로드
 */
function gfnInsertMenuLog(menuNo, access) {
	if (menuNo == undefined || menuNo == '')
		return;
	var url = window.location.pathname;
	$.ajax({
		type : "POST",
		url : "/cms/insertMenuLogAjax",
		data : {
			menuNo : menuNo,
			access : access, 
			url : url
		},
		async : true,
		dataType : 'json',
		contentType : "application/x-www-form-urlencoded; charset=UTF-8", // AJAX contentType
		success : function(data) {
		},
		error : function(xhr, status, error) {
			console.log("시스템 오류가 발생하였습니다." + error);
			return;
		}
	});
}

function numberFormatComma(num) {
	num = num.toString();
	var pattern = /(-?[0-9]+)([0-9]{3})/;

	while (pattern.test(num)) {
		num = num.replace(pattern, "$1,$2");
	}
	if(num == 'NaN') num = '';
	return num;
}

//레이어 블럭UI 팝업 열기
function gfnBlockUIOpen(layerObj){
	$(layerObj).show();
	$("#divBlock").show();
}
//레이어 블럭UI 팝업 닫기
function gfnBlockUIColse(layerObj){
	$(layerObj).hide();
	$("#divBlock").hide();
}


//ajax 페이징 처리시 사용
function setPagingAjaxTable (data, pagingId){
	 var obj = $("#"+pagingId);
	 var pager = data.pager;
	 $(obj).html('');
	 if (pager.prevPage > 0) {
		 $('<a href="" class="arrowbtn" title="첫페이지" onClick="goSearch(1);return false;">&lt;&lt</a>').appendTo(obj);
		 $('<a href="" class="arrowbtn" title="이전 10페이지" onClick="goSearch(' + pager.prevPage + ');return false;" >&lt;</a>').appendTo(obj);
	 }
	 for (var i = 0; temp = pager.pageList, i < temp.length; i++) {
		 if (temp[i] == pager.currentPage) {
			 $('<a class="select">' + temp[i] + '</a>').appendTo(obj);
		 } else {
			 $('<a href="" onClick="goSearch(' + temp[i]	+ ');return false;">' + temp[i] + '</a>').appendTo(obj);
		 }
	 }
	 if (pager.nextPage > 0) {
		 $('<a href="" class="arrowbtn" title="다음 10페이지" onClick="goSearch(' + pager.nextPage + ');return false;" >&gt</a>').appendTo(obj);
		 $('<a href="" class="arrowbtn" title="마지막페이지" onClick="goSearch(' + pager.totalPage + ');return false;" >&gt;&gt;</a>').appendTo(obj);
	 }
};


function goMenuMove(p){
	href="/cms/link/?pMENU_NO="+p;
	return false;
}











//날짜가 포맷에 맞는지 검사
function isDateFormat(d) {
var df = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;
return d.match(df);
 }

 // 윤연에 해당하는지 검사
function isLeaf(year) {
var leaf = false;

if(year % 4 == 0) {
leaf = true;
if(year % 100 == 0) leaf = false;
if(year % 400 == 0) leaf = true;
}
return leaf;
 }

 // 날짜가 포맷에 맞고 윤연에 해당하는지 실제 날짜 유효성 검사
function isValidDate(d) {
if(!isDateFormat(d)) return false;

var month_day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var dateArray = d.split('-');
var year = Number(dateArray[0]);
var month = Number(dateArray[1]);
var day = Number(dateArray[2]);

if(day == 0) return false;

var isValid = false;

// 윤년
if(isLeaf(year)) {
if(month == 2) {
if(day <= month_day[month-1] + 1) isValid = true;
} else {
if(day <= month_day[month-1]) isValid = true;
}
} else {
if(day <= month_day[month-1]) isValid = true;
}
return isValid;
 }

//이전달을 구하는 함수 
//ex : gfnAddMonth('20200101',1) , gfnAddMonth('20200101',-4)
function gfnAddMonth(today, diff_month) {
	today = today.replace(/-/g, '');
	today = today.slice(0,4) + '-' + today.slice(4,6) + '-' + today.slice(6); // ex) 2019-12-10 
	var d = new Date(today);
	d.setMonth(d.getMonth() + diff_month) ;
	var dateJSON = {"year":d.getFullYear(), "month":gfnLeadingZeros(d.getMonth()+1,2), "day" : gfnLeadingZeros(d.getDate(),2), "ymd" :d.getFullYear()+"-"+gfnLeadingZeros(d.getMonth()+1,2)+"-"+gfnLeadingZeros(d.getDate(),2) };
	return dateJSON;
}

 //isValidDate('2017-10-13');

//다음날을 구하는 함수
//ex : gfnAddDay('20200101',1) , gfnAddDay('20200101',-4) 
function gfnAddDay(today, diff_month) {
	today = today.replace(/-/g, '');
	today = today.slice(0,4) + '-' + today.slice(4,6) + '-' + today.slice(6); // ex) 2019-12-10 
	var d = new Date(today); // 2019-12-10T00:00:00.000Z 
	d.setDate(d.getDate() + diff_month) ;
	
	var dateJSON = {"year":d.getFullYear(), "month":gfnLeadingZeros(d.getMonth()+1,2), "day" : gfnLeadingZeros(d.getDate(),2), "ymd" :d.getFullYear()+"-"+gfnLeadingZeros(d.getMonth()+1,2)+"-"+gfnLeadingZeros(d.getDate(),2) };
	return dateJSON;
}

/**
 *  시설명 검색기능 (소다)
 */
function goFcltSearch(isWms){	
	//$("#fclt").empty();
	var type = 17;
	var ATTR_5 = null;
	if(isWms == '' || isWms == null || isWms == 'Y'){
		isWms = 'ex'
	}else if(isWms == 'N'){
		// 개선시설 콤보박스
		type = 16;
		isWms = '';
	}else if(isWms != null && isWms =='Z'){
		//수질개선 등록
		type = 17;	
		isWms = '';
	}
	
	$("#headOffice").val('');
	$("#branchOffice").val('');
	setComboBoxList("","fclt" ,{pType:type,  ATTR_1 : $("#headOffice").val(), ATTR_2 : $("#branchOffice").val(), ATTR_3 : isWms,ATTR_4 :$("#facltNm").val()},false, '');
	$("#fclt").prepend("<option value='S'>-검색 시설수 "+$("#fclt option").length+"건-</option>");
	$("#fclt").val("S");
}


/**
 * 시설명 엔터 검색기능 (소다)
*/
function setInputEnter(isWms){
	$("#facltNm").on("keyup",function(key){
        if(key.keyCode==13) {
        	console.log(("엔터키 이벤트"));
        	goFcltSearch(isWms);        	
        }
    });
}