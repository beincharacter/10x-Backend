const  express = require('express')
const router = express.Router();
const StudentController = require("../constroller/StudentController")

router.post('/v1/student/createStudent',StudentController.createStudent)
router.get('/v1/myClass/:classId/students/:studentId',StudentController.getStudentByIdAndClassId)
router.put('/v1/myClass/:classId/students/:studentId',StudentController.updateStudent)
router.delete('/v1/myClass/:classId/students/:studentId',StudentController.deleteStudent)


module.exports = router