const router=require("express").Router();
let FeedBack=require("../models/feedback");
  

router.route("/add").post((req,res)=>{
    
    const name=req.body.name;
    const email=req.body.email;
    const phone=req.body.phone;
    const message=req.body.message;
    

    const newFeedBack=new FeedBack({

        name,
        email,
        phone,
        message
        
    })

    newFeedBack.save().then(()=>{
        res.json("Feedback added")
    }).catch((err)=>{
        console.log(err);

    })


})

router.route("/").get((req,res)=>{

    FeedBack.find().then((feedbacks)=>{res.json(feedbacks)}).catch((err)=>{
        console.log(err)
    })
})






router.route("/get/:id").get(async(req,res)=>{
    let userId=req.params.id;
    const user=await FeedBack.findById(userId)
    .then((feedback)=>{
        res.status(200).send({status:"User fetched",feedback: feedback})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status:"Error with get user",error:err.message});
    })
})

/*
router.route("/search/:name").get(async(req,res)=>{
    const departureplace=new RegExp(req.query.departureplace,'i')
    const arrivalplace=new RegExp(req.query.arrivalplace)

    try{
        const Server=await busrouter.find({departureplace,arrivalplace});

        res.status(200).json({
            success:true,
            message: "successful",
            data:Server
        });
        
    
    }
    catch(err)
    {
        res.status(404).json({
            success:false,
            message:"not found",
        })
    }
})
*/








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