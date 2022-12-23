const { Router } = require('express');
const {postUser} = require('../controller/usercontrol')

const userRouter = Router();

userRouter.post('/user',postUser);

module.exports = userRouter;
