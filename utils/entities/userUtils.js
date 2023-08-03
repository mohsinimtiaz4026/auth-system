 const omit  = require("lodash/omit");

module.exports.cleanUserObject = ({ user }) => {
    const fieldsToOmit = ["_id","__v","createdAt","updatedAt"];
    return omit({
        id: user._id,
        ...omit(user.toJSON(),fieldsToOmit)
    });
}
module.exports.cleanUsersObjectArray = ({ user }) => {
    const fieldsToOmit = ["_id","__v","createdAt","updatedAt"];
    let cleanUsers = [];
    users.map((user) => {
        cleanUsers.push(
            omit({
                id: user._id,
                ...omit(user.toJSON(),fieldsToOmit)
            })
        );
    });
    return cleanUsers;
}