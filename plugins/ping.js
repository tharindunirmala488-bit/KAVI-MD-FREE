const config = require('../config');
const { cmd, commands } = require('../command');

// Bot details
const botname = "NIMA MD";
const ownername = "THARINDU NIRMALA";

// Quoted object
const Supunwa = {
  key: {
    remoteJid: 'status@broadcast',
    participant: '0@s.whatsapp.net'
  },
  message: {
    newsletterAdminInviteMessage: {
      newsletterJid: '120363417070951702@newsletter', // your channel jid
      newsletterName: "NIMA VIBE MUSIC",
      caption: botname + ` 𝚅𝙴𝚁𝙸𝙵𝙸𝙴𝙳 𝙱𝚈 ` + ownername,
      inviteExpiration: 0
    }
  }
};

// PING COMMAND
cmd({
  pattern: "ping",
  alias: ["speed", "p"],
  use: '.ping',
  desc: "Check bot's response time.",
  category: "main",
  react: "⚡",
  filename: __filename
},
async (conn, mek, m, { from, quoted, reply }) => {
  try {
    const startTime = Date.now();
    await new Promise(resolve => setTimeout(resolve, 10)); // simulate delay
    const ping = Date.now() - startTime;

    let contextInfo = {
      mentionedJid: [m.sender],
      isForwarded: true,
      forwardingScore: 999,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363417070951702@newsletter', 
        newsletterName: "NIRMALA ㋡",
        serverMessageId: 999
      },
      externalAdReply: {
        title: 'NIMA-MD 👨‍💻',
        body: 'BOT STATUS | ONLINE ㋡',
        thumbnailUrl: "https://files.catbox.moe/2hj8ph.jpg",
        mediaType: 1,
        renderLargerThumbnail: true,
        showAdAttribution: true
      }
    };

    // Send the ping response
    await conn.sendMessage(from, {
      text: `*NIMA MD SPEED ➟ ${ping}ms*`,
      contextInfo
    }, { quoted: Supunwa });

  } catch (e) {
    console.error(e);
    reply(`An error occurred: ${e.message}`);
  }
});
