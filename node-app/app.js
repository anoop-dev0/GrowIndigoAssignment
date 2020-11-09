const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
require('dotenv').config();
const uri = "mongodb+srv://dev0:dev0@kabracluster.ikkv0.mongodb.net/OrigaAI?retryWrites=true&w=majority";

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.post('/api/users',(req,res,next)=>{
    const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology:true });
  try{
    client.connect(err => {
      const collection = client.db(process.env.DB).collection("users");
      collection.insertOne(req.body).then(order=>{
        res.send({success:true});
      }).catch(err=>{
        console.log(err);
        res.status(500).send({success:false})
      }).finally(()=>{
        client.close();
      })
    });
  }
  catch{
    res.status(500).send({success:false})
  }
})
app.post('/api/validate',(req,res,next)=>{
    const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology:true });
  try{
    client.connect(err => {
      const collection = client.db("GrowIndigo").collection("users");
      collection.findOne({mobile:req.body.mobile}).then(user=>{
        if(user){
            res.send({success:true});
        }
        else{
            res.status(401).send({success:false}) 
        }
      }).catch(err=>{
        console.log(err);
        res.status(500).send({success:false})
      }).finally(()=>{
        client.close();
      })
    });
  }
  catch{
    res.status(500).send({success:false})
  }
})
module.exports = app;
