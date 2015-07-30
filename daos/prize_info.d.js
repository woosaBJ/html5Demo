/**
 * Created by woosa on 15/7/20.
 */

var Q = require('q');

var logger = require('../logger').dao;
var errors = require('../errors');

var PrizeInfo = require('../models/prize_info.m');


module.exports = {
    create: create,
    list: list,
    findById: findById,
    findByName: findByName,
    deleteById: deleteById,
    update: update
};


function create(prizeInfo) {
    var deferred = Q.defer();
    if (prizeInfo.is_published) {
        prizeInfo.published_at = new Date();
    }
    PrizeInfo
        .find({
            where: {
                name: prizeInfo.name
            }
        })
        .success(function (sameNamePrizeInfo) {
            if (sameNamePrizeInfo) {
                deferred.reject(new errors.BadRequestError('PrizeInfo ' + prizeInfo.name + ' already exists!'));
            } else {
                PrizeInfo
                    .create(prizeInfo)
                    .success(function (result) {
                        deferred.resolve(result.values);
                    })
                    .error(function (err) {
                        deferred.reject(new errors.DatabaseError(err.name + ': ' + err.message));
                    });
            }
        })
        .error(function (err) {
            deferred.reject(new errors.DatabaseError(err.name + ': ' + err.message));
        });
    return deferred.promise;
}

function list() {
    var deferred = Q.defer();
    PrizeInfo
        .findAll()
        .success(function (prizeInfos) {
            var result = [];
            prizeInfos.forEach(function (prizeInfo) {
                prizeInfo = prizeInfo.values;
                if (prizeInfo.saved_widgets) {
                    prizeInfo.saved_widgets = true;
                }
                result.push(prizeInfo);
            });
            deferred.resolve(result);
        })
        .error(function (err) {
            deferred.reject(new errors.DatabaseError(err.name + ': ' + err.message));
        });
    return deferred.promise;
}

function update(prizeInfo) {
    var deferred = Q.defer();
    if (!prizeInfo.saved_widgets && prizeInfo.is_published) {
        prizeInfo.published_at = new Date();
    } else {
        if (prizeInfo.published_at) {
            delete prizeInfo.published_at;
        }
    }
    PrizeInfo
        .update(prizeInfo, {id: prizeInfo.id})
        .success(function (affectedRows) {
            if (affectedRows === 0) {
                deferred.reject(new errors.NotFoundError('PrizeInfo ' + prizeInfo.id + ' not found!'));
            } else {
                deferred.resolve();
            }
        })
        .error(function (err) {
            deferred.reject(new errors.DatabaseError(err.name + ': ' + err.message));
        });
    return deferred.promise;
}

function findById(prizeInfoId) {
    return PrizeInfo.find(prizeInfoId);
}

function findByName(prizeInfoName) {
    logger.info(prizeInfoName);
    return PrizeInfo.findAll({
        where: {
            name: prizeInfoName
        }
    });
}

function deleteById(prizeInfoId) {
    var deferred = Q.defer();
    PrizeInfo
        .destroy({
            id: prizeInfoId
        })
        .success(function (affectedRows) {
            deferred.resolve(affectedRows);
        })
        .error(function (err) {
            deferred.reject(new errors.DatabaseError(err.name + ': ' + err.message));
        });
    return deferred.promise;
}

