const { Command } = require("reconlx");
var ks = require('node-key-sender');

module.exports = new Command({
  // options
  name: 'pause',
  description: `Pause natro macro`,
  userPermissions: ['SEND_MESSAGES'],
  category: "Control",
  // command start
  run: async ({ interaction }) => {
    interaction.followUp(`Pausing macro...`)
    ks.sendKey('f2');
    }
  })
