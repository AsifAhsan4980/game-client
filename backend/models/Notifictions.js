const { Schema, model } = require('mongoose');

module.exports.Notification = model('Notification', Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'Auth',
        required:true,
    },
    posts:[ 
        {
            type:String,
        } 
    ],
}, { timestamps: true }));


