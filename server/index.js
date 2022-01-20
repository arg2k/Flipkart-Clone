import express from "express";
import Connection from "./database/dbase.js";
import dotenv from 'dotenv';
import DefaultData from './DefaultData.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import Routes from './routes/routes.js';
import { v4 as uuid } from 'uuid';

dotenv.config()
const app = express();
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/',Routes);

const PORT = 8000;
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
Connection(user,pass);
app.listen(PORT,() => console.log(`okay its working on ${PORT}`));

DefaultData();
export let paytmParams = {};
export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
paytmParams["MID"] = process.env.PAYTM_MID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID'] = uuid();
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT'] = '100';
paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback';
paytmParams['EMAIL'] = 'argha111234@gmail.com';
paytmParams['MOBILE_NO'] = '9189038109';
