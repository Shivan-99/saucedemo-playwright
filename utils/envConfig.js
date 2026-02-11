require('dotenv').config();

module.exports = {
  baseURL: process.env.BASE_URL,
  users: {
    standard: process.env.STANDARD_USER,
    locked: process.env.LOCKED_OUT_USER
  },
  password: process.env.PASSWORD
};
