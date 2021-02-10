var express = require('express');
var cityRouter=express.Router();

function router(menu){
  cityRouter.route('/')
  .get(function(req,res){
          //res.send(city);
          res.render('city',{title:'City',city,menu});
      });
  cityRouter.route('/details')
    .get(function(req,res){
            res.send('citydetails');
        });
  return cityRouter;    
}

module.exports=router;