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
        "signature": req.params.signature,
        "timestamp": req.params.timestamp,
        "nonce": req.params.nonce,
        "echostr": req.params.echostr
    }

    weChatService.verifyAccessToken(body).then(function(data) {
        res.json(data);
    });

}