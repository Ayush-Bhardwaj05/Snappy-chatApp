const host = "http://localhost:5000";

const registerRoute = `${host}/api/auth/register`;
const loginRoute = `${host}/api/auth/login`;
const setAvatarRoute = `${host}/api/auth/setAvatar`;
const allUsersRoute = `${host}/api/auth/allUsers`;
const sendMessageRoute = `${host}/api/messages/addmsg`;
const getAllMessageRoute = `${host}/api/messages/getmsg`;

module.exports = {
  host,
  registerRoute,
  loginRoute,
  setAvatarRoute,
  allUsersRoute,
  sendMessageRoute,
  getAllMessageRoute
};
