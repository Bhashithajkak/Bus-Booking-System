const router=require("express").Router();
let BookingDetail=require("../models/bookingdetail");
  

router.route("/add").post((req,res)=>{
    
    const name=req.body.name;
    const  gender=req.body. gender;
    const dtime=req.body.dtime;
    const atime=req.body.atime;
    const journeydate=req.body.journeydate;
    const from=req.body.from;
    const to=req.body.to;
    const busnumber=req.body.busnumber;
    const  tnumber=Number(req.body. tnumber);

    const seatnumer=req.body.seatnumer;

    const newBookingDetail=new BookingDetail({

        name,
        gender,
        dtime,
        atime,
        journeydate,
        from,
        to,
        busnumber,
        tnumber,
        seatnumer
        
    })

    newBookingDetail.save().then(()=>{
        res.json("BOOKING ADD")
    }).catch((err)=>{
        console.log(err);

    })


})

router.route("/").get((req,res)=>{

    BookingDetail.find().then((bookingdetails)=>{res.json(bookingdetails)}).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async(req,res)=>{
    let userID=req.params.id;
    const {name, gender,dtime,atime,journeydate,from,to,busnumber, tnumber,seatnumer}=req.body;

    const updateBookingDetail={
        name,
        gender,
        dtime,
        atime,
        journeydate,
        from,
        to,
        busnumber,
        tnumber,
        seatnumer
    }
    const update=await BookingDetail.findByIdAndUpdate(userID,updateBookingDetail).then(()=>{

        res.status(200).send({status:"user updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })
  
})

router.route("/delete/:id").delete(async(req,res)=>{
    let userId=req.params.id;
    await BookingDetail.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status:"User deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete user",error:err.message});
    })
})


router.route("/get/:id").get(async(req,res)=>{
    let userId=req.params.id;
    const user=await BookingDetail.findById(userId)
    .then((bookingdetail)=>{
        res.status(200).send({status:"User fetched",bookingdetail: bookingdetail})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status:"Error with get user",error:err.message});
    })
})

router.route("/search/:name").get(async(req,res)=>{
    try {
        const query = req.query.q; // Get the search query from the URL parameter
        const results = await Item.find({ $text: { $search: query } });
        res.json(results);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
      }
})







/*student.post("/deleteUser",async(req,res)=>{
    const {userid}=req.body;
    try{
      student.deleteOne({_id:userid},function(err,res){
        console.log(err);
      });
      res.send({status:"ok",data:"Deleted"});
    }catch(error){
      console.log(error);
    }
  });
  */


module.exports=router;