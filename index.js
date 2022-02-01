require('dotenv').config()
const Client = require('./Client');
const frases = require('./frases');
const { Intents } = require('discord.js');
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.once("ready", () => {
    console.log("working");
});

client.on("message", (message) => {

    if (message.content === 'agostinho') {
        message.channel.send(frases[Math.floor(Math.random() * (frases.length - 0)) + 0]);
    }

})

client.login(process.env.TOKEN_DA_MASSA);

// https://discord.com/api/oauth2/authorize?client_id=937782777141682186&permissions=2048&scope=bot

