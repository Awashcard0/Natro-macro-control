const { Command } = require("reconlx");
const ee = require('../../settings/embed.json')
const config = require('../../settings/config.json')
var screenshot = require('desktop-screenshot');

module.exports = new Command({
  // options
  name: 'screenshot',
  description: `Get a screenshot`,
  userPermissions: ['SEND_MESSAGES'],
  category: "Control",
  // command start
  run: async ({ client, interaction, args }) => {
    let member = interaction.guild.members.cache.get(interaction.member.id)
    interaction.followUp(`Getting screenshot...`)
    screenshot("screenshot.png", function(error, complete) {
    // interaction.followUp("Screenshot:", files, [{ attachment: "screenshot.png" }] );
    interaction.followUp({files: ["screenshot.png"] })
});

    }
  })