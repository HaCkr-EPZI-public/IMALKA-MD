const config = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋🏻",
    filename: __filename
},
async(conn, mek, m, {from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try {
        // Send the audio message first
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/cobrs11/IMALKA-MD/raw/main/Media/Gm_A.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

        // Then send the image with the alive message
        await conn.sendMessage(from, {
            image: { url: config.ALIVE_IMG },
            caption: config.ALIVE_MSG
        }, { quoted: mek });

    } catch(e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
})
