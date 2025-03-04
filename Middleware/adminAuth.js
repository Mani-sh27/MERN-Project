import jwt from 'jsonwebtoken'
const adminAuth = async (req,res,next) => {
    try{
      const token = req.headers.authorization?.split(" ")[1];

      if (!token) {
        return res.json({success:false,message:"Not authorized Login Again"})
      }
      const token_decode = jwt.verify(token,process.env.JWT_SECRET)
      if (token_decode !== process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD) {
        return res.json({success:false,message:"Not Authorised Login Again"})
      }
      next()
    } catch (error) {
      res.status(401).json({ success: false, message: "Invalid Token" });
    }
}
export default adminAuth  