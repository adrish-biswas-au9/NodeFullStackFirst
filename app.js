var express = require('express');
var app= express();
var port = process.env.PORT || 4700;
var menu = [
  {link:'/',page:'Home'},
  {link:'/hotels',page:'hotels'},
  {link:'/city',page:'city'}
]
var hotelsRouter =require('./src/routes/hotelsRouter')(menu)
var cityRouter = require('./src/routes/cityRouter')(menu)
app.listen(port,function(err){
    if(err) throw err;
    console.log(`Server is running on port ${port}`);
});


app.use(express.static(__dirname+'/public'));
app.set('views','./src/views');
app.set('view engine','ejs');
app.get('/', function(req,res){
  res.render('index',{title:'This is Node File',menu});
});
app.use('/hotels',hotelsRouter);
app.use('/city',cityRouter);
// app.get('/hotels', function(req,res){
//     res.send(hotels);
// });

// app.get('/city', function(req,res){
//     res.send(city);
// });

// app.get('/locations', function(req,res){
//     res.send(locations);
// });

// app.get('/vehicles', function(req,res){
//     res.send(vehicles);
// });

var locations= [
  {
    "id": "11014596-71b0-4b3e-b8c0-1c4b15f28b9a",
    "name": "Irontown",
    "climate": "Continental",
    "terrain": "Mountain",
    "surface_water": "40",
    "residents": [
      "https://studio-ghibli-universe-api.herokuapp.com/city/ba924631-068e-4436-b6de-f3283fa848f0",
      "https://studio-ghibli-universe-api.herokuapp.com/city/030555b3-4c92-4fce-93fb-e70c3ae3df8b"
    ],
    "hotels": [
      {
        "name": "Castle in the Sky",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/71HLiMMNe-L.jpg",
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe"
      }
    ],
    "image_url": [
      "https://www.teahub.io/photos/full/230-2307041_princess-mononoke-iron-town.jpg"
    ]
  },
  {
    "id": "64a996aa-481e-4627-9624-ab23f59a05a9",
    "name": "Gutiokipanja",
    "climate": "Continental",
    "terrain": "Hill",
    "surface_water": "50",
    "residents": [
      "https://studio-ghibli-universe-api.herokuapp.com/city/ba924631-068e-4436-b6de-f3283fa848f0",
      "https://studio-ghibli-universe-api.herokuapp.com/city/030555b3-4c92-4fce-93fb-e70c3ae3df8b"
    ],
    "hotels": [
      {
        "name": "Castle in the Sky",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/71HLiMMNe-L.jpg",
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe"
      }
    ],
    "image_url": [
      "https://www.itl.cat/pngfile/big/43-434579_ghibli-wallpapers-princess-mononoke-tree-spirits-background.png"
    ]
  },
  {
    "id": "a8bd9c03-7c80-4a97-b7c0-6a668acaf576",
    "name": "The Cat Kingdom",
    "climate": "Continental",
    "terrain": "Plain",
    "surface_water": "30",
    "residents": [
      "https://studio-ghibli-universe-api.herokuapp.com/city/6b3facea-ea33-47b1-96ce-3fc737b119b8",
      "https://studio-ghibli-universe-api.herokuapp.com/city/3042818d-a8bb-4cba-8180-c19249822d57",
      "https://studio-ghibli-universe-api.herokuapp.com/city/58d1973f-f247-47d7-9358-e56cb0d2b5a6",
      "https://studio-ghibli-universe-api.herokuapp.com/city/a3d8e70f-46a0-4e5a-b850-db01620d6b92",
      "https://studio-ghibli-universe-api.herokuapp.com/city/fc196c4f-0201-4ed2-9add-c6403f7c4d32"
    ],
    "hotels": [
      {
        "name": "The Cat returns",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/71HLiMMNe-L.jpg",
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe"
      }
    ],
    "image_url": [
      "https://i.quotev.com/img/q/u/18/8/15/7qdr52nam3.jpg"
    ]
  },
  {
    "id": "56e423c4-d9a1-44c4-8bdb-1cab45fbf63e",
    "name": "The Marsh House",
    "climate": "Mild",
    "terrain": "Marsh",
    "surface_water": "60",
    "residents": [
      
    ],
    "hotels": [
      {
        "name": "Castle in the Sky",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/71HLiMMNe-L.jpg",
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe"
      }
    ],
    "image_url": [
      "https://static.wikia.nocookie.net/studio-ghibli/images/8/8c/Marsh_house.jpg"
    ]
  },
  {
    "id": "660c8c91-bd92-43db-b475-b2df6ca96fec",
    "name": "Hospital",
    "climate": "Continental",
    "terrain": "Hill",
    "surface_water": "40",
    "residents": [
      "TODO"
    ],
    "hotels": [
      {
        "name": "My Neighbor Totoro",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/71HLiMMNe-L.jpg",
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe"
      }
    ],
    "image_url": [
      "https://i.pinimg.com/originals/3c/42/a8/3c42a80b8849bb8478714c74b14c806e.jpg"
    ]
  },
  {
    "id": "6ba60a86-7c74-4ec4-a6f4-7112b5705a2f",
    "name": "Gondoa",
    "climate": "Cool",
    "terrain": "Hilly",
    "surface_water": "40",
    "residents": [
      "TODO"
    ],
    "hotels": [
      {
        "name": "Castle in the Sky",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/71HLiMMNe-L.jpg",
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe"
      }
    ],
    "image_url": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUIaNMJjrSOfcvj7BgPaTbehhnbHzxF69Ibw&usqp=CAU"
    ]
  },
  {
    "id": "fb083a4e-77b2-4623-a2e0-6bbca5bfd5b2",
    "name": "Ursula's Log Cabin",
    "climate": "Warm",
    "terrain": "Plain",
    "surface_water": "40",
    "residents": [
      "TODO"
    ],
    "hotels": [
      {
        "name": "Castle in the Sky",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/71HLiMMNe-L.jpg",
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe"
      }
    ],
    "image_url": [
      "https://i.pinimg.com/originals/1d/86/91/1d8691adcefba84e17dc579dbf21d02b.jpg"
    ]
  },
  {
    "id": "a072ec53-0467-4fac-864f-df234f9c4315",
    "name": "Zeniba's Cottage",
    "climate": "Humid",
    "terrain": "Plain",
    "surface_water": "40",
    "residents": [
      "TODO"
    ],
    "hotels": [
      {
        "name": "Castle in the Sky",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/71HLiMMNe-L.jpg",
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe"
      }
    ],
    "image_url": [
      "https://64.media.tumblr.com/55b4ad199bf8d4054ec46588ef7e6fec/tumblr_p2mche8wwj1qa9gmgo2_r1_1280.jpg"
    ]
  },
  {
    "id": "682df5c3-b09e-46af-94d1-ae0d17f9b4b6",
    "name": "Bamboo Forest",
    "climate": "Tropical",
    "terrain": "Forest",
    "surface_water": "10",
    "residents": [
      "TODO"
    ],
    "hotels": [
      {
        "name": "Castle in the Sky",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/71HLiMMNe-L.jpg",
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe"
      }
    ],
    "image_url": [
      "https://i.imgur.com/Lpc6SvZ.jpg"
    ]
  },
  {
    "id": "26361a2c-32c6-4bd5-ae9c-8e40e17ae28d",
    "name": "Pazu's Mines",
    "climate": "Dry",
    "terrain": "Hill",
    "surface_water": "0",
    "residents": [
      "TODO"
    ],
    "hotels": [
      {
        "name": "Castle in the Sky",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/71HLiMMNe-L.jpg",
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe"
      }
    ],
    "image_url": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-C5I2LlrA0fdJ3c08qU54S3dpq1CIPaQfdw&usqp=CAU"
    ]
  },
  {
    "id": "42f787d8-1fcb-4d3d-82f2-a74409869368",
    "name": "Shizuku's Apartment",
    "climate": "Continental",
    "terrain": "City",
    "surface_water": "0",
    "residents": [
      "TODO"
    ],
    "hotels": [
      {
        "name": "Castle in the Sky",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/71HLiMMNe-L.jpg",
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe"
      }
    ],
    "image_url": [
      "https://cdn.hipwallpaper.com/i/33/97/16BWaV.jpg"
    ]
  },
  {
    "id": "0fafa7a3-64c1-43fe-881b-ecb605c01e09",
    "name": "Laputa",
    "climate": "Continental",
    "terrain": "City",
    "surface_water": "40",
    "residents": [
      "TODO"
    ],
    "hotels": [
      {
        "name": "Castle in the Sky",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/71HLiMMNe-L.jpg",
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe"
      }
    ],
    "image_url": [
      "https://i.pinimg.com/originals/36/50/70/365070e4f342c47807e20a270fa9809f.jpg"
    ]
  },
  {
    "id": "0132f7f6-fd52-4ac3-b5df-c96b609f77b6",
    "name": "Tedis",
    "climate": "Continental",
    "terrain": "Hill",
    "surface_water": "30",
    "residents": [
      "TODO"
    ],
    "hotels": [
      {
        "name": "Castle in the Sky",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/71HLiMMNe-L.jpg",
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe"
      }
    ],
    "image_url": [
      "https://i.pinimg.com/originals/2c/3e/be/2c3ebee958c237eaf7fb37f38a30da09.jpg"
    ]
  },
  {
    "id": "c57fb2cb-ea85-4d73-8808-cf5dcd28c22e",
    "name": "Koriko",
    "climate": "Mild",
    "terrain": "Hill",
    "surface_water": "50",
    "residents": [
      "TODO"
    ],
    "hotels": [
      {
        "name": "Castle in the Sky",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/71HLiMMNe-L.jpg",
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe"
      }
    ],
    "image_url": [
      "https://i.pinimg.com/originals/dc/cf/3d/dccf3ddadf7da2be02bbcdae04568a48.jpg"
    ]
  },
  {
    "id": "615aa48d-8673-4117-b35a-79cb67af1897",
    "name": "Forest",
    "climate": "Tropical",
    "terrain": "Forest",
    "surface_water": "60",
    "residents": [
      "TODO"
    ],
    "hotels": [
      {
        "name": "Castle in the Sky",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/71HLiMMNe-L.jpg",
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe"
      }
    ],
    "image_url": [
      "https://i.pinimg.com/originals/3a/f0/c0/3af0c041f91b2991708edca76ce9dcf2.jpg"
    ]
  },
  {
    "id": "37d13a96-a03a-451d-8871-80be0495486e",
    "name": "Bathhouse",
    "climate": "Continental",
    "terrain": "River",
    "surface_water": "70",
    "residents": [
      "TODO"
    ],
    "hotels": [
      {
        "name": "Castle in the Sky",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/71HLiMMNe-L.jpg",
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe"
      }
    ],
    "image_url": [
      "https://www.teahub.io/photos/full/36-362793_japan-hayao-miyazaki-trees-spirited-away-bathroom-houses.jpg"
    ]
  },
  {
    "id": "6fc21b76-78fb-4451-98f7-857e32a23e85",
    "name": "Matsugo",
    "climate": "Continental",
    "terrain": "River",
    "surface_water": "60",
    "residents": [
      "TODO"
    ],
    "hotels": [
      {
        "name": "Castle in the Sky",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/71HLiMMNe-L.jpg",
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe"
      }
    ],
    "image_url": [
      "https://wallpapercave.com/wp/wp4603979.jpg"
    ]
  },
  {
    "id": "dbeeaecb-7817-4b8b-90ca-edc432d3033e",
    "name": "Taeko's House",
    "climate": "Continental",
    "terrain": "River",
    "surface_water": "40",
    "residents": [
      "TODO"
    ],
    "hotels": [
      {
        "name": "Castle in the Sky",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/71HLiMMNe-L.jpg",
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe"
      }
    ],
    "image_url": [
      "https://i.pinimg.com/originals/e8/9c/28/e89c282a6373dd7753959e0102d25c81.jpg"
    ]
  },
  {
    "id": "34df8f25-8f80-4823-8f01-bf9852039987",
    "name": "Piccolo S.P.A.",
    "climate": "Continental",
    "terrain": "River",
    "surface_water": "40",
    "residents": [
      "TODO"
    ],
    "hotels": [
      {
        "name": "Castle in the Sky",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/71HLiMMNe-L.jpg",
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe"
      }
    ],
    "image_url": [
      "https://64.media.tumblr.com/6adfbfe3182d0d12493c8d7b1384da73/tumblr_p1l4evCnBK1qa9gmgo7_1280.jpg"
    ]
  },
  {
    "id": "62346d33-caa0-4c17-8016-0aca56f3066b",
    "name": "Karikiya",
    "climate": "Mild",
    "terrain": "City",
    "surface_water": "30",
    "residents": [
      "TODO"
    ],
    "hotels": [
      {
        "name": "Castle in the Sky",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/71HLiMMNe-L.jpg",
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe"
      }
    ],
    "image_url": [
      "https://i.pinimg.com/originals/a3/e5/bf/a3e5bfa12e907db4d0a3004023eaad42.jpg"
    ]
  },
  {
    "id": "ee897b2a-405e-42b9-bff4-8b51b0f03cab",
    "name": "Satsuki's School House",
    "climate": "Mild",
    "terrain": "River",
    "surface_water": "60",
    "residents": [
      "TODO"
    ],
    "hotels": [
      {
        "name": "Castle in the Sky",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/71HLiMMNe-L.jpg",
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe"
      }
    ],
    "image_url": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbhKo3flxoSreqU8Hcj3uOltwUkf2pvTaR1g&usqp=CAU"
    ]
  },
  {
    "id": "90241c46-d4be-411f-b00a-7561b9dda7b6",
    "name": "Fujimoto's Underwater Harbor",
    "climate": "Wet",
    "terrain": "Ocean",
    "surface_water": "100",
    "residents": [
      "TODO"
    ],
    "hotels": [
      {
        "name": "Castle in the Sky",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/71HLiMMNe-L.jpg",
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe"
      }
    ],
    "image_url": [
      "https://i.pinimg.com/originals/df/09/79/df0979032021273b4b123eee63280b53.jpg"
    ]
  },
  {
    "id": "469b14bd-5565-4436-bbed-c2036f42cc99",
    "name": "Himawari Nursery School",
    "climate": "Mild",
    "terrain": "Ocean",
    "surface_water": "50",
    "residents": [
      "TODO"
    ],
    "hotels": [
      {
        "name": "Castle in the Sky",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/71HLiMMNe-L.jpg",
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe"
      }
    ],
    "image_url": [
      "https://i.pinimg.com/600x315/43/a4/6a/43a46a8aa6a6142a87032e65292659c4.jpg"
    ]
  },
  {
    "id": "b6bac992-a858-4d57-8477-9652d73caaa1",
    "name": "Ingary",
    "climate": "Mild",
    "terrain": "Hill",
    "surface_water": "30",
    "residents": [
      "TODO"
    ],
    "hotels": [
      {
        "name": "Castle in the Sky",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/71HLiMMNe-L.jpg",
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe"
      }
    ],
    "image_url": [
      "https://i.pinimg.com/originals/33/f8/e2/33f8e27be6585e434b663a387daa23ca.jpg"
    ]
  }
]

var vehicles= [
  {
    "id": "4e09b023-f650-4747-9ab9-eacf14540cfb",
    "name": "Air Destroyer Goliath",
    "description": "A military airship utilized by the government to access Laputa",
    "vehicle_class": "Airship",
    "length": "1,000",
    "pilot": "https://studio-ghibli-universe-api.herokuapp.com/city/40c005ce-3725-4f15-8409-3e1b1b14b583",
    "hotels": [
      {
        "name": "Castle in the Sky",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/71HLiMMNe-L.jpg",
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe"
      }
    ],
    "image_url": "https://i.pinimg.com/originals/63/84/c9/6384c9307df4c18576e564ab90d8e1f6.png"
  },
  {
    "id": "d8f893b5-1dd9-41a1-9918-0099c1aa2de8",
    "name": "Red Wing",
    "description": "An experimental aircraft captured by Porco. Named Savoia S.21",
    "vehicle_class": "Airplane",
    "length": "20",
    "pilot": "https://studio-ghibli-universe-api.herokuapp.com/city/6523068d-f5a9-4150-bf5b-76abe6fb42c3",
    "hotels": [
      {
        "name": "Porco Rossa",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/71HLiMMNe-L.jpg",
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe"
      }
    ],
    "image_url": "https://4.bp.blogspot.com/-9LYF-rZrRkE/TbQPOOPWumI/AAAAAAAAAAM/gHcCg6K0KxA/s1600/porco_rosso_movie_image_01.jpg"
  },
  {
    "id": "923d70c9-8f15-4972-ad53-0128b261d628",
    "name": "Sosuke's Boat",
    "description": "A toy boat where Sosuke plays",
    "vehicle_class": "Boat",
    "length": "10",
    "pilot": "https://studio-ghibli-universe-api.herokuapp.com/city/a10f64f3-e0b6-4a94-bf30-87ad8bc51607",
    "hotels": [
      {
        "name": "Ponyo",
        "image_url": "https://images-na.ssl-images-amazon.com/images/I/71HLiMMNe-L.jpg",
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe"
      }
    ],
    "image_url": "https://i.pinimg.com/564x/c6/a8/48/c6a848ed754ed6fc23f5acd4c3ef9ceb.jpg"
  }
]

// <%for(i=0;i<menu.length;i++){%>
//   <a href="<%=menu[i].link%>"><%=menu[i].page%></a>
//   <%}%>
{/* <div class="row">    
            <br>
            <div class="col-md-2 col-sm-3 text-center">
              <a class="story-title" href="#"><img alt="" src="http://api.randomuser.me/portraits/thumb/women/56.jpg" style="width:100px;height:100px" class="img-circle"></a>
            </div>
            <div class="col-md-10 col-sm-9">
              <h3>14 Useful Sites for Designers</h3>
              <div class="row">
                <div class="col-xs-9">
                  <h4><span class="label label-default">devgarage.com</span></h4><h4>
                  <small style="font-family:courier,'new courier';" class="text-muted">Yesterday • <a href="#" class="text-muted">Read More</a></small>
                  </h4></div>
                <div class="col-xs-3"></div>
              </div>
              <br><br>
            </div>
          </div>
          <hr></hr>
          <div class="row">    
            <br>
            <div class="col-md-2 col-sm-3 text-center">
              <a class="story-title" href="#"><img alt="" src="http://api.randomuser.me/portraits/thumb/men/29.jpg" style="width:100px;height:100px" class="img-circle"></a>
            </div>
            <div class="col-md-10 col-sm-9">
              <h3>Measuring Your Link Building with Google Analytics</h3>
              <div class="row">
                <div class="col-xs-9">
                  <h4><span class="label label-default">searchenginewatch.com</span></h4><h4>
                  <small style="font-family:courier,'new courier';" class="text-muted">Yesterday • <a href="#" class="text-muted">Read More</a></small>
                  </h4></div>
                <div class="col-xs-3"></div>
              </div>
              <br><br>
            </div>
          </div>
          <hr>

          <div class="row">    
            <br>
            <div class="col-md-2 col-sm-3 text-center">
              <a class="story-title" href="#"><img alt="" src="http://api.randomuser.me/portraits/thumb/women/56.jpg" style="width:100px;height:100px" class="img-circle"></a>
            </div>
            <div class="col-md-10 col-sm-9">
              <h3>Dramatically Raise the Value of Any Piece of Content with These 27 Tactics</h3>
              <div class="row">
                <div class="col-xs-9">
                  <h4><span class="label label-default">searchenginewatch.com</span></h4><h4>
                  <small style="font-family:courier,'new courier';" class="text-muted">2 days ago • <a href="#" class="text-muted">Read More</a></small>
                  </h4></div>
                <div class="col-xs-3"></div>
              </div>
              <br><br>
            </div>
          </div>
          <hr>
          
          <div class="row">    
            <br>
            <div class="col-md-2 col-sm-3 text-center">
              <a class="story-title" href="#"><img alt="" src="http://api.randomuser.me/portraits/thumb/men/29.jpg" style="width:100px;height:100px" class="img-circle"></a>
            </div>
            <div class="col-md-10 col-sm-9">
              <h3>TrendPaper - What's Trending in the World</h3>
              <div class="row">
                <div class="col-xs-9">
                  <h4><span class="label label-default">betali.st</span></h4><h4>
                  <small style="font-family:courier,'new courier';" class="text-muted">Last week • <a href="#" class="text-muted">Read More</a></small>
                  </h4></div>
                <div class="col-xs-3"></div>
              </div>
              <br><br>
            </div>
          </div>
          <hr></hr> */}