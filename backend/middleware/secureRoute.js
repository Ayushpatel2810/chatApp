import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const secureRoute = async(req,res,next)=>{
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error:"no token, authorization denied"});
        }

        const decoded = jwt.verify(token,process.env.JWT_TOKEN);
        if(!decoded){
          return res.status(401).json({error:"invalid token"});
        }

        const user = await User.findById(decoded.userid).select("-password");
        if(!user){
        return  res.status(500).json({error:"no user found"});
        }

        res.user=user;
        next();
    } catch (error) {
        console.log("Error in secure route: " + error);
        res.status(500).json({error:"internal server error"});
    }
}

export default secureRoute;