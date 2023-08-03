const JWT = require("jsonwebtoken");

module.exports.sign = (obj) => {
    const token = JWT.sign(obj,process.env.JWT_TOKEN,{
        expiresIn: '1d'
    });
    return token;
}
module.exports.verify = (token) => {
    const decodedToken = JWT.verify(token,process.env.JWT_TOKEN);
    return decodedToken;
}
module.exports.decode = (token) => {
    const decodedToken = JWT.decode(token,process.env.JWT_TOKEN);
    return decodedToken;
}