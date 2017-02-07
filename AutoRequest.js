function doAddFromPack(a) {
    Utils.focus('search_subj_class_cde');
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

iterateRequest = setInterval(doAddFromPack(0), 1000);