var C = {
    HTTP_CONTINUE: 100,
    HTTP_SWITCHING_PROTOCOLS: 101,
    HTTP_PROCESSING: 102,
    HTTP_OK: 200,
    HTTP_CREATED: 201,
    HTTP_ACCEPTED: 202,
    HTTP_NON_AUTHORITATIVE: 203,
    HTTP_NO_CONTENT: 204,
    HTTP_RESET_CONTENT: 205,
    HTTP_PARTIAL_CONTENT: 206,
    HTTP_MULTI_STATUS: 207,
    HTTP_MULTIPLE_CHOICES: 300,
    HTTP_MOVED_PERMANENTLY: 301,
    HTTP_MOVED_TEMPORARILY: 302,
    HTTP_SEE_OTHER: 303,
    HTTP_NOT_MODIFIED: 304,
    HTTP_USE_PROXY: 305,
    HTTP_TEMPORARY_REDIRECT: 307,
    // 由于包含语法错误，当前请求无法被服务器理解。除非进行修改，否则客户端不应该重复提交这个请求。
    HTTP_BAD_REQUEST: 400,
    // 当前请求需要用户验证。该响应必须包含一个适用于被请求资源的WWW-Authenticate信息头用以询问用户信息。客户端可以重复提交一个包含恰当的Authorization头信息的请求。如果当前请求已经包含了Authorization证书，那么401响应代表着服务器验证已经拒绝了那些证书。如果401响应包含了与前一个响应相同的身份验证询问，且浏览器已经至少尝试了一次验证，那么浏览器应当向用户展示响应中包含的实体信息，因为这个实体信息中可能包含了相关诊断信息。参见RFC 2617。
    HTTP_UNAUTHORIZED: 401,
    HTTP_PAYMENT_REQUIRED: 402,
    // 服务器已经理解请求，但是拒绝执行它。与401响应不同的是，身份验证并不能提供任何帮助，而且这个请求也不应该被重复提交。如果这不是一个HEAD请求，而且服务器希望能够讲清楚为何请求不能被执行，那么就应该在实体内描述拒绝的原因。当然服务器也可以返回一个404响应，假如它不希望让客户端获得任何信息。
    HTTP_FORBIDDEN: 403,
    // 请求失败，请求所希望得到的资源未被在服务器上发现。没有信息能够告诉用户这个状况到底是暂时的还是永久的。假如服务器知道情况的话，应当使用410状态码来告知旧资源因为某些内部的配置机制问题，已经永久的不可用，而且没有任何可以跳转的地址。404这个状态码被广泛应用于当服务器不想揭示到底为何请求被拒绝或者没有其他适合的响应可用的情况下。
    HTTP_NOT_FOUND: 404,
    HTTP_METHOD_NOT_ALLOWED: 405,
    HTTP_NOT_ACCEPTABLE: 406,
    HTTP_PROXY_AUTHENTICATION_REQUIRED: 407,
    HTTP_REQUEST_TIME_OUT: 408,
    HTTP_CONFLICT: 409,
    HTTP_GONE: 410,
    HTTP_LENGTH_REQUIRED: 411,
    HTTP_PRECONDITION_FAILED: 412,
    HTTP_REQUEST_ENTITY_TOO_LARGE: 413,
    HTTP_REQUEST_URI_TOO_LARGE: 414,
    HTTP_UNSUPPORTED_MEDIA_TYPE: 415,
    HTTP_RANGE_NOT_SATISFIABLE: 416,
    HTTP_EXPECTATION_FAILED: 417,
    HTTP_UNPROCESSABLE_ENTITY: 422,
    HTTP_LOCKED: 423,
    HTTP_FAILED_DEPENDENCY: 424,
    HTTP_UPGRADE_REQUIRED: 426,
    // 服务器遇到了一个未曾预料的状况，导致了它无法完成对请求的处理。一般来说，这个问题都会在服务器的程序码出错时出现。
    HTTP_INTERNAL_SERVER_ERROR: 500,
    HTTP_NOT_IMPLEMENTED: 501,
    HTTP_BAD_GATEWAY: 502,
    HTTP_SERVICE_UNAVAILABLE: 503,
    HTTP_GATEWAY_TIME_OUT: 504,
    HTTP_VERSION_NOT_SUPPORTED: 505,
    HTTP_VARIANT_ALSO_VARIES: 506,
    HTTP_INSUFFICIENT_STORAGE: 507,
    HTTP_NOT_EXTENDED: 510
};



var util = require('util');

var AbstractError = function (status, msg, constr) {
    Error.captureStackTrace(this, constr || this);
    this.status = status || 500;
    this.message = msg || 'Error';
};
util.inherits(AbstractError, Error);
AbstractError.prototype.name = 'Abstract Error';


var BadRequestError = function (msg, constr) {
    BadRequestError.super_.call(this, 400, msg, constr || this.constructor);
};
util.inherits(BadRequestError, AbstractError);
BadRequestError.prototype.name = 'Bad Request Error';


var UnauthorizedError = function (msg, constr) {
    UnauthorizedError.super_.call(this, 401, msg, constr || this.constructor);
};
util.inherits(UnauthorizedError, AbstractError);
UnauthorizedError.prototype.name = 'Unauthorized Error';


var ForbiddenError = function (msg, constr) {
    ForbiddenError.super_.call(this, 403, msg, constr || this.constructor);
};
util.inherits(ForbiddenError, AbstractError);
ForbiddenError.prototype.name = 'Forbidden Error';


var NotFoundError = function (msg, constr) {
    NotFoundError.super_.call(this, 404, msg, constr || this.constructor);
};
util.inherits(NotFoundError, AbstractError);
NotFoundError.prototype.name = 'Not Found Error';


var InternalServerError = function (msg, constr) {
    InternalServerError.super_.call(this, 500, msg, constr || this.constructor);
};
util.inherits(InternalServerError, AbstractError);
InternalServerError.prototype.name = 'Internal Server Error';


var InvalidParametersError = function (msg, constr) {
    InvalidParametersError.super_.call(this, msg, constr || this.constructor);
};
util.inherits(InvalidParametersError, BadRequestError);
InvalidParametersError.prototype.name = 'Invalid Parameters Error';


var DatabaseError = function (msg, constr) {
    DatabaseError.super_.call(this, msg, constr || this.constructor);
};
util.inherits(DatabaseError, InternalServerError);
DatabaseError.prototype.name = 'Database Error';


var BucServiceError = function (msg, constr) {
    BucServiceError.super_.call(this, msg, constr || this.constructor);
};
util.inherits(BucServiceError, UnauthorizedError);
BucServiceError.prototype.name = 'Buc Service Error';

module.exports = {
    BadRequestError: BadRequestError,
    UnauthorizedError: UnauthorizedError,
    ForbiddenError: ForbiddenError,
    NotFoundError: NotFoundError,
    InternalServerError: InternalServerError,
    InvalidParametersError: InvalidParametersError,
    DatabaseError: DatabaseError,
    BucServiceError: BucServiceError
};
