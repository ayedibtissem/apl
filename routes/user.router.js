const express=require('express')
const router= express.Router()

const usercontroller=require("../controllers/user.controller")
router.post("/signup",usercontroller.signup );
router.post("/signin", usercontroller.signin);
module.exports=router