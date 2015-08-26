/**
 * Created by nic on 15/8/26.
 */
var _ = require('lodash');
var Q = require('q');

var logger = require('../logger').service;
var errors = require('../errors');
var https =  require('https');



module.exports = {
    getAccessToken: getAccessToken
};

function getAccessToken(req){
    logger.info("http request start");
    https.get('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxa6e80024f55c6353&secret=0f8ebb3b60c7a9f6f0e687988a4c53d9', function(res) {
        logger.info("statusCode: ", res.statusCode);
        logger.info("headers: ", res.headers);

        res.on('data', function(d) {
            logger.info(d);
        });

    }).on('error', function(e) {
        console.error(e);
    });
}
