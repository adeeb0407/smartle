import express from 'express';
import {} from '../controller/coursesController';

const router = express.Router();

router.get("/modules/:id", getAllCourses);

export default router;