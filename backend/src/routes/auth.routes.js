import express from 'express'
import { signup } from '../controllers/auth.controller.js';
const router=express.Router();
router.post("/signup",signup);

router.get("/login",(req,res)=>{
    res.end("login endpoint");
});

router.get("/signin",(req,res)=>{
    res.end("signin endpoint");
});
export default router;