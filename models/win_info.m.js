/**
 * Created by woosa on 15/8/6.
 */
var Sequelize = require('sequelize');
var db = require('./sequelize/database');

module.exports = db.define('lessons', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: Sequelize.STRING,
        open_id: Sequelize.STRING,
        nick_name: Sequelize.STRING,
        head_img_url: Sequelize.STRING,
        prize_id: Sequelize.INTEGER,
        prize_name: Sequelize.STRING,
        is_get: Sequelize.INTEGER,
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE
    }, {
        underscored: true,
        tableName: 'win_info'
    }
);