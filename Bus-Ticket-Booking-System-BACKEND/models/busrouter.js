const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const busrouterSchema=new Schema({
    departureplace:{
        type:String,
        required:true
    },
    arrivalplace:{
        type:String,
        required:true
    },
    departuretime:{
        type:String,
        required:true
    },
    arrivaltime:{
        type:String,
        required:true
    },
    busname:{
        type:String,
        required:true

    },
    busnumber:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    savilable:{
        type:String,
        required:true
    }
})

const BusRouter=mongoose.model("busrouter",busrouterSchema);

module.exports=BusRouter;