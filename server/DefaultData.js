import { Items } from "./constants/Items.js";
import stuffs from './model/itemSchema.js';

const DefaultData = async () => {
    try
    {
        await stuffs.deleteMany({});
        await stuffs.insertMany(Items);
        console.log('data was imported');
    }
    catch(err)
    {
        console.log('err: ',err.message);
    }
}

export default DefaultData;