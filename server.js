const express = require('express')
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser:true});
const userSchema = new mongoose.Schema({
        name : String,
        user_email : String,
        mes : String
});
app.use(express.static("public"))
const User = mongoose.model("user",userSchema);
app.use(bodyParser.urlencoded({extended: true}));
app.get('/',function(req ,res){
    res.sendFile(__dirname + "/index.html");
})
app.get('/success',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})
app.post('/',function(req,res){
    var name = String(req.body.name);
    var email = String(req.body.email);
    var message = String(req.body.message);
    const user = new User({
        name : name,
        user_email : email,
        mes : message
    })
    res.redirect('/success')
})

app.listen(4000,()=>{
    console.log('client is live on port 4000')
})