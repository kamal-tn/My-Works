const {Router} = require ('express');
const { getAllList } = require('./bnbcontroller');

const bnbRouter = new Router();

bnbRouter.get('/',getAllList);

module.exports = bnbRouter;