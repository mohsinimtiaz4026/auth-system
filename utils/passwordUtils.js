const bcrypt = require("bcrypt");

module.exports.hashPassword = async ({ password }) => {
    let hashPassword = await bcrypt.hashSync(password,10);
    return hashPassword;
};
module.exports.compareHashedPassword = async ({ password, dbPassword }) => {
    let comparedPassword = await bcrypt.compareSync(password,dbPassword);
    return comparedPassword;
};
