const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "CcUBhR5T#dcy3YT8wu_5MLxZnDFlI0F1a-rXA8Bm6uiaGdgCDXfk", // ඔයාගෙ session id එක
MONGODB: process.env.MONGODB || "mongodb://mongo:yphYdGclpJQQRIdMdRDsyOfspcuWFVZd@mainline.proxy.rlwy.net:56427",  //ඔයාගෙ public mongoDb url එක
};
 
