const router=require("express").Router();
let BusRouter=require("../models/busrouter");
  

router.route("/add").post((req,res)=>{
    
    const departureplace=req.body.departureplace;
    const arrivalplace=req.body.arrivalplace;
    const departuretime=req.body.departuretime;
    const arrivaltime=req.body.arrivaltime;
    const busname=req.body.busname;
    const busnumber=req.body.busnumber;
    const price=Number(req.body.price);
    const savilable=req.body.savilable;

    const newBusRouter=new BusRouter({

        departureplace,
        arrivalplace,
        departuretime,
        arrivaltime,
        busname,
        busnumber,
        price,
        savilable
        
    })

    newBusRouter.save().then(()=>{
        res.json("Bus Router Added")
    }).catch((err)=>{
        console.log(err);

    })


})

router.route("/").get((req,res)=>{

    BusRouter.find().then((busrouters)=>{res.json(busrouters)}).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async(req,res)=>{
    let userID=req.params.id;
    const {departureplace,arrivalplace,departuretime,arrivaltime,busname,busnumber,price,savilable}=req.body;

    const updateBusRouter={
        departureplace,
        arrivalplace,
        departuretime,
        arrivaltime,
        busname,
        busnumber,
        price,
        savilable
    }
    const update=await BusRouter.findByIdAndUpdate(userID,updateBusRouter).then(()=>{

        res.status(200).send({status:"user updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })
  
})

router.route("/delete/:id").delete(async(req,res)=>{
    let userId=req.params.id;
    await BusRouter.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status:"User deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete user",error:err.message});
    })
})


router.route("/get/:id").get(async(req,res)=>{
    let userId=req.params.id;
    const user=await BusRouter.findById(userId)
    .then((busrouter)=>{
        res.status(200).send({status:"User fetched",busrouter: busrouter})
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
router.route('/search').get(async (req, res) => {
    try {
      const query = req.query.query;
      const busrouters = await busrouter.find({ name: { $regex: query, $options: 'i' } });
      res.json(busrouters);
    } catch (error) {
      console.error('Error searching vegetables:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });







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