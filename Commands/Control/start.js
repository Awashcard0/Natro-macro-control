const { Command } = require("reconlx");
var ks = require('node-key-sender');

module.exports = new Command({
  // options
  name: 'start',
  description: `Start natro macro`,
  userPermissions: ['SEND_MESSAGES'],
  category: "Control",
  // command start
  run: async ({ interaction }) => {
    interaction.followUp(`Starting macro...`)
    ks.sendKey('f1');
    }
  })