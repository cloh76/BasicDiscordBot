const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");




bot.on('message', (message) => {

    if(message.content == 'hello') {
        message.reply('Hi!  Hope you are doing well.');
    }

});

bot.login('YOUR BOT TOKEN');