const { Command } = require("reconlx");
const ee = require('../../settings/embed.json')
const config = require('../../settings/config.json')
var ks = require('node-key-sender');

module.exports = new Command({
  // options
  name: 'start',
  description: `Start natro macro`,
  userPermissions: ['SEND_MESSAGES'],
  category: "Control",
  // command start
  run: async ({ client, interaction, args }) => {
    let member = interaction.guild.members.cache.get(interaction.member.id)
    interaction.followUp(`Starting macro...`)
    ks.sendKey('f1');
    }
  })