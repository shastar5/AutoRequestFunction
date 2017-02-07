var yourClassNum = 4;

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
            console.log("Foo" + j + " is being done!");
        }
    }, 10)
}

for(i=0;i<5;i++) {
    game();
}