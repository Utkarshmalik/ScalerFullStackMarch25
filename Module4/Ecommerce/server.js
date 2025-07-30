
const express = require("express");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");


const app = express();


app.use(bodyParser.json());


mongoose.connect("mongodb+srv://utmalik:qwerty123@cluster0.49bji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connected to DB successfully")
})
.catch((err)=>{
    console.log(err);
})

//Collections : Documents 

//Create a Schema , a set of fields and their associated types 
// Create a Collection from a partcular schema 
// Create a Document and Insert that Collection  





//Product Schema 


//Create a Schema for that Collection 
const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    category:{
        type:String,
        required:true,
        enum:["Electronics","Fashion","Jewellery"]
    }
})

//Create a Collection 
const ProductModel = mongoose.model("Products_ScalerMar25",ProductSchema);


app.post("/products",async (req,res)=>{

    const productData = req.body;

    const productDoc = new ProductModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category
    })

    try{
    const saveResponse =  await productDoc.save();
    return res.status(201).send(saveResponse)

    }catch(err){
        return res.status(500).send({message:"Internal Server Error ! Please try again"});
    }
})


app.get("/products",async (req,res)=>{
    
    try{

        const products = await ProductModel.find({});

        return res.status(200).send(products);


    }catch(err){
        return res.status(500).send({message:"Internal Server Error ! Please try again"});

    }
})


app.get("/products/:id",async (req,res)=>{

    const productId = req.params.id;

    const isValidObjectId = mongoose.Types.ObjectId.isValid(productId);

    if(!isValidObjectId){
        return res.status(400).send({message:`ProductId:${productId} is not a valid format for product Ids`})
    }
    
    try{
        
        const product = await ProductModel.findById(productId);

        if(product==null){
            return res.status(404).send({message:`Product with id:${productId} is not found`});
        }

        return res.status(200).send(product);

    }catch(err){
        return res.status(500).send({message:"Internal Server Error ! Please try again "+ err});

    }
})


app.delete("/products/:id",async (req,res)=>{

    const productId = req.params.id;

    const isValidObjectId = mongoose.Types.ObjectId.isValid(productId);

    if(!isValidObjectId){
        return res.status(400).send({message:`ProductId:${productId} is not a valid format for product Ids`})
    }
    
    try{
        
       const data = await ProductModel.findByIdAndDelete(productId);

       if(data===null){
         return res.status(404).send({message:`Product with id:${productId} is not found`});
       }


       return res.status(200).send({message:`Product with id: ${productId} is deleted successfully`});

    }catch(err){
        return res.status(500).send({message:"Internal Server Error ! Please try again "+ err});

    }
})



app.patch("/products/:id",async (req,res)=>{

    const productId = req.params.id;

    const isValidObjectId = mongoose.Types.ObjectId.isValid(productId);

    if(!isValidObjectId){
        return res.status(400).send({message:`ProductId:${productId} is not a valid format for product Ids`})
    }

    const updateObj = req.body;

    if(!updateObj){
        return res.status(400).send({message:"Update data is empty"});
    }

    console.log(updateObj);
    
    try{

        const response = await ProductModel.findByIdAndUpdate(productId, 
            updateObj, {new:true});
        
            if(response===null){
            return res.status(404).send({message:`Product with id:${productId} is not found`});
            }

            return res.status(200).send(response);
    

    }catch(err){
        return res.status(500).send({message:"Internal Server Error ! Please try again "+ err});

    }
})








const port = 3000;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})




//Ecommerce

// Product , User, Cart 

