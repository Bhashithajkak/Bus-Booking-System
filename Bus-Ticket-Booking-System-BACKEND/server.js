



const express=require("express");
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
const cors=require("cors");
const dotenv=require("dotenv");
const app=express();

require("dotenv").config();

const PORT=process.env.PORT||8070;

app.use(cors());
app.use(bodyparser.json());

const URL=process.env.MONGODB_URL;

mongoose.connect(URL,{
    //useCreateIndex:true,
    //useNewUrlparser:true,
    //useUnifiedTopologyL:true,
    //useFindAndModify:false
});

const connection=mongoose.connection;
connection.once("open",()=>{console.log("MOngodb Connection success!");
})

const studentRouter=require("./routes/students.js");
app.use("/student",studentRouter);

const busrouterRouter=require("./routes/busrouters.js");
app.use("/busrouter",busrouterRouter);

const bookingdetailRouter=require("./routes/bookingdetails.js");
app.use("/bookingdetail",bookingdetailRouter);


const customerRouter =require("./routes/customers.js");
app.use("/customer",customerRouter);

const feedbackRouter=require("./routes/feedbacks.js");
app.use("/feedback",feedbackRouter);




app.listen(PORT,()=>{
    console.log(`Server is up and running on prot number: ${PORT}`)
})