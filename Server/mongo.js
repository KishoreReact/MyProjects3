const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/react-login")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed')
})


const newSchema= new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

const collection = mongoose.model("collections",newSchema)



module.exports=collection