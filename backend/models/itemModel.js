import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    photo: { type: String, required: true },
    quantity: { type: Number, required: true, min: 0 },
    description: { type: String },
    expiry: { type: Date, required: true },
    dietry_restrictions: { type: [String], required: true }
}, { timestamps: true });

const Item = mongoose.model('Item', itemSchema);

export default Item
