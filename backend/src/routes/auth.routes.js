import express from 'express'

const router=express.Router();
router.get("/signup",(req,res)=>{
    res.end("signup endpoint");
});

router.get("/login",(req,res)=>{
    res.end("login endpoint");
});

router.get("/signin",(req,res)=>{
    res.end("signin endpoint");
});
export default router;