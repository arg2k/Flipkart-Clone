import pkg from "mongoose";
const { mongoose } = pkg;

const itemSchema = new pkg.Schema({
    id: String,
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    description: String,
    discount: String,
    tagline: String,
})

const items = pkg.model('item', itemSchema);

export default items;