var conf = {

    SERVER_PORT: 8083,

    SSO_CONFIG: {
        URL_PRE: 'https://login-test.alibaba-inc.com:443',
        PATH: {
            GET_AUTH_CODE: '/authorize/login.do',
            GET_ACCESS_TOKEN: '/authorize/getAccessToken.do',
            VALIDATE_ACCESS_TOKEN:'/authorize/validateAccessToken.do',
            REFRESH_ACCESS_TOKEN: '/authorize/refreshAccessToken.do'
        },
        APP_CODE: '3bb596b7c5e2ee85b471e22e8b9b02fc',
        ACCESS_TOKEN_EXPIRE: 600000 // 10分钟
    },

    MYSQL: {
        HOST: '127.0.0.1',
        PORT: 3306,
        USER: 'root',
        PASSWORD: '',
        DB: 'woosa',
        LOGGING: false
    },

    CACHE: {
        ACCESS_TOKEN_PRE: 'access_token.'
    },

    BASE_URL: 'tianji'
};

module.exports = conf;
