import express from "express";
import { userSignup, userLogin } from "../controller/userController.js";
import { getItems, getItemById } from '../controller/itemController.js';
import { paymentResponse, addPaymentGateway } from '../controller/paymentController.js';

const routes = express.Router();


routes.post('/signup',userSignup);
routes.post('/login',userLogin);
routes.get('/items',getItems);
routes.get('/item/:id',getItemById);
routes.post('/callback',paymentResponse);
routes.post('/payment',addPaymentGateway);

export default routes;