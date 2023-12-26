import express from 'express';

import userController  from '../controller/authController.js';
import tokenVerify from '../middleware/auth.jwt.js';

const authRouter = express.Router();

authRouter.post('/change_password',tokenVerify,userController.changePassword);

authRouter.post('/login',userController.login );

authRouter.post('/signup',userController.register );
authRouter.get('/load_user',tokenVerify,userController.loadUser );



export default authRouter;