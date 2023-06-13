const sequelize = require('sequelize')
const Model = require('../all_Models/all_Models');
const dbConnection = require('../DB_connection/dbConnection');

exports.modelRelationships = async() =>{
    Model.all_Models.product_Model.hasMany(Model.all_Models.order_Model);
    Model.all_Models.order_Model.belongsTo(Model.all_Models.product_Model);

    try{
        await dbConnection.sync({force:false});
        console.log("DATABASE SYNCED");
    }
    catch(err){
        console.log("syncing error : "+err);
    }
}