const { Router } = require('express');
const {postProduct} = require('../controller/productcontrol')

const productRouter = Router();

productRouter.post('/product',postProduct);

module.exports = productRouter;
