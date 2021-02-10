var express = require('express');
var hotelsRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017";
var url = "mongodb+srv://aRIMEHA_74:7447@cluster0.megge.mongodb.net/Aryabhatta?retryWrites=true&w=majority";
// var url = "mongodb+srv://dev:mongo123@cluster0.f8vmc.mongodb.net/aryabhat?retryWrites=true&w=majority";
function router(menu) {
  hotelsRouter.route('/')
    .get(function (req, res) {
      //res.send(hotels);
      mongodb.connect(url,(err,connection)=>{
        if(err) res.status(500).send("Connection error");
        const dbo=connection.db('Aryabhatta');
        dbo.collection('hotels').find({}).toArray((err,data)=>{
          if(err) res.status(501).send("Fetching error");
          res.render('hotels', { title: 'Hotels', hotels:data, menu });
        })
      })
      
    });
  hotelsRouter.route('/details/:id')
    .get(function (req, res) {
      // var id = req.params.id;
      var {id}=req.params //destructuring
      var name = req.query.name;
      mongodb.connect(url,(err,connection)=>{
        if(err) res.status(500).send("Connection error");
        const dbo=connection.db('Aryabhatta');
        dbo.collection('hotels').findOne({_id:id},(err,data)=>{
          if(err) res.status(501).send("Fetching error");
          res.render('hotelDetails', { title: 'Hotel Details', hotels:data, menu });
          //res.send(data);
        })
      })
      // res.send(`hotelsdetails ${id} & ${name}`);
    });
  return hotelsRouter;
}

module.exports = router