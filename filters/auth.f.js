var userService = require('../services/user.s');
var errors = require('../errors');

module.exports = function (req, res, next) {
    var accessToken = req.header('AccessToken');
    var refreshToken = req.header('RefreshToken');

    //1. get user info, ���� odps ��
    if (accessToken && refreshToken) {
        userService.getUserInfo(accessToken, refreshToken)
            .then(function (userInfo) {
                req.userInfo = userInfo;
                next();
            })
            .catch(function (err) {
                res.err(err);
            });
    } else {
        res.err(new errors.UnauthorizedError('Access Token not found!'));
    }
};

