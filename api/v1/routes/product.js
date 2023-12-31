//יצירת אובייקט מסוג ראוטר
const router=require('express').Router();

const {
    getAllProducts,  
    getProductById,
    addProduct,
    updateProduct,
    deleteProductById 



}=require('../controllers/product');
//מוצרים
router.get('/',getAllProducts);
//נקודת קצה לקבלת פרטי מוצר לפי קוד מוצר

router.get('/:id',getProductById);
//נקודת קצה לעדכון מוצר לפי קוד מוצר
router.patch('/:id',updateProduct);
//נקודת קצה למחיקת מוצר לפי קוד מוצר
router.delete('/:id',deleteProductById);
//הוספת מוצר חדש
router.post('/',addProduct);



module.exports=router;