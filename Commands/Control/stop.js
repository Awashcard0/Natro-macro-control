const { Command } = require("reconlx");
var ks = require('node-key-sender');

module.exports = new Command({
  // options
  name: 'stop',
  description: `Stop natro macro`,
  userPermissions: ['SEND_MESSAGES'],
  category: "Control",
  // command start
  run: async ({ interaction }) => {
    interaction.followUp(`Stoping macro...`)
    ks.sendKey('f3');
    }
  })