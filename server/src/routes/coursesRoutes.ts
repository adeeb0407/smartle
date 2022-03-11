import express from 'express';
import {getAllCourses, getAllCoursesOnHome} from '../controller/coursesController';

const router = express.Router();

router.get("/course", getAllCourses);
router.get("/coursesonhome", getAllCoursesOnHome);

export default router;