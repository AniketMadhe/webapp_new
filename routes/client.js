const mongoose = require('mongoose');

const clientSchema=new mongoose.Schema({
    name:String,
    book1:String,
    author1:String,
    book2:String,
    author2:String,
    book3:String,
    author3:String,
    book4:String,
    author4:String   

});

const clientModel=mongoose.model('client',clientSchema);

module.exports=clientModel;