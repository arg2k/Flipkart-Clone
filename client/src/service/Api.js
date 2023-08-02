import axios from 'axios';
import Config from "../constants/data.js";

// const url = '${Config.ip}';

export const authenticateSignup = async(user) => {
    try
    {
        return await axios.post(`${Config.ip}:8000/signup`, user);
    }
    catch(error)
    {
        console.log('error in signup',error);
    }
}

export const authenticateLogin = async(user) => {
    try
    {
        return await axios.post(`${Config.ip}:8000/login`, user);
    }
    catch(error)
    {
        console.log('error in login',error);
    }
}


export const payMoney = async(info) => {
    try
    {
        let res = await axios.post(`${Config.ip}:8000/payment`, info);
        return res.data;
    }
    catch(error)
    {
        console.log('error in payment',error);
    }
}