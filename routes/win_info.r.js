/**
 * Created by woosa on 15/8/6.
 */
var winInfoCtrl = require('../controllers/win_info.c');

module.exports = function (h5Demo) {

    /**
     * 插入中奖纪录
     */
    h5Demo.post('/api/win_info/', winInfoCtrl.createWinInfo);

    /**
     * 查看单个记录
     */
    h5Demo.get('/api/win_info/:id', winInfoCtrl.getWinInfo);

    /**
     * 查看某个用户中奖记录
     */
    h5Demo.get('/api/win_info/user/:user_id', winInfoCtrl.getWinInfos);

    /**
     * 查看某类型的中奖纪录
     */
    h5Demo.get('/api/win_info/prize_name/:prize_name', winInfoCtrl.getWinInfosByPrizeName);
}