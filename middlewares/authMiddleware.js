const { verify } = require("../utils/jwtUtils");
// values
const { noTokenErr } = require("../values/error");

const authMiddleware = async (req,res,next) => {
    let token;
    try {
        token = req.headers["x-auth-token"];
        const IsTokenVerified = await verify(token);
        if(IsTokenVerified){
            next();
        }
    } catch (error) {
        return res.status(noTokenErr.code).json({...noTokenErr});
    }
}
module.exports = authMiddleware;