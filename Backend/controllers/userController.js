import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
}

// login user
export const loginUser = async(req, res) => {
    const {email, password} = req.body
    try {
        
        // Check if the user exist
        const user = await userModel.findOne({email})
        if(!user) {
            return res.json({success : false, message : "User doesn't exist"})
        }

        // Check if the password match with the existing password
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            return res.json({success : false, message : "Invalid credentials"})
        }

        const today = new Date();
        const lastLogin = user.lastLoginDate;

        if (lastLogin) {
            const diff = Math.floor((today - lastLogin) / (1000 * 60 * 60 * 24)); // Days since last login
            
            if (diff === 1) {
                user.streak += 1; // Continue the streak
            } else if (diff > 1) {
                user.streak = 1; // Reset streak if missed a day
            }
        } else {
            user.streak = 1; //First login, start streak
        }

        user.lastLoginDate = today;

        //Calculate Average Score
        const subjects = Object.values(user.scores);
        user.avgScore = subjects.reduce((a, b) => a + b, 0) / subjects.length || 0;

        //Award Badges
        const newBadges = [];
        if (user.streak >= 7 && !user.badges.includes("1 Week Streak")) {
            newBadges.push("1 Week Streak");
        }
        if (user.avgScore >= 90 && !user.badges.includes("Top Scorer")) {
            newBadges.push("Top Scorer");
        }


        user.badges = [...new Set([...user.badges, ...newBadges])];
        await user.save()

        const token = createToken(user._id)
        res.json({success : true, token, user})
    }
    catch(error) {
        console.log(error)
        res.json({success : false, message : "Catch Error"})
    }
}


// register user
export const registerUser = async(req, res) => {
    const {name, password, email} = req.body;
    try {
        
        // checking if user already exists
        const exists = await userModel.findOne({email})
        if(exists) {
            return res.json({success : false, message : "User already exists"})
        }
        
        // validating email format 
        if(!validator.isEmail(email)) {
            return res.json({success : false, message : "Please enter a valid email"})
        }

        // checking if it is strong password or not
        if(password.length < 8) {
            return res.json({success : false, message : "Please enter a strong password"})
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // create new user
        const newUser = new userModel({
            name : name,
            email : email,
            password : hashedPassword
        })

        // save the user
        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success : true, token})
    } 
    catch(error) {
        console.log(error);
        res.json({success : false, message : "Catch Error"})
    }
}

export const getUserProfile = async (req, res) => {
    const { userId } = req.params;

    try {
        // ✅ Check if the user exists
        const user = await userModel.findById(userId).select("-password");
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        // ✅ Return User Data
        res.json({
            success: true,
            user: {
                name: user.name,
                email: user.email,
                streak: user.streak,
                lastLoginDate: user.lastLoginDate,
                avgScore: user.avgScore,
                scores: user.scores,
                badges: user.badges,
            },
        });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Server error" });
    }
};


export const updateScore = async (req, res) => {
    const { userId, subject, score } = req.body;

    try {
        // ✅ Check if the user exists
        const user = await userModel.findById(userId);
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        // ✅ Ensure `scores` object exists
        if (!user.scores) {
            user.scores = {}; 
        }

        // ✅ Update the subject score ONLY if it's higher
        if (!user.scores[subject] || score > user.scores[subject]) {
            user.scores[subject] = score;
        }

        // ✅ Recalculate Average Score
        const subjects = Object.values(user.scores);
        user.avgScore = subjects.reduce((a, b) => a + b, 0) / subjects.length;

        // ✅ Award Performance Badges
        const newBadges = [];
        if (user.avgScore >= 90 && !user.badges.includes("Top Scorer")) {
            newBadges.push("Top Scorer");
        }
        if (score === 100 && !user.badges.includes(`Perfect Score in ${subject}`)) {
            newBadges.push(`Perfect Score in ${subject}`);
        }

        user.badges = [...new Set([...user.badges, ...newBadges])];

        // ✅ Save User Data
        await user.save();
        res.json({ success: true, message: "Score updated", user });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Server error" });
    }
};
