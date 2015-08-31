/**
 * Created by nic on 15/8/26.
 */
var _ = require('lodash');
var Q = require('q');
var request = require('request');

var logger = require('../logger').service;
var errors = require('../errors');
var cache = require('memory-cache');
var sign = require('../utils/sign');


module.exports = {
    getAccessToken: getAccessToken,
    verifyAccessToken: verifyAccessToken
};

function getAccessToken(req) {
    var deferred = Q.defer();

    logger.info("http request start");

    var url = 'https://api.weixin.qq.com/cgi-bin/token';

    request({
            url: url,
            qs: {
                //woosa 测试号
                //grant_type: 'client_credential',
                //appid: 'wxa6e80024f55c6353',
                //secret: '0f8ebb3b60c7a9f6f0e687988a4c53d9'
                //途说账号
                grant_type: 'client_credential',
                appid: 'wx17cf203f039f106b',
                secret: 'fdf5333145e5b1ac78cd3d617f26e17a'

            },
            json: true
        },
        function (error, response, body) {
            logger.info(body);
            deferred.resolve(body);
        }
    );

    return deferred.promise;
}

function verifyAccessToken(data){
    var deferred = Q.defer();

    var token = 'super88';
    var paraArr = [token,data.timestamp,data.nonce];
    paraArr = paraArr.sort();

    var paraStr = sign.arrToStr(paraArr);
    var flag  = sign.verify(paraStr,data.signature);

    if(flag){
        body = data.echostr;

    }else{
        body = 'error';
    }
    logger.info(body);
    deferred.resolve(body);

    return deferred.promise;
}


