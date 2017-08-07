var yourClassNum = 4; // 여기에 수강꾸러미에서 신청할 과목의 갯수를 넣으세요. 저는 예시로 4를 넣었습니다.
var sub_cde, sub_class_cde, sub_div_cde;

function doAddFromPack(a) {
    var rowId  = lectPackReqGrid.getSelectedRowId();
    var result = requestData( 	'procLectPackReqForInpt',
                            { 	
                                'onlineLectReq.open_yr_trm': '',
                                'onlineLectReq.subj_cde': lectPackReqGrid.getValue(a, 'subj_cde' ),
                                'onlineLectReq.sub_class_cde': lectPackReqGrid.getValue(a, 'sub_class_cde' ),
                                'onlineLectReq.subj_div_cde': lectPackReqGrid.getValue(a, 'subj_div_cde' ),
                                'onlineLectReq.lect_req_div_cde': '',
                                'onlineLectReq.lect_req_sts_cde': '',
                                'onlineLectReq.stu_nbr': '',
                                'onlineLectReq.strt_stu_nbr_yr': '',
                                'onlineLectReq.div': ''
                            });
        console.log(result);
}

var foo = function(input) {
    for(i=0;i<yourClassNum;++i) {
        doAddFromPack(input);
    }
}

var game = function() {
        setTimeout(function() {
        for(var j=0;j<yourClassNum;++j) {
            foo(j);
            console.log(lectPackReqGrid.getValue(j, 'subj_cde') + lectPackReqGrid.getValue(j, 'sub_class_cde')
            + "0" + lectPackReqGrid.getValue(j, 'subj_div_cde') + "가 수강신청 되고 있습니다!");
        }
    }, 10)
}

while(true) {
    date = new Date();
    if(date.getMinutes() < 59 && date.getSeconds() < 55) {
        console.log('아직 시간이 안 됐네요! 5초 전부터 시작합니다.')
    } else {
        break;
    }
}

while(true) {
    game();
}