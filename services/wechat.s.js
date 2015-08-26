/**
 * Created by nic on 15/8/26.
 */
var _ = require('lodash');
var Q = require('q');
var request = require('request');

var logger = require('../logger').service;
var errors = require('../errors');


module.exports = {
    getAccessToken: getAccessToken
};

function getAccessToken(req) {
    var deferred = Q.defer();

    logger.info("http request start");

    var url = 'https://api.weixin.qq.com/cgi-bin/token';

    request({
            url: url,
            qs: {
                grant_type: 'client_credential',
                appid: 'wxa6e80024f55c6353',
                secret: '0f8ebb3b60c7a9f6f0e687988a4c53d9'
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
