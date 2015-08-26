/**
 * Created by nic on 15/8/26.
 */

var wechatCtrl = require('../controllers/wechat.c');

module.exports = function (h5Demo) {

    /**
     * 插入记录
     */
    h5Demo.get('/api/we_chat/', wechatCtrl.getToken);

    ///**
    // * 查看单个记录
    // */
    //h5Demo.get('/api/lessons/:id', wechatCtrl.getLessonById);
    //
    ///**
    // *按照某个字段查询
    // */
    //h5Demo.get('/api/lessons/query/:column_name/value/:column_value', wechatCtrl.getLessonsPages);
    //
    ///**
    // *查询所有记录
    // */
    //h5Demo.get('/api/lessons/query/all/', wechatCtrl.getLessonsList);

}
