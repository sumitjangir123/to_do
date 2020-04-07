const express =require('express');
const router=express.Router();

console.log("router loaded !!");


//setting home file controller
const homeController=require('../controllers/home_controller');
router.get("/",homeController.home);
router.post('/create-todo',homeController.add_in_list);
//make it for outer index.js
module.exports =router;