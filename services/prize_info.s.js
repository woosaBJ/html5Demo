/**
 * Created by woosa on 15/7/20.
 */

var _ = require('lodash');
var Q = require('q');

var logger = require('../logger').service;
var errors = require('../errors');

var prizeInfoDao = require('../daos/prize_info.d');


module.exports = {
    getPrizeInfoById: getPrizeInfoById,
    createPrizeInfo: createPrizeInfo,
    listPrizeInfos: listPrizeInfos,
    updatePrizeInfo: updatePrizeInfo,
    deletePrizeInfoById: deletePrizeInfoById,
};

function getPrizeInfoById(id) {
    return prizeInfoDao.findById(id);
}

function createPrizeInfo(prizeInfo) {
    return prizeInfoDao.create(prizeInfo);
}

function listPrizeInfos() {
    var defer = Q.defer();

    Q.all([prizeInfoDao.list(), interestDao.listInterest()])
        .then(function(result) {
            var prizeInfos = result[0];
            var interests = result[1];

            var prizeInfoIdTagsMap = {};
            interests.forEach(function(interest){
                prizeInfoIdTagsMap[interest.prizeInfo_id] = prizeInfoIdTagsMap[interest.prizeInfo_id] || [];
                if (interest.tags) {
                    prizeInfoIdTagsMap[interest.prizeInfo_id] = prizeInfoIdTagsMap[interest.prizeInfo_id].concat(interest.tags.split(','));
                }
            });

            // ΪprizeInfo���tags�ֶΣ������е�tag����
            prizeInfos.forEach(function(prizeInfo){
                var tags = prizeInfoIdTagsMap[prizeInfo.id] || [];
                prizeInfo.tags = _.uniq(tags);
            });

            defer.resolve(prizeInfos);
        })
        .catch(function(err){
            defer.reject(err);
        });

    return defer.promise;
}

function updatePrizeInfo(prizeInfo) {
    return prizeInfoDao.update(prizeInfo);
}

function deletePrizeInfoById(prizeInfoId) {
    return Q.all([prizeInfoDao.deleteById(prizeInfoId, interestDao.deleteInterestByPrizeInfoId(prizeInfoId))]);
}