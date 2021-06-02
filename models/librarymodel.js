var mongoose=require('mongoose')
var libraryschema=new mongoose.Schema(
{
    bookname:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    rate:{
        type:Number
    },
    publisher:{
        type:String
    }

}
)
var librarymodel=mongoose.model('libraries',libraryschema)
module.exports={librarymodel}
    