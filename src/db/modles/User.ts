import monngoose from 'mongoose';

const Userschema = new monngoose.Schema({
    username: {type:String,required:true},
    middlename:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,unique:true},
    password:{type:String,required:true},
    forgotPasswordToken:String,
    forgotPasswordExpiry:Date,
    verifToken:String,
    verifTokenExpiry:Date,
})

let User = monngoose.models.users||monngoose.model('users', Userschema);

export default User;