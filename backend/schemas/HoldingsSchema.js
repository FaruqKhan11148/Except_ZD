const {Schema}= require("mongoose");

const HoldingsSchema= new Schema({
    name: String,
    qty: Number,
    
});

module.exports={HoldingsSchema};
