const express= require('express'); 
const mongoose =require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://sauravbharti021:Saurav786@cluster0.kbwf7j3.mongodb.net/SauravDatabase');
}

const port= process.env.PORT || 80;
const app=express();
const path=require("path");


app.use('/static', express.static('static'));


app.use(express.urlencoded());

app.set('view engine', 'pug'); 

app.set("views", path.join(__dirname, 'views'));


  app.get("/", (req,res)=>{
   res.render('login.pug');
  })

  app.get("/home", (req,res)=>{
   res.render('home.pug');
  })

  app.get("/apply", (req,res)=>{
    res.render('apply.pug');
  })

  app.get("/login", (req,res)=>{
     res.render('login.pug');
  })

  app.get("/videoWD", (req,res)=>{
     res.render('videoWD.pug');
  })

  app.get("/videoDSA", (req,res)=>{
     res.render('videoDSA.pug');
  })
  
  app.get("/allvideo", (req,res)=>{ 
    res.render('allvideo.pug');
 })

  app.get("/video", (req,res) =>{
    res.render("video.pug");
  }) 

 app.get("/blogWD", (req,res)=>{
   res.render('blogWD.pug');
})

app.get("/blogDSA", (req,res)=>{
  res.render('blogDSA.pug');
})

app.get("/allblog", (req,res)=>{
  res.render('allblog.pug');
})

app.get("/blog", (req,res) =>{
   res.render("blog.pug");
 }) 
  

 //Moongoose schema
 var applyschema = new mongoose.Schema({
   name: String,
   phone: String,
   email: String,
   qualification: String,
   detail: String,
 });

 const Apply = mongoose.model('Apply', applyschema);

 app.post('/apply', (req, res) => {

   // Mongoose instance making
   var data= new Apply(req.body);

   //// It will return a promise
   data.save().then(()=>{
      
      res.render('redirect-apply.pug')
   
   } ).catch(()=>{
     res.status(404).send("Item failed to save.")
   

  } )

})

var loginschema = new mongoose.Schema({
  email: String,
  password: String,
});

const Login = mongoose.model('Login', loginschema);
  
app.post('/login', (req, res) => {

  // Mongoose instance making
  var data= new Login(req.body);

  //// It will return a promise
  data.save().then(()=>{
     
     res.render('home.pug')
  
  } ).catch(()=>{
    res.status(404).send("Item failed to save.")
  

 } )

})
  
  
  
  app.listen(port, ()=>{
     console.log(`App started successfully on port  ${port}`);
  })