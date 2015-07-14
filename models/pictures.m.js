/**
 * Created by woosa on 15/7/6.
 */
var Sequelize = require('sequelize');
var db = require('./sequelize/database');

module.exports = db.define('Project', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        text: Sequelize.STRING,
        status:Sequelize.STRING,
        position:Sequelize.STRING,
        intime: Sequelize.STRING
    }, {
        underscored: true,
        tableName: 'pictiures'
    }
);