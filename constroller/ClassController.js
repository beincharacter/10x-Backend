const Class = require('../models/Class');



const ClassConstoller = {
    createClass: async (req, res) => {
        try {
            let msg = "Class created successfully."
            let data = {}
            let classData = await Class.create({
                class: req.body.class,
                studentCount: req.body.studentCount
            })
            data = {id:classData._id}
            // console.log(classData)
            let response = {
                data, msg
            }
            console.log(req.body)
            res.status(201).json(response)

        } catch (err) {
            res.status(401).json({ msg: "Something went wrong!" })
            console.log("Error in createClass>>>", err)
        }
    },
    getClasses: async (req, res) => {
        try {
            let msg = "Fetched successfully."
            let data = {}
            let classData = await Class.find()    
            data = classData
            console.log(classData)
            let response = {
                data, msg
            }
            console.log(req.body)
            res.status(200).json(response)

        } catch (err) {
            res.status(401).json({ msg: "Something went wrong!" })
            console.log("Error in getClasses>>>", err)
        }
    },
    getClass: async (req, res) => {
        try {
            let msg = "Fetched successfully."
            let data = {}
            let classData = await Class.findById(req.params.id)    
            data = classData
            console.log(classData)
            let response = {
                data, msg
            }
            console.log(req.body)
            res.status(200).json(response)

        } catch (err) {
            res.status(401).json({ msg: "Something went wrong!" })
            console.log("Error in getClasses>>>", err)
        }
    },
    deleteClass: async (req, res) => {
        try {
            let msg = "Deleted successfully!"
            let data = {}
            let classData = await Class.findByIdAndDelete(req.params.classId)    
            data = classData
            console.log(classData)
            let response = {
                data, msg
            }
            console.log(req.body)
            res.status(200).json(response)

        } catch (err) {
            res.status(401).json({ msg: "Something went wrong!" })
            console.log("Error in getClasses>>>", err)
        }
    }
}
module.exports = ClassConstoller