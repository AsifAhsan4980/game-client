const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
        gameName: {
            type: String,
            required: [true, 'Please provide a product Name'],
        },
        categoryName: {
            type: String,
            required: [true, 'Please provide a product Name'],
        },
        images: {
            type: String,
        },
        disabled: {
            type: Boolean,
            default: false
        },
        topUp : [
            {
                id : {
                    type: Number
                },
                option : {
                    type: String,
                    required : [true, 'Please provide a name']
                },
                price : {
                    type: Number,
                    required : [true, 'Please provide a price']
                }
            }
        ],
        details : [{
            region : {
                type : String,
            },
            platform : {
                type : String
            },
            publisher : {
                type : String
            }
        }
        ]
    },
    {
        timestamps: true
    })


const Products = mongoose.model("Products", ProductsSchema)

module.exports = Products