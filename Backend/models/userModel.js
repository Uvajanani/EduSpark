import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true, unique : true},
    password : {type : String, required : true},
    streak: { type: Number, default: 0 }, // Daily login streak
    lastLoginDate: { type: Date, default: null }, // Track last login date

    avgScore: { type: Number, default: 0 }, // Average of all subject scores
    scores: {
      maths: { type: Number, default: 0 },
      science: { type: Number, default: 0 },
      english: { type: Number, default: 0 },
      history: { type: Number, default: 0 },
    },

    badges: { type: [String], default: [] }, // List of earned badges
  },
  {minimize : false}
)


const userModel = mongoose.models.user || mongoose.model("user", userSchema)
export default userModel