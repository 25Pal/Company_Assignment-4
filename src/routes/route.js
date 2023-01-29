const express=require('express')
const router=express.Router();
const controller= require('../Controller/createCourse')

router.post('/createUser',controller.createUser)

router.post('/createCourse',controller.createCourse);

router.get('/approve/:userId/courseId/:Id',controller.approve);

router.get('/checkCourseList/:userId',controller.checkCourse);

module.exports=router;