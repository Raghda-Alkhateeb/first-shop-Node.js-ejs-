import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        price: {
            type: Number,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
        },
        description: {
            type: String,
           
        },
        image : {
            type: String,
           
        },
    },
    { timestamps: true }
);

export const Product = mongoose.model('Product', ProductSchema, 'products');
