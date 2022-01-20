import Item from '../model/itemSchema.js';

export const getItems= async(req, res) => {
    try
    {
        const items = await Item.find({});
        res.json(items);
    }
    catch(err)
    {
        console.log('err: ',err.message);
    }
} 

export const getItemById= async(req, res) => {
    try
    {
        const item = await Item.findOne({'id': req.params.id});
        res.json(item);
    }
    catch(err)
    {
        console.log('err: ',err.message);
    }
}