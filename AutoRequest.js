var yourClassNum = 4;
var sub_cde, sub_class_cde, sub_div_cde;
var iteration = 2;

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

for(i=0;i<iteration;i++) {
    game();
}