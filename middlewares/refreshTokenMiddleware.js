// utils
const { sign, decode } = require("../utils/jwtUtils");
// values
const { noTokenErr } = require("../values/error");

const refreshTokenMiddleware = async (req, res, next) => {
  let token;
  try {
    token = req.headers["x-auth-token"];
    const decodedToken = await decode(token);
    const newTokenValues = {
      id: decodedToken.id,
      email: decodedToken.email,
    };
    if (decodedToken) {
      const token = sign({ ...newTokenValues });
      res.set({ ["x-auth-token"]:token });
      next();
    }
  } catch (error) {
    return res.status(noTokenErr.code).json({ ...noTokenErr });
  }
};
module.exports = refreshTokenMiddleware;
