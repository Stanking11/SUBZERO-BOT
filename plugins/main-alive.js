
const { cmd } = require("../command");
const moment = require("moment-timezone");
let botStartTime = Date.now();

const ALIVE_IMG = "https://files.catbox.moe/0ydsic.jpeg";

cmd({
  pattern: "alive",
  desc: "Check if the bot is active.",
  category: "info",
  react: "🫡",
  filename: __filename
}, async (conn, mek, m, { reply, from }) => {
  try {
    const pushname = m.pushName || "User";
    const harareTime = moment().tz("Africa/Harare").format("HH:mm:ss");
    const harareDate = moment().tz("Africa/Harare").format("dddd, MMMM Do YYYY");
    const runtimeMilliseconds = Date.now() - botStartTime;
    const runtimeSeconds = Math.floor((runtimeMilliseconds / 1000) % 60);
    const runtimeMinutes = Math.floor((runtimeMilliseconds / (1000 * 60)) % 60);
    const runtimeHours = Math.floor(runtimeMilliseconds / (1000 * 60 * 60));
    const formattedInfo = `
 🏮 *STANY-TECH XMD STATUS* 🏮 

  *Hi👋😄 ${pushname}*

 *⏰ Time: ${harareTime}*
 *📆 Date: ${harareDate}*
 *🔋 Uptime: ${runtimeHours} hours, ${runtimeMinutes} minutes, ${runtimeSeconds} seconds*

 \`Status\`: *𝚂𝚃𝙰𝙽𝚈-𝚃𝙴𝙲𝙷-𝚇𝙼𝙳 is online! 🤗🚀*

> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘  ©𝚂𝚃𝙰𝙽𝚈-𝚃𝙴𝙲𝙷™. 🔗
`.trim();

    if (!ALIVE_IMG || !ALIVE_IMG.startsWith("http")) {
      throw new Error("Invalid ALIVE_IMG URL. Please set a valid image URL.");
    }

    await conn.sendMessage(from, {
      image: { url: ALIVE_IMG },
      caption: formattedInfo,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363304325601080@newsletter',
          newsletterName: 'ѕυϐzєяο м∂ ',
          serverMessageId: 143
        }
      }
    }, { quoted: mek });

// Send audio as per your request
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/mrfrank-ofc/SUBZERO-MD-DATABASE/raw/refs/heads/main/audios/subzero-theone.mp3' }, // Audio URL
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    
  } catch (error) {
    console.error("Error in alive command: ", error);
    const errorMessage = `
 An error occurred while processing the alive command.
 Error Details: ${error.message}
Please report this issue or try again later.
`.trim();
    return reply(errorMessage);
  }
});
