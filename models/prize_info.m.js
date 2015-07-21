/**
 * Created by woosa on 15/7/20.
 */
var Sequelize = require('sequelize');
var db = require('./sequelize/database');

module.exports = db.define('PrizeInfo', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        content: Sequelize.STRING,
        status: Sequelize.INTEGER,
        published_at: Sequelize.DATE,
        expired_at: Sequelize.DATE
    }, {
        underscored: true,
        tableName: 'prize_info'
    }
);
