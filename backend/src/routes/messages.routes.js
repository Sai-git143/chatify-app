import express from 'express'

const router=express.Router()
router.get("/send",(req,res)=>{
    res.end("sending the message");
});

export default router;