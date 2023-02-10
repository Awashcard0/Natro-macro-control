const { Client, Collection } = require("discord.js");
const request = require("request");
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

console.log("Thank you for useing Natro macro control by Awashcard0#0001");
const localVersion = "v5";

const config = require("./settings/config.json");
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

request("https://raw.githubusercontent.com/Awashcard0/Natro-macro-control/main/version.txt", function (error, response, body) {
  if (error) {
    console.error("Error making the request:", error);
    return;
  }

  if (body.includes(localVersion)) {
    console.log("You are using the most up-to-date version of natro macro remote control");
  } else {
    console.log("To get the latest features from natro macro remote control please update it to", body, "at https://github.com/Awashcard0/Natro-macro-control");
  }
});
