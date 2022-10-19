const User = require("./../models/userModel");

exports.getAllUsers = async (reqest, h) => {
    try {
        const users = await User.find();

    const data = {
        status: "success",           
        results: users.length,
        data: {
            users
        }
    }

    return h.response(data).code(200);

    } catch (err) {
        console.log(err);
    }
};
exports.getUser = async (request, h) => {
    console.log("Hello World");
};