const dotenv = require('dotenv');

dotenv.config();

// Implement an IIFE that returns an object with properties
// each representing an environment variable
module.exports = ((process) => {
  return {
    dbUri: process.DB_URI,
    //dbRemoteUri: process.REMOTE_DB_URI,
    dbUsername: process.DB_USERNAME,
    dbPassword: process.DB_PWD
  };
})(process.env);
