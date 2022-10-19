const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please tell us your name!"]
    },
    email: {
        type: String,
        required: [true, "Please provide your email!"],
        unique: true,
        lowercasw: true,
        validate: [validator.isEmail, "Please provide a valid email."]
    },
    photo: String,
    password: {
        type: String,
        required: [true, "Please provid a password."],
        minlength: 3
    },
    passwordConfirm: {
        type: String,
        required: [true, "Please confirm your password."],
        validate: {
            // THIS ONLY WORKS ON SAVE !!!
            validator: function(el) {
                return el === this.password;
            },
            message: "Passwords are not the same."
        }
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
