module.exports=(req,res,next)=>{
    console.log(`Method:${req.method} Url:${req.url}`);
    next();
}
app.use(myLogger);
//שילוב הראוטרים בתוך האפליקציה 
app.use('/product',productRouter);
app.use('/category',categoryRouter);
//   not found  נקודת קצה עבור נתיבים שלא נמצאו ,404
app.all('*',(req,res)=>{
    res.status(404).json({msg:'404 not found'});
});