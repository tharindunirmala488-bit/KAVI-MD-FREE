const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://files.catbox.moe/snhzsb.jpg' },
    { key: 'PREFIX', value: '.' },
    { key: 'MODE', value: 'public' },
    { key: 'AUTO_READ_STATUS', value: 'true' },
    { key: 'AUTO_REACT_STATUS', value: 'true' },
    { key: 'LANGUAGE', value: 'sinhala' },
    { key: 'AUTO_REACT', value: 'true' }, 
    { key: 'FAKE_RECORDING', value: 'true' },
    { key: 'AUTO_TYPING', value: 'false' },
    { key: 'ANTI_LINK', value: 'false' },
    { key: 'AUTO_VOICE', value: 'true' },
    { key: 'AUTO_REPLY', value: 'true' },
    { key: 'ANTI_BAD', value: 'false' },
    { key: 'READ_MESSAGE', value: 'false' },
    { key: 'ALWAYS_ONLINE', value: 'true' },
    { key: 'ANTI_DELETE', value: 'true' },
    { key: 'DELETEMSGSENDTO', value: 'none' },
    { key: 'INBOX_BLOCK', value: 'false' },
    { key: 'ANTI_BOT', value: 'false' },
    { key: 'AUTO_TIKTOK', value: 'false' },
    { key: 'AUTO_NEWS_ENABLED', value: 'false' },
    { key: 'SEND_START_NEWS', value: 'false' },
    { key: 'MOVIE_FOOTER', value: '> *NIMA ᴍᴏᴠɪᴇꜱ 🍃*' },
    { key: 'BOT_NAME', value: 'NIMA-MD' },
    { key: 'MENU_IMG', value: 'https://files.catbox.moe/snhzsb.jpg' },
    { key: 'OWNER_REACT', value: 'true' },
    { key: 'FOOTER', value: '> *POWERED BY THARINDU NIRMALA ☣️*' },
    { key: 'ALIVE_MSG', value: 'ᴀʟɪᴠᴇ ɴᴏᴡ. . .' },
    { key: 'OWNER_NAME', value: 'THARINDU NIRMALA ☣️' },
    { key: 'OWNER_EMOJI', value: '☣️' },
    { key: 'HEART_REACT', value: 'true' },
    { key: 'OWNER_NUMBER', value: '94762641170' }
];

const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('〽️ongoDB Connected ✅');

        // Create default values if missing
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });
            if (!existingVar) {
                await EnvVar.create(envVar);
                console.log(`🔰 Created default env var: ${envVar.key}`);
            }
        }

        // Override config.js values from database
        const allVars = await EnvVar.find({});
        allVars.forEach(env => {
            config[env.key] = env.value;
        });

        console.log('🔄 Config synced from database ✅');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
