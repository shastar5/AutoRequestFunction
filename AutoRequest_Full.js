count = 0;
var subj_class_cde = Utils.getFieldValue( 'search_subj_class_cde' ).toUpperCase();
var captcha_cde	   = Utils.getFieldValue('captcha_cde').toLowerCase();
alert = function() {}
logout = function() {}
if(subj_class_cde == null || subj_class_cde == '' ||subj_class_cde.length <10){
    
    alert('교과목 번호 10자리를 입력하여 주세요.');
    
}	

if ( captcha_cde == '' || captcha_cde == null ||captcha_cde.length <4){
    
    alert('자동입력방지문자 4자리를  입력하여 주세요.');
    
}
function RepeatRequest() {
            count++;
            console.log(count + '번째 시도중..');
	    	var result = requestData( 	'procOnlineLectReqForSelec',
					{ 	
						'onlineLectReq.open_yr_trm': '',
						// 자동입력방지
						'onlineLectReq.captcha_cde': captcha_cde,
						'onlineLectReq.subj_class_cde': subj_class_cde,
						'onlineLectReq.subj_cde': subj_class_cde.substr(0,7),
						'onlineLectReq.sub_class_cde': subj_class_cde.substr(7),
						'onlineLectReq.subj_div_cde': '',
						'onlineLectReq.lect_req_div_cde': '',
						'onlineLectReq.lect_req_sts_cde': '',
						'onlineLectReq.stu_nbr': '',
						'onlineLectReq.strt_stu_nbr_yr': '',
						'onlineLectReq.div': ''
					},
					function( fieldName ) {
						window.focus();
					});

	    	if ( result == null ) {
                console.log('성공')
	    		return false;
			}else if ( result.substr(0, 1) == '0' ) {
				doLoadOnlineLectCourseGrid();
				return false;
			}else if ( result.substr(0, 3) == '887' ) {  //서버의 자동입력방지 세션이 초기화 된경우,
				
				alert('자동입력방지 문자가 맞지 않습니다1.');
				
				
				
				//refreshCapcha();
				Utils.setFieldValue('captcha_cde', '');
				window.focus();
				return false;
			}else if ( result.substr(0, 3) == '888' ) {
				Utils.setFieldValue('captcha_cde', '');
				
				alert('자동입력방지 문자를 입력하여 주세요.');
				
				
				
				window.focus();
				return false;
			}else if ( result.substr(0, 3) == '889') {
				Utils.setFieldValue('captcha_cde', '');
				
				alert('자동입력방지 문자가 맞지 않습니다.');
				
				
				
				window.focus();
				return false;
			}else if ( result.substr(0, 3) == '998' ) {
				//doCancel();
				
				alert('교과목 번호를 바르게 입력하여 주세요.');
				
				
				
				window.focus();
				return false;
			}else if ( result.substr(0, 3) == '997' || result.substr(0, 3) == '996') {
				//doCancel();
				
				alert('교과목 번호를 바르게 입력하여 주세요.(1)');
				
				
				
				window.focus();
				return false;
			}else if ( result.substr(0, 3) == '111' || result.substr(0, 3) == '132' ) {
				//doCancel();
				alert( result.substr(3));
				location.reload();
				return false;
			}else if ( result.substr(0, 1) != '0' ) {
				//doCancel();
				alert( result.substr(3) );
				window.focus();
				return false;
			}
	    	
        }
        
setInterval(RepeatRequest, 5000);
limit = 9999999;