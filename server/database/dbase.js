import mongoose from 'mongoose';
//import withRouter from 'react-router';

const Connection = async (user,pass) => {
    const URL =`mongodb+srv://${user}:${pass}@ecommercesite.ascl7.mongodb.net/PROJECT0?retryWrites=true&w=majority`;
    try
    {
        await mongoose.connect(URL, { useNewUrlParser : true, useUnifiedTopology : true});
        console.log('its alright!');
    }
    catch(error)
    {
        console.log('Error : ', error.message);
    }

}

export default Connection;