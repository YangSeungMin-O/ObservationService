
/* JQuery연결 테스트 함수 */
$(function() {
    $.ajax({
        type : "GET",
        url : "/mainPage/getList.do",
        dataType : "hashMap",
        error : function(){
            alert('통신실패!!');
        },
        success : function(data){
            alert("통신데이터 값 : " + data);
        }  
    });
});