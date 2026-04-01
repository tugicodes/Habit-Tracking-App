const express = require ('express');
const router = express.Router();
const User = require ("../models/User");

//signup route
router.post('/signup', async (req,res) => {
    try{
        const {username, password} = req.body;
        if (!username || !password){
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        //check if user exists 
        const existingUser = await User.findOne({username});
        if (existingUser){
            return res.status(400).json({
                message: "Username already exists"
            });
        }
        //create new user
                const newUser = new User({username, password});
                await newUser.save();
                res.status(201).json({
                    message: "User created successfully"
                });
}

     catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
});

module.exports = router;