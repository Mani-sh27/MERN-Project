import useModel from "../Models/userModel";

// ----------------Route for user login-----------------
const loginUser = async (req,res) = {

}

// -----------------Route for user  reqgister------------------
const registerUser = async (req,res) => {
 res.json({msg:"Register Api Working"})
}
// -----------------Route for admin login-------------------------
const adminlogin = async (req, res) => {

}
export  default (loginUser, registerUser)
