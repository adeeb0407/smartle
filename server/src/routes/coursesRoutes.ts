import express from 'express';
import {getAllCourses, getAllCoursesOnHome, getModuleforCourse} from '../controller/coursesController';

const router = express.Router();

router.get("/course", getAllCourses);
router.get("/coursesonhome", getAllCoursesOnHome);
router.get("/getmoduleforcourse/:id", getModuleforCourse);

export default router;