const { Client, ApplicationCommand } = require('discord.js');
const fs = require('fs');

/**
   *
   * @param {Client} client
   */

module.exports = (client) => {
    try {
        let command = 0;
        const arrayOfCommands = [];
        fs.readdirSync("./Commands").forEach(cmd => {
            let commands = fs.readdirSync(`./Commands/${cmd}/`).filter((file) => file.endsWith(".js"));
            for (cmds of commands) {
                let pull = require(`../Commands/${cmd}/${cmds}`);
                if (pull.name) {
                    client.Commands.set(pull.name, pull);
                    arrayOfCommands.push(pull)
                    command++
                } else {
                    console.log(`${cmds} Command is not Ready`);
                    continue;
                }
                if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));

            }
            client.on("ready", async () => {
                client.guilds.cache.forEach(async (g) => {
                    await client.guilds.cache.get(g.id).commands.set(arrayOfCommands);
                });


            });

        })
        console.log(`${command} sls lOADED`);
    } catch (e) {
        console.log(e.message);
    }
}