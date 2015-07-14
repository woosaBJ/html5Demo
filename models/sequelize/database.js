var Sequelize = require('sequelize');
var config = global.config;
var mysqlConfig = config.MYSQL;

module.exports = new Sequelize(
    mysqlConfig.DB,
    mysqlConfig.USER,
    mysqlConfig.PASSWORD,
    {
        host: mysqlConfig.HOST,
        port: mysqlConfig.PORT,
        dialect: 'mysql',
        logging: mysqlConfig.LOGGING,
        maxConcurrentQueries: 100,
        define: {
            underscored: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        },
        pool: {maxConnections: 20, maxIdleTime: 30}
    }
);
