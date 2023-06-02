const moment = require('moment/moment');
const mongoose = require('mongoose')
const schema = mongoose.Schema;

const article = new schema({
    title:{
        type:String,
        required: true,
        minLength: 25,
    },

    text:{
        type:String,
        required: true,
        minLength: 100,
    },

    create_at:{
        type: Date,
        default: Date.now,
        get: function(createAt){
            return moment(createAt).format('MMMM Do YYYY, h:mm:ss a')
        }
    }
}, {timestamps: true})

module.exports = mongoose.model('Article', article)