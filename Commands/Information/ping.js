const { Command } = require("reconlx");
const { MessageEmbed } = require("discord.js");
const ee = require('../../settings/embed.json')
const config = require('../../settings/config.json')

module.exports = new Command({
    // options
    name: 'ping',
    description: `Show Bot Ping`,
    userPermissions: ['SEND_MESSAGES'],
    category : "Information",
    // command start
    run: async ({ client, interaction, args }) => {
        interaction.followUp({
            embeds: [
                new MessageEmbed()
                    .setColor(ee.embed_color)
                    .setTitle(`Ping :- ${client.ws.ping}`)
                    .setFooter(ee.embed_footertext, ee.embed_footericon)
            ],
            ephemeral: true
        })
    }
})