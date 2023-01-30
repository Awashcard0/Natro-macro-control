const { Command } = require("reconlx");
var screenshot = require('desktop-screenshot');

module.exports = new Command({
  // options
  name: 'screenshot',
  description: `Get a screenshot`,
  userPermissions: ['SEND_MESSAGES'],
  category: "Control",
  // command start
  run: async ({ interaction }) => {
    interaction.followUp(`Getting screenshot...`)
    screenshot("screenshot.png", function(error, complete) {
    // interaction.followUp("Screenshot:", files, [{ attachment: "screenshot.png" }] );
    interaction.followUp({files: ["screenshot.png"] })
});

    }
  })