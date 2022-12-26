const  express = require('express');
const ClassController = require('../constroller/ClassController');
const StudentController = require('../constroller/StudentController');
const router = express.Router();

router.post('/v1/myClass/createClass', ClassController.createClass)
router.get('/v1/myClass/getClasses', ClassController.getClasses)
router.get('/v1/myClass/getClass/:id', ClassController.getClass)
router.get('/v1/myClass/:classId/students',StudentController.getStudentsByClassId)
router.delete('/v1/myClass/:classId',ClassController.deleteClass)

module.exports = router