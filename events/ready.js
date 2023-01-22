const client = require("..");

client.on('ready', () => {
  console.log(`${client.user.username} Is Online`);
  client.user.setActivity(`you play Bee Swarm Simulator`, { type: "WATCHING", url: "https://awashcard0.github.io" });
})