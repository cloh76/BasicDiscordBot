const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");


bot.on("guildMemberAdd", member => {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`Welcome ${member.user} to our Discord Server.  Please check out the FAQ channel for documentation and support to help you get started`).catch(console.error);
  });


bot.on('message', (message) => {

    if(message.content == 'hello') {
        message.reply('Hi!  Hope you are doing well.');
    }

});

bot.login('Mzc5MDUzNDg1MzU1OTU4Mjgz.DOutlg.8hCJcRmJVr_KrqkZBuYAItWxQVc');