import express from "express";
import { userSignup, userLogin } from "../controller/userController.js";
import { getItems, getItemById } from '../controller/itemController.js';
import { checkout, paymentVerification} from "../controller/paymentController.js";

const routes = express.Router();


routes.post('/signup',userSignup);
routes.post('/login',userLogin);
routes.get('/items',getItems);
routes.get('/item/:id',getItemById);
// routes.post('/callback',paymentResponse);
// routes.post('/payment',addPaymentGateway);
routes.route("/checkout").post(checkout);
routes.route("/paymentverification").post(paymentVerification);

export default routes;