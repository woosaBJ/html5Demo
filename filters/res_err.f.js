var logger = require('../logger');

exports = module.exports = function (req, res, next) {

    // 为res添加 err 和 throwError 方法
    res.err = res.throwError = function (err) {
        logger.filter.error(err);
        res.status(err.status || 500);
        res.json({
            message: err.message
        });
    };

    next();
};