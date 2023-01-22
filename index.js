const { Client, Collection } = require("discord.js");
const fs = require("fs");
const client = new Client({
    messageCacheLifetime: 60,
    fetchAllMembers: false,
    messageCacheMaxSize: 10,
    restTimeOffset: 0,
    restWsBridgetimeout: 100,
    shards: "auto",
    allowedMentions: {
        parse: ["roles", "users", "everyone"],
        repliedUser: true,
    },
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: 32767,
});
module.exports = client;

const config = require("./settings/config.json");
const ee = require("./settings/embed.json");
const prefix = config.prefix;
const token = config.token;
// Global Variables
client.events = new Collection();
client.cooldowns = new Collection();
client.Commands = new Collection();
client.categories = fs.readdirSync("./Commands/");

// Initializing the project
//Loading files, with the client variable like Command Handler, Event Handler, ...
["event_handler", "slash_handler"].forEach((handler) => {
    require(`./handlers/${handler}`)(client)
});

client.login(token);


process.on('unhandledRejection', (reason, p) => {
    console.log(' [Error_Handling] :: Unhandled Rejection/Catch');
    console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
    console.log(' [Error_Handling] :: Uncaught Exception/Catch');
    console.log(err, origin);
})
process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log(' [Error_Handling] :: Uncaught Exception/Catch (MONITOR)');
    console.log(err, origin);
});

