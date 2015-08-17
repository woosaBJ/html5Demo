/**
 * Created by woosa on 15/8/13.
 */
var lessonsCtrl = require('../controllers/lessons.c');

module.exports = function (h5Demo) {

    /**
     * 插入记录
     */
    h5Demo.post('/api/lessons/', lessonsCtrl.createWinInfo);

    /**
     * 查看单个记录
     */
    h5Demo.get('/api/lessons/:id', lessonsCtrl.getWinInfo);

    /**
     * 按照某个字段值进行排序
     */
    h5Demo.get('/api/lessons/query/:column_name/value/:column_value', lessonsCtrl.getWinInfos);

}