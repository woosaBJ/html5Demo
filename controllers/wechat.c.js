/**
 * Created by nic on 15/8/26.
 */
var logger = require('../logger').controller;
var errors = require('../errors');

var weChatService = require('../services/wechat.s');


module.exports = {
    getToken: getToken,
    verifyToken: verifyToken
};

function getToken(req, res, next){
    weChatService.getAccessToken(req).then(function(data) {
       res.json(data);
    });
}

function verifyToken(req, res, next){
    var body = {
        "signature": req.query.signature,
        "timestamp": req.query.timestamp,
        "nonce": req.query.nonce,
        "echostr": req.query.echostr
    }
    logger.info(body);
    weChatService.verifyAccessToken(body).then(function(data) {
        res.send(data);
    });

}