/**
 * Created by nic on 15/8/26.
 */
var logger = require('../logger').controller;
var errors = require('../errors');

var weChatService = require('../services/wechat.s');


module.exports = {
    getToken: getToken
};

function getToken(req, res, next){
    weChatService.getAccessToken(req).then(function(data) {
       res.json(data);
    });
}