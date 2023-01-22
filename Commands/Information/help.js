const { Command } = require("reconlx");
const { MessageEmbed } = require("discord.js");
const ee = require('../../settings/embed.json')
const config = require('../../settings/config.json')

module.exports = new Command({
    // options
    name: 'help',
    description: `Show All Commands`,
    userPermissions: ['SEND_MESSAGES'],
    category: "Information",
    // command start
    run: async ({ client, interaction, args }) => {
        try {
            if (args[0]) {
                const embed = new MessageEmbed();
                const cmd = client.Commands.get(args[0].toLowerCase())
                if (!cmd) {
                    return interaction.followUp({ embeds: [embed.setColor(ee.embed_wrongcolor).setDescription(`No Information found for command **${args[0].toLowerCase()}**`)] });
                }
                if (cmd.name) embed.addField("**Command name**", `\`${cmd.name}\``);
                if (cmd.name) embed.setTitle(`Detailed Information about:\`${cmd.name}\``);
                if (cmd.description) embed.addField("**Description**", `\`${cmd.description}\``);
                if (cmd.usage) {
                    embed.addField("**Usage**", `\`${prefix}${cmd.usage}\``);
                    embed.setFooter("Syntax: <> = required, [] = optional");
                }
                return interaction.followUp({ embeds: [embed.setColor(ee.embed_color)] });
            } else {
                let homeEmbed = new MessageEmbed()
                    .setColor(ee.embed_color)
                    .setTitle(` 🔰 My All Slash Commands`)
                    .addField("Developer", `Name :- <@598999688103985223>`)
                    .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
                    .setFooter(ee.embed_footertext, ee.embed_footericon)

                const commands = category => {
                    return client.Commands.filter((cmd) => cmd.category === category).map((cmd) => `\`${cmd.name}\``);
                }
                try {
                    for (let i = 0; i < client.categories.length; i += 1) {
                        const current = client.categories[i];
                        const items = commands(current);
                        homeEmbed.addField(`**${current.toUpperCase()} [${items.length}]**`, `> ${items.join(", ")}`);
                    }
                } catch (e) {
                    console.log(e);
                }
                interaction.followUp({ embeds: [homeEmbed], ephemeral: true })
            }
        } catch (e) {
            console.log(e);
        }
    }
})