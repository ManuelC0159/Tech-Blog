const { Sequelize } = require("sequelize");

const {
    Model,
    DataType
} = require('Sequelize');

const sequelize = require('../config/connections');

class Comment extends Model{}

Comment.init({
    id:{
        type: DataType.INTEGER,
        allowNull: false,
        primarayKey: true,
        autoIncrement: true
    },
    comment_text:{
        type: DataType.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    user_id:{
        type: DataType.INTEGER,
        allowNull: false,
        references:{
            model: 'post',
            key: 'id'
        }

    }
},{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
})

module.exports = Comment;