const { Command } = require("reconlx");
const { exec } = require('child_process');

module.exports = new Command({
  // options
  name: 'close',
  description: `Close roblox (Use /stop if you dont want natro opening roblox again)`,
  userPermissions: ['SEND_MESSAGES'],
  category: "Control",
  // command start
  run: async ({ interaction }) => {
    interaction.followUp(`Closeing roblox...`);
      exec('tasklist /fi "imagename eq RobloxPlayerBeta.exe" /fo table /nh', (error, stdout) => {
        if (error) {
          console.error(`exec error: ${error}`);
          interaction.followUp(`exec error: ${error}`);
          return;
        }
      
        const lines = stdout.split('\n');
        for (const line of lines) {
          if (line.startsWith('RobloxPlayerBeta.exe')) {
            const parts = line.split(/\s+/);
            const pid = parseInt(parts[1], 10);
            console.log(`RobloxPlayerBeta.exe PID: ${pid}`);
            process.kill(pid, "SIGKILL");
            interaction.channel.send("Successfully stoped")
            break;
          }
        }
      });
    
    }
  })
