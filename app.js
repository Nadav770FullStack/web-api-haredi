const express=require('express');
const app=express();
const productRouter=require('./api/v1/routes/product');
const categoryRouter=require('./api/v1/routes/category');
const morgan=require('morgan');
const mongoose=require('mongoose');
const sceure=require('./api/v1/middlewares/scure');
const Logger =require('./api/v1/middlewares/Logger');
//מערך של כתובות ip חוקיות
let arrip=['127.0.0.1','::1','162.3.6.5', '2.2.2.2' ];
app.use(sceure);
app.use(Logger);
app.use(morgan('dev'));





//JSON הוספת שכבה לטיפול בבקשות שנשלחו בפורמט

app.use(express.json());
//הוספת שכבה לטיפול בבקשות שנשלחו בפורמט Url Encoded
app.use(express.urlencoded({
     extended:false

}));
// app.use(morgan('dev'));

mongoose.connect(
    MONGODB_URI

)
.then(result=>{
 console.log("connect")

})



module.export=app;