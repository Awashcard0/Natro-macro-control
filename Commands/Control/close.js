const { Command } = require("reconlx");

module.exports = new Command({
  // options
  name: 'close',
  description: `Close roblox (Use /stop if you dont want natro opening roblox again)`,
  userPermissions: ['SEND_MESSAGES'],
  category: "Control",
  // command start
  run: async ({ interaction }) => {
    let id =
    interaction.followUp(`Closeing roblox...`);
    exec('tasklist', (err, out, code) => { 
    const id = processIdFromTaskList("RobloxPlayerBeta.exe", out); 
    process.kill(id, "SIGKILL");
});

    
    }
  })
