const { Command } = require("reconlx");

module.exports = new Command({
    // options
    name: 'say',
    description: `Get Your Message Back`,
    userPermissions: ['SEND_MESSAGES'],
    category: "Others",
    options: [
        {
            name: "msg",
            description: "Type Your Message Here",
            type: "STRING",
            required: true
        }
    ],
    // command start
    run: async ({ interaction }) => {
        let msg = interaction.options.getString('msg');

        interaction.followUp({ content: msg, ephemeral: true })
    }
})