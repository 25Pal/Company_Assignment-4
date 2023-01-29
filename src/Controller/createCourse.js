const userModel = require('../Model/userModel')
const courseModel = require('../Model/courseModel')

const createUser = async function (req, res) {
    try {
        const data = req.body;
        let a = await userModel.create(data)
        res.send({ status: true, data: a })
    } catch (err) {
        res.send({ status: false, msg: err.message })
    }

}


const createCourse = async function (req, res) {
    try {
        const body = req.body;
        let userRole = await userModel.findOne({ _id: body.userId })
        if (userRole.role != "admin") {
            return res.send({ status: false, msg: "You have not authority to create any course...." })
        }
        let a = await courseModel.create(body);
        res.send({ status: true, data: a })
    }
    catch (err) {
        res.send(err.message)
    }
}

const approve = async function (req, res) {
    try {
        let Id = req.params.userId;
        let cId = req.params.Id;
        let userRole = await userModel.findOne({ _id: Id });
        if (!userRole) {
            return res.send({ status: false, msg: "No user data..." })
        };
        if (userRole.role != "superAdmin") {
            return res.send({ status: false, msg: "Only super admin can approve the course..." })
        }
        let checkApprove = await courseModel.findOneAndUpdate({ _id: cId, isApprove: false }, { $set: { isApprove: true } }, { new: true });
        if (!checkApprove) {
            return res.send({ status: false, msg: "Data not found for updation...OR user not created any book" })
        };
        return res.send({ status: true, msg: "Approved successfully...", data: checkApprove })

    } catch (err) {
        res.send(err.msg)
    }
}

const checkCourse = async function (req, res) {
    try {
        let Id = req.params.userId;
        let userRole = await userModel.findOne({ _id: Id });
        if (!userRole) {
            return res.send({ status: false, msg: "No user data..." })
        };
        let checkApproveCourse = await courseModel.find({ isApprove: true });
        res.send({ status: true, data: checkApproveCourse })
    } catch (err) {
        res.send({ status: false, msg: err.message })
    }
}

module.exports = { createCourse, createUser, approve, checkCourse } 