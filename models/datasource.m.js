var Sequelize = require('sequelize');
var db = require('./sequelize/database');

module.exports = db.define('Datasource', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: Sequelize.STRING,
        description: Sequelize.TEXT,
        type: Sequelize.STRING,
        hostname: Sequelize.STRING,
        port: Sequelize.INTEGER,
        database: Sequelize.STRING,
        username: Sequelize.STRING,
        password: Sequelize.STRING
    }, {
        underscored: true,
        tableName: 'a_report2_datasource'
    }
);