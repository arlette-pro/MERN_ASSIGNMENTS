const ProductController = require('../controllers/product.controller');

module.exports = (app)  => {
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/product/:id', ProductController.getOneProduct);
    app.patch('/api/product/edit/:id', ProductController.updateProduct );
    app.get('/api/product', ProductController.getAllProducts);
    app.delete('/api/product/:id', ProductController.deleteProduct);
}