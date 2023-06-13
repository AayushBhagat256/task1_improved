const product = require('../Utils/all_Models/all_Models')

//Adding product to database
const addProduct = async (req, res) => {
    try {
      const padd = await product.all_Models.product_Model.create({ productName: req.body.productName, productDesc: req.body.productDesc,price: req.body.price });
      console.log(padd instanceof product.all_Models.product_Model); // true
  
  
      console.log('product was saved to the database!');
      res.status(200).json({
        message: "Data saved",
        data: padd.toJSON(),
      });
    } catch (error) {
      console.error('Error saving user:', error);
      res.status(500).json({
        message: "Error saving user",
      });
    }
};

// getting all products
const getProducts = async (req, res) => {
    try {
      const products = await product.all_Models.product_Model.findAll();
      res.status(200).json(products);
    } catch (error) {
      console.error('Error retrieving products:', error);
      res.status(500).json({
        message: "Error retrieving products",
      });
    }
};

//get products by ID
const getproductID = async (req,res) => {
    try{
        const proID = req.params.id;
        const products = await product.all_Models.product_Model.findByPk(proID);
        res.status(200).json(products);
    }catch (error) {
        console.error('Error retrieving Products:', error);
        res.status(500).json({
          message: "Error retrieving Products",
        });
    }
}

//updating with ID
const updateProduct = async (req, res) => {
    try {
      const proId = req.params.id;
      const updatedFields = req.body;
  
      const Product = await product.all_Models.product_Model.findByPk(proId);
  
      if (!Product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      await Product.update(updatedFields);
  
      res.status(200).json({
        message: 'Product updated successfully',
        data: Product,
      });
    } catch (error) {
      console.error('Error updating Product:', error);
      res.status(500).json({
        message: 'Error updating Product',
      });
    }
};

//deleting a product 
const deletePro = async (req, res) => {
    try {
      const proId = req.params.id;
      const pro = await product.all_Models.product_Model.findByPk(proId);
  
      if (!pro) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      await pro.destroy();
  
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      console.error('Error deleting Product:', error);
      res.status(500).json({ message: 'Error deleting Product' });
    }
};



module.exports = {
    addProduct,
    getProducts,
    getproductID,
    updateProduct,
    deletePro,
}