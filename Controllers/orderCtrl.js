const Order = require('../Utils/all_Models/all_Models');
const Product = require('../Utils/all_Models/all_Models')

const createOrder = ( async (req, res) => {
    try {
      const { quantity, productModelId } = req.body;
  
      // Create a new order using the Order model
      const order = await Order.all_Models.order_Model.create({
        Quantity: quantity,
        productModelId: productModelId
      });
  
      // Order successfully created
      console.log('New order created:', order.toJSON());
  
      res.status(201).json({ message: 'Order created successfully', order });
    } catch (error) {
      // Error occurred while creating the order
      console.error('Error creating order:', error);
      res.status(500).json({ error: 'Failed to create order' });
    }
});




//displaying orders
const getOrder = async (req, res) => {
    try {
      const order = await Order.all_Models.order_Model.findAll();
      const proID = order.productModelId;
      const products = await Product.all_Models.product_Model.findByPk(proID);
      console.log(order.productModelId)
      res.status(200).json({
        order : order,
      });
    } catch (error) {
      console.error('Error retrieving orders:', error);
      res.status(500).json({
        message: "Error retrieving orders",
      });
    }
}

//displaying orders by ID
const getOrderById = async (req, res) => {
    const orderId = req.params.id; // Assuming the ID parameter is passed as 'id' in the request URL
  
    try {
      const order = await Order.all_Models.order_Model.findByPk(orderId);
      const proID = order.productModelId;
      const products = await Product.all_Models.product_Model.findByPk(proID);
      console.log(order.productModelId)
      
      if (order) {
        // res.status(200).json(order);
        res.status(200).json({
          order : order,
          product : products
        });
      } else {
        res.status(404).json({
          message: "Order not found",
        });
      }
    } catch (error) {
      console.error('Error retrieving order:', error);
      res.status(500).json({
        message: "Error retrieving order",
      });
    }
  };
  

module.exports = {
    createOrder,
    getOrder,
    getOrderById
}