
const express = require("express");
var { productsData } = require("./data/products");
const bodyParser = require('body-parser')


//Create an Express Application 
const app = express();



// Custom Middleware
const loggerMiddleware = app.use((req,res,next)=>{
     console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
     next(); // Proceed to the next handler
})

const jsonParser = bodyParser.json();
app.use(jsonParser);



app.get("/",(req,res)=>{

    res.json({
        name:"Utkarsh",
        age:31
    });
    
});






app.get("/products",(req,res)=>{
    return res.status(200).json(productsData);
})



app.get("/products/:productId",(req,res)=>{


    const productId = req.params.productId;

    const requiredProduct = productsData.find(product=>product.id == productId);

    if(!requiredProduct){
        return res.status(404).send({message:`The product with productId : ${productId} is not present`});
    }
    

    return res.status(200).send(requiredProduct);
    
})


// app.get("/products/:productId/:rateId",(req,res)=>{

//     console.log(req.params);
    
//         return res.status(200).json({response:"Product data"});

    
// })





app.post("/products",(req,res)=>{

    const productData = req.body;


    //validations 
    if(!productData.title){
        return res.status(400).send({
            message:"Title needs to be passed to create a new product"
        })
    }

    const productId = Math.floor(Math.random()*100)*10;

    const newProduct = {...productData, id:productId};

    productsData.push(newProduct);


    return res.status(201).send(newProduct);

})

app.delete("/products/:productId",(req,res)=>{

    const productId = req.params.productId;

       const requiredProduct = productsData.find(product=>product.id == productId);

    if(!requiredProduct){
        return res.status(404).send({message:`The product with productId : ${productId} is not present`});
    }

    productsData = productsData.filter((product)=>{
        return product.id!=productId;
    })



    return res.status(200).send({message:`Product with productId : ${productId} has been deleted successfully`});

})

app.patch("/products/:productId",(req,res)=>{

     const productId = req.params.productId;

       const requiredProduct = productsData.find(product=>product.id == productId);

    if(!requiredProduct){
        return res.status(404).send({message:`The product with productId : ${productId} is not present`});
    }

    const updatedProductData = req.body;

    if(!updatedProductData){
        return res.status(400).send({message:"Product Details are not passed"});
    }

    for (const key in updatedProductData) {
        if(requiredProduct[key]){
            requiredProduct[key]=updatedProductData[key];
        }
   }
   
   return res.status(200).send(requiredProduct);
})









const port = 3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})


//HTTP Request 

//Client 


// GET , POST , DELETE, PUT , PATCH 


// PUT vs PATCH 


// PUT (Idempotent, Full Update) : Replaces the entire resource with the provided data.


// PUT /users/123

 {
//   "name": "John Doe",
//   "email": "john@example.com",
//   "age": 30
}


// PATCH (Non-Idempotent, Partial Update)


//  PATCH /users/123

//  {
//    "age": 31
//  }




// Middleware is used for tasks such as:

// Parsing request data
// Authentication
// Logging
// Error handling
// Transformations and more