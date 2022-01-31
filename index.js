require('dotenv').config()
const Client = require('./Client');
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
    if (message.content === "ping") {
        message.channel.send("pong");
    }

    if (message.content === "tomar no seu cu") {
        message.channel.send("vai você seu fdp");
    }

})

client.login(process.env.TOKEN_DA_MASSA);

// https://discord.com/api/oauth2/authorize?client_id=937782777141682186&permissions=8&scope=bot

