

const mongoosem = require("mongoose")


const customerSchema= new mongoosem.Schema({
    Name:{
        type:String ,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    photo: { type: String, default: "" },
    userType: {
        type: String,
        enum: ['student', 'teacher'],
        default: 'student',
        required: true
    }
})

const Customer = mongoosem.model('Customer' , customerSchema);
module.exports= Customer ;



