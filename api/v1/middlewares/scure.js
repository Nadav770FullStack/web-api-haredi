module.exports=app.use((req,res,next)=>{
    //לבדוק במידה והראוט הוא אדמין לבדוק האם מורשה
     if(req.url=='/admin')
     {
         let ip=req.ip;//כתובת המשתמש של האיי פי
          let status=arrip.find((el)=>el==ip);
          //במידה והכתובת מורשת הוא ממשיך
          if (!status)
           
          //במידה ולא זה יעצור ונקבל הודעת שיגאה שזה לא מורשה 
          
          res.status(401).json({msg:'you are not authorized'});
     }
     //במידה ומורשה 
        next();
  });
  