import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization; // ✅ Extract Authorization header
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ success: false, message: "Not Authorized, Login Again" });
    }

    const token = authHeader.split(" ")[1]; // ✅ Extract token after "Bearer "
    
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = token_decode; // ✅ Attach decoded user data to req
        next();
    } catch (error) {
        console.log("❌ Invalid Token:", error.message);
        res.status(401).json({ success: false, message: "Invalid Token" });
    }
};

export default authMiddleware;
