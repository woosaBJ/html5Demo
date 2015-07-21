/**
 * Created by woosa on 15/7/20.
 */

var prizeInfoCtrl = require('../controllers/prize_info.c');

module.exports = function (h5Demo) {

    ///**
    // * 创建报表
    // */
    //h5Demo.post('/api/projects/:project_id/reports/', prizeInfoCtrl.createReport);
    //
    /**
     * 查看单个记录
     */
    h5Demo.get('/api/prize_info/:id', prizeInfoCtrl.getPrizeInfo);

    ///**
    // * 查看所有报表
    // */
    //h5Demo.get('/api/reports/', prizeInfoCtrl.queryReports);
    //
    ///**
    // * 修改报表
    // */
    //h5Demo.put('/api/projects/:project_id/reports/:report_id', prizeInfoCtrl.updateReport);
    //
    ///**
    // * 删除报表
    // */
    //h5Demo.delete('/api/projects/:project_id/reports/:report_id', prizeInfoCtrl.deleteReport);
    //
    ///**
    // * 另存为报表
    // */
    //h5Demo.post('/api/reports/:report_id', prizeInfoCtrl.saveAsReport);


};

