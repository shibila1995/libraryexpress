var express=require('express')
var bodyParser=require('body-parser')
var mongoose=require('mongoose')
var {librarymodel}=require('./models/librarymodel')

mongoose.connect('mongodb+srv://shibila:shibila22@cluster0.lzqma.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser:true})
var app=express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.post('/read',(req,res)=>{
var libraryobject=new librarymodel(req.body)
libraryobject.save(
    (error)=>{
        if(error){
            res.send(error)
        }
        else{

            res.json({"status":"success"})
        }
    }
       
)
res.json(libraryobject)
})

app.get('/viewall',async(req,res)=>{
    try{
            var result=await librarymodel.find()
            res.json(result)
    }
    catch(error){
            res.send(error)
    }
})

app.post('/search',async(req,res)=>{
    try{
        var result=await librarymodel.find(req.body)
        res.json(result)
    }
    catch(error){
        res.json({"status":"success"})
    }
})

app.post('/edit',async(req,res)=>{
    try{
        var result=await librarymodel.findOneAndUpdate({"_id":req.body._id},req.body)
        res.json(result)
    }
    catch(error){
        res.json({"status":"success"})
    }
})


app.post('/delete',async(req,res)=>{
    try{
        var result=await librarymodel.findByIdAndDelete({"_id":req.body._id})
        res.json(result)
    }
    catch(error){
        res.json({"status":"success"})
    }
})

app.listen(3002,()=>{
    console.log("server started at http://localhost:3002/read")
})