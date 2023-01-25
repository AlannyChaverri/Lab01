const {response}=require('express');

const getMethod=(req,res=response)=>{

        res.json({
         "name":"Franklin",
         "msg":"respuesta del controller method GET"
        }
        );

}

const postMethod=(req,res=response)=>{
    res.json({
     "name":"Franklin",
     "msg":"respuesta del controller method POST"
    });
}


const deleteMethod=(req,res=response)=>{
    res.json({
     "name":"Franklin",
     "msg":"respuesta del controller method POST"
    });
}





module.exports={
    getMethod,
    postMethod,
    deleteMethod
}