// model
const User = require("../models/User");
// entites
const { cleanUserObject } = require("../utils/entities/userUtils");
// utils
const {
  hashPassword,
  compareHashedPassword,
} = require("../utils/passwordUtils");
// third-parties
const sendMail = require("../third-parties/emailService");

module.exports = {
  findUserByEmail: async ({ body: { email } }) => {
    try {
      let user = await User.findOne({ email });
      if (user) {
        return {
          success: true,
          user,
        };
      } else {
        return {
          success: false,
          user,
        };
      }
    } catch (error) {
      return {
        success: false,
        error,
      };
    }
  },
  createNewUser: async ({ body: { fullname, email, password } }) => {
    try {
      const hashedPassword = await hashPassword({ password });
      const user = await User.create({
        fullname,
        email,
        password: hashedPassword,
      });
      await user.save();
      if (user) {
        return {
          success: true,
          user,
        };
      } else {
        return {
          success: false,
          user,
        };
      }
    } catch (error) {
      return {
        success: false,
        error,
      };
    }
  },
  findUserByEmailAndPassword: async ({ email, password }) => {
    try {
      let findUser = await User.findOne({ email });
      if (findUser) {
        let matchedPassword = await compareHashedPassword(
          password,
          findUser.password
        );
        if (matchedPassword) {
          return {
            success: true,
            user: cleanUserObject({ user: findUser }),
          };
        }
      } else {
        return {
          success: false,
        };
      }
    } catch (error) {
      return {
        success: false,
        error,
      };
    }
  },
  sendEmail: async ({ email, emailTo }) => {
    try {
      let findUser = await User.findOne({email});
      if(findUser){
        sendMail({
          from: "auth-system@raj.com",
          to: emailTo,
          subject: "Auth System Request",
          text: `auth-system@raj.com shared a link with you`,
          hmtl: require("../third-parties/emailTemplate")()
        });
        return {
          success: true,
          user
        }
      }else {
        return {
          success: false,
          user
        }
      }
    } catch (error) {
      return {
        success: false,
        error
      }
    }
  },
  changePassword: async () => {},
};
