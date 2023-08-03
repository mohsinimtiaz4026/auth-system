// schemas
const { userSchemas } = require("../schemas/userSchema");
// utils
const { sign } = require("../utils/jwtUtils");
// values
const {
  userCreateSchemaErr,
  userAlreadyRegisteredErr,
  wrongCredentials,
  internalServerErr,
  userLoginSchemaErr,
  userMailSchemaErr
} = require("../values/error");

const {
  loginSuccessfullyRes,
  userCreatedSuccessfulyRes,
  emailSendRes,
} = require("../values/response");
// services
const {
  findUserByEmail,
  createNewUser,
  findUserByEmailAndPassword,
  sendEmail,
  changePassword,
} = require("../services/userService");
const { cleanUserObject } = require("../utils/entities/userUtils");

module.exports = {
  registerUser: async (req, res) => {
    try {
      const { body } = req;
      const { error } = userSchemas.validateUserRequest({ body });
      if (error) {
        return res
          .status(userCreateSchemaErr.code)
          .json({ ...userCreateSchemaErr });
      } else {
        let { success } = await findUserByEmail({ body });
        console.log(success);
        if (success) {
          return res
            .status(userAlreadyRegisteredErr.code)
            .json({ ...userAlreadyRegisteredErr });
        }
        let {
          success: createSuccess,
          error,
          user,
        } = await createNewUser({ body });
        if (createSuccess) {
          const token = sign({ id: user._id, email: user.email });
          res.set({ ["x-auth-token"]: token });
          res
            .status(userCreatedSuccessfulyRes.code)
            .json({ ...userCreatedSuccessfulyRes });
        } else {
          return res.status(400).json({ error });
        }
      }
    } catch (error) {
      return res.status(internalServerErr.code).json({ ...internalServerErr });
    }
  },
  loginUser: async (req, res) => {
    const { body } = req;
    try {
      const { error } = userSchemas.validateLoginRequest({ body });
      if (error) {
        return res
          .status(userLoginSchemaErr.code)
          .json({ ...userLoginSchemaErr });
      }
      const { email, password } = body;
      const { success } = await findUserByEmailAndPassword({ email, password });
      if (success) {
        const token = sign({ id: user._id, email: user.email });
        res.set({ ["x-auth-token"]: token });
        return res
          .status(loginSuccessfullyRes.code)
          .json({ ...loginSuccessfullyRes, user });
      } else {
        return res.status(wrongCredentials.code).json({ ...wrongCredentials });
      }
    } catch (error) {
      console.log(error.message);
      return res.status(internalServerErr.code).json({ ...internalServerErr });
    }
  },
  sendUserMail: async (req, res) => {
    try {
      const { body } = req;
      const { error } = userSchemas.validateMailRequest({ body });
      if (error) {
        return res
          .status(userMailSchemaErr.code)
          .json({ ...userMailSchemaErr });
      }else {
        const { id,email,emailTo } = body;
        await sendEmail({id,email,emailTo});
        return res.status(emailSendRes.code).json({...emailSendRes});
      }
    } catch (error) {
      return res.status(internalServerErr).json({...internalServerErr});
    }
  },
  changePassword: async (req, res) => {},
};
