const mongoose = require('mongoose')

const ProductsSchema = new mongoose.Schema({
        bannerName: {
            type: String,
            required: [true, 'Please provide a Food Name'],
        },
        firstTitle: {
            type: String,
        },
        description : {
            type: String,

        }
    },
    {
        timestamps : true
    })

const Banners = mongoose.model("Banners", ProductsSchema)

module.exports=Banners