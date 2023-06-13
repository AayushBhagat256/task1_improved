const Sequelize = require('sequelize');
const dbConnection = require('../Utils/DB_connection/dbConnection');

const Order_Model = dbConnection.define('orderModel',{
    // Model attributes are defined here
    Quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},{
    tableName: 'Order',
    timestamps: false
})

module.exports = Order_Model