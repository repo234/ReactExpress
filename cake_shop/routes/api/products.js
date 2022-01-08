var express = require('express');
var router = express.Router();
const validateProduct = require("../../middlewares/validateProduct");
var { Product } = require("../../models/product")

router.get("/",async (req,res)=>{
    try{
        let products=await Product.find();
        return (res.send(products));
    } catch(err)
    {
        res.status(400).send("something went wrong");
    }
  
})
router.get("/:id",async (req,res)=>{
    try{
        let product=await Product.findById(req.params.id);
        if(!product){
            return res.status(400).send("Invalid Id")
        }
        return (res.send(product));
    }catch(err){
        res.status(400).send("invalid id");
    } 
})
router.put("/:id",async (req,res)=>{
    try{
        let product=await Product.findById(req.params.id);
        if(!product){
            return res.status(400).send("Invalid Id")
        }
        product.name= req.body.name
        product.price=req.body.price
        await product.save();
        res.send(product);
    }catch(err){
        res.status(400).send("invalid id");
    }
})
router.delete("/:id",async (req,res)=>{
    try{
        let product=await Product.findByIdAndDelete(req.params.id);
        if(!product){
            return res.status(400).send("Invalid Id")
        }
      
        res.send(product);
    }catch(err){
        res.status(400).send("invalid id");
    }
})
router.post("/", validateProduct, async (req, res) => {
    let product = new Product();
    product.name = req.body.name;
    product.price = req.body.price;
    await product.save();
    return res.send(product);
  })
  router.put("/:id",  validateProduct,async (req, res) => {
    let product = await Product.findById(req.params.id);
    product.name = req.body.name;
    product.price = req.body.price;
    await product.save();
    return res.send(product);
  })
module.exports = router;
 