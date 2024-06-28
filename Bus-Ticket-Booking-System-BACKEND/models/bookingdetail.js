const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const bookingdetailSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    dtime:{
        type:String,
        required:true
    },
    atime:{
        type:String,
        required:true
    },
    journeydate:{
        type:String,
        required:true
    },
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true

    },
    busnumber:{
        type:String,
        required:true
    },
    tnumber:{
        type:Number,
        required:true
    },
    seatnumer:{
        type:String,
        required:true
    }
})

const BookingDetail=mongoose.model("bookingdetail",bookingdetailSchema);

module.exports=BookingDetail;