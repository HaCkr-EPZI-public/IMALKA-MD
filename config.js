const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "bKY2BATI#fe1qx7gMBfI4fUPYY-Nu8QQcQ6T6CJ5vABELJ5Da0KE",
MONGODB: process.env.MONGODB || "mongodb+srv://epzi:e1IX5RIPcfb0aT2t@epzi0.taajc.mongodb.net/",
PEXELS_API_KEY: process.env.PEXELS_API_KEY || "39WCzaHAX939xiH22NCddGGvzp7cgbu1VVjeYUaZXyHUaWlL1LFcVFxH",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
AUTO_RAED_STATUS: process.env.AUTO_RAED_STATUS || "false",
};
