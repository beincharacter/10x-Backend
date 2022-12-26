const { default: mongoose } = require('mongoose');
const Student = require('../models/Student');



const StudentConstoller = {
    createStudent: async (req, res) => {
        try {
            let msg = "Student created successfully."
            let data = {}
            let studentData = await Student.create({
                name: req.body.name,
                classId: req.body.classId
            })
            data = {studentId:studentData._id}
            // console.log(data)
            let response = {
                data, msg
            }
            console.log(req.body)
            res.status(201).json(response)
        } catch (err) {
            res.status(401).json({ msg: "Something went wrong!" })
            console.log("Error in createStudent >>>", err)
        }
    },
    getStudentsByClassId: async (req, res) => {
        try {
            let msg = "Fetched successfully."
            let data = {}
            let studentData = await Student.find({
                classId: req.params.classId 
            })
            console.log(">>>>>>>>>>>>",studentData)
            data = studentData
            // console.log(data)
            let response = {
                data, msg
            }
            console.log(req.body)
            res.status(201).json(response)

        } catch (err) {
            res.status(401).json({ msg: "Something went wrong!" })
            console.log("Error in getStudentsByClassId >>>", err)
        }
    },
    getStudentByIdAndClassId: async (req, res) => {
        try {
            let msg = "Fetched successfully."
            let data = {}
            let studentData = await Student.find({
                classId: req.params.classId,
                _id: req.params.studentId
            })
            // console.log(">>>>>>>>>>>>",req.params.classId)
            data = studentData
            // console.log(data)
            let response = {
                data, msg
            }
            console.log(req.body)
            res.status(201).json(response)

        } catch (err) {
            res.status(404).json({ msg: "Something went wrong!" })
            console.log("Error in getStudentByIdAndClassId >>>", err)
        }
    },
    updateStudent: async (req, res) => {
        try {
            let msg = "Updated successfully."
            let data = {}
            let studentData = await Student.find({
                classId: req.params.classId,
                _id: req.params.studentId
            })
            if(!studentData.length){
                res.status(401).json({msg:"no record found!"})
                return;
            }
            studentData = await Student.findByIdAndUpdate(
                {
                    _id: req.params.studentId
                },
                {
                    name: req.body.name,
                    classId: req.params.classId
                }
            )
            // console.log(">>>>>>>>>>>>",req.params.classId)
            data = studentData
            // console.log(data)
            let response = {
                data, msg
            }
            console.log(req.body)
            res.status(201).json(response)

        } catch (err) {
            res.status(404).json({ msg: "Something went wrong!" })
            console.log("Error in updateStudent >>>", err)
        }
    },
    deleteStudent: async (req, res) => {
        try {
            let msg = "Deleted successfully!"
            let data = {}
            let studentData = await Student.find({
                _id: req.params.studentId, classId: req.params.classId
            })    
            if(!studentData.length){
                res.status(401).json({msg:"no record found!"})
                return;
            }
            studentData = await Student.findByIdAndDelete(req.params.studentId)
            data = studentData
            console.log(studentData)
            let response = {
                data, msg
            }
            console.log(req.body)
            res.status(200).json(response)
        } catch (err) {
            res.status(401).json({ msg: "Something went wrong!" })
            console.log("Error in deleteStudent>>>", err)
        }
    }
}
module.exports = StudentConstoller