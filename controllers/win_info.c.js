/**
 * Created by woosa on 15/8/6.
 */
var logger = require('../logger').controller;
var errors = require('../errors');

var winInfoService = require('../services/win_info.s');


module.exports = {
    createWinInfo: createWinInfo,
    getWinInfo: getWinInfo,
    getWinInfos: getWinInfos,
    getWinInfosByPrizeName: getWinInfosByPrizeName,
    getSumWinInfosByPrizeName: getSumWinInfosByPrizeName
};


function createWinInfo(req, res, next) {
    console.log('testssssssssss')
    var winInfo = req.body;
    winInfoService
        .createWinInfo(winInfo) //promise
        .then(function (result) {
            res.status(201).json(result);
        })
        .catch(function (err) {
            next(err);
        });
}

function getWinInfo(req, res, next) {
    var id = req.params.id;
    logger.info(id);

    winInfoService.getWinInfoById(id)
        .then(function (result) {
            res.status(200).json(result);
        })
        .catch(function (err) {
            next(err);
        });
}

function getWinInfos(req, res, next) {
    var userId = req.params.user_id;
    logger.info(userId);
    winInfoService.getWinInfoByUserId(userId)
        .then(function (winInfos) {
            res.json(winInfos);
        })
        .catch(function (err) {
            next(err);
        });
}


function getWinInfosByPrizeName(req, res, next) {
    var prizeName = req.params.prize_name;
    logger.info(prizeName);
    winInfoService.getWinInfosByPrizeName(prizeName)
        .then(function (winInfos) {
            res.json(winInfos);
        })
        .catch(function (err) {
            next(err);
        });
}


function getSumWinInfosByPrizeName(req, res, next) {
    var prizeName = req.params.prize_name;
    var prizeId = req.params.prize_id;
    var winPrize = {
        "prize_name": prizeName,
        "prize_id": prizeId
    }

    logger.info(prizeName);
    winInfoService.getSumWinInfosByPrizeName(winPrize)
        .then(function (winInfos) {
            res.json(winInfos);
        })
        .catch(function (err) {
            next(err);
        });
}
