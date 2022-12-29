const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    }, 
    category: {
        type: String,
        required: true
    },
    
    price: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    swap: {
       type:Boolean,
       required:true
    },
    buy: {
     type:Boolean,
    required:true
    }
});


module.exports = mongoose.model('Product', productSchema);