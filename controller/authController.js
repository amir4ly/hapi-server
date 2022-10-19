const User = require("../models/userModel");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");


const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: "90d"
    });
  };

exports.signup = async (request, h) => {
    try {
        const newUser = await User.create(request.payload);
        const token = signToken(newUser._id);

        newUser.password = undefined;

        const response = h.response({ newUser, token })
        response.header('Authorization', request.headers.authorization)

        return response.code(201)
           
    } catch (err) {
        console.log(err)
    }
}

exports.login = async (request, h) => {

    try {
        const { email, password } = request.payload

        const user = await User.findOne({ email })

        console.log(user)
        console.log(email)
        console.log(password)

        const token = signToken(user._id);

        const response = h.response({ status: "success", token })
        response.header('Authorization', request.headers.authorization)

        return response

    } catch (err) {
        console.log(err)
    }
}

