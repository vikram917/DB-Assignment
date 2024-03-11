// Q3.Create schema in any Database script or any ORM (Object Relational Mapping).

const mongoose = require('mongoose');

/*In Mongoose, the _id field is automatically created for every schema as the default primary key. 
 We didn't explicitly define the _id field in the schemas provided, but Mongoose adds it automatically.*/


// Product Schema

const product = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    SKU: {
        type: String,
        required: true
    },

    //We define the Product schema with a required field category_id, which references the ProductCategory model.

    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductCategory',
        required: true                          //Ensure category_id is required
    },
    inventory_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductInventory'
    },
    price: {
        type: Number,
        required: true
    },
    discount_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Discount'
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    modified_at: {
        type: Date,
        default: Date.now
    },
    deleted_at: {
        type: Date,
        default: null
    }
});

// Product Category Schema

const productCategory = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    desc: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    modified_at: {
        type: Date,
        default: Date.now
    },
    deleted_at: {
        type: Date,
        default: null
    }
});

// 

/*Pre-save hook to ensure the category_id is valid .
We add a pre-save hook to the Product schema to check if the referenced category_id exists in the ProductCategory collection before saving the product.If the category_id is invalid or doesn't exist, an error will be thrown, preventing the product from being saved with an invalid category.*/

productSchema.pre('save', async function (next) {
    try {
        const Category = mongoose.model('ProductCategory');
        const category = await Category.findById(this.category_id);
        if (!category) {
            throw new Error('Invalid category ID');
        }
        next();
    } catch (error) {
        next(error);
    }
});

// Product Inventory Schema

const productInventory = new mongoose.Schema({
    quantity: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    modified_at: {
        type: Date,
        default: Date.now
    },
    deleted_at: {
        type: Date,
        default: null
    }
});

// Discount Schema

const discount = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: String,
    discount_percent: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    modified_at: {
        type: Date,
        default: Date.now
    },
    deleted_at: {
        type: Date,
        default: null
    }
});

// Define models

const Product = mongoose.model('Product', product);
const ProductCategory = mongoose.model('ProductCategory', productCategory);
const ProductInventory = mongoose.model('ProductInventory', productInventory);
const Discount = mongoose.model('Discount', discount);

module.exports = {
    Product,
    ProductCategory,
    ProductInventory,
    Discount
};

