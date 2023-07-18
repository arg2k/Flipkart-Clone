import axios from 'axios';

const url = 'http://13.233.30.28:8000';

export const authenticateSignup = async(user) => {
    try
    {
        return await axios.post(`${url}/signup`, user);
    }
    catch(error)
    {
        console.log('error in signup',error);
    }
}

export const authenticateLogin = async(user) => {
    try
    {
        return await axios.post(`${url}/login`, user);
    }
    catch(error)
    {
        console.log('error in login',error);
    }
}


export const payMoney = async(info) => {
    try
    {
        let res = await axios.post(`${url}/payment`, info);
        return res.data;
    }
    catch(error)
    {
        console.log('error in payment',error);
    }
}