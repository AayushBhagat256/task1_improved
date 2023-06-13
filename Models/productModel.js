const Sequelize = require('sequelize');
const dbConnection = require('../Utils/DB_connection/dbConnection');

const Product_Model = dbConnection.define('productModel',{
    //Model Attributes here 
    productName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    productDesc: {
        type: Sequelize.STRING,
        allowNull : false
    },
    price : {
        type : Sequelize.INTEGER,
        allowNull : false
    },
},{
    // Other model options go here
    timestamps:false,
    tableName:'productModel',
})

module.exports = Product_Model