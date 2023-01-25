
//Router del paquete 
const {Router}=require('express');
const {getMethod,
        postMethod,
        deleteMethod}=require('../controllers/users');     
const router=Router();

 router.get('/',getMethod);
 router.post('/',postMethod);
 router.delete('/',deleteMethod);


 module.exports=router;
