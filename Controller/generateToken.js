const jwt = require("jsonwebtoken");
const jwtkey = "parkingSystem";

const generateToken = (id) => {
    return jwt.sign({id}, jwtkey, {
        expiresIn:"30d",
    });
};

module.exports = generateToken;