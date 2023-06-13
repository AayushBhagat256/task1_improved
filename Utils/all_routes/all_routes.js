const proCtrl = require('../../Controllers/productCtrl');
const ordCtrl = require('../../Controllers/orderCtrl');

exports.routes = (app) => {
    // CRUD Operations for products
    app.post('/addproduct',proCtrl.addProduct);
    app.get('/getproducts',proCtrl.getProducts);
    app.get('/getproduct/:id',proCtrl.getproductID);
    app.patch('/updateProduct/:id',proCtrl.updateProduct);
    app.delete('/deletePro/:id',proCtrl.deletePro);
    // CRUD Operations for Orders
    app.post('/addorder',ordCtrl.createOrder);
    app.get('/getorders',ordCtrl.getOrder);
    app.get('/getordid/:id',ordCtrl.getOrderById);
}



