const ee = require('../../settings/embed.json')
const config = require('../../settings/config.json')
var ks = require('node-key-sender');

module.exports = {
  // options
  name: 'stop',
  description: `Stop natro macro`,
  userPermissions: ['SEND_MESSAGES'],
  category: "Control",
  // command start
  run: async ({ client, interaction, args }) => {
    let member = interaction.guild.members.cache.get(interaction.member.id)
    interaction.followUp(`Stoping macro...`)
    ks.sendKey('f3');
    }
  }