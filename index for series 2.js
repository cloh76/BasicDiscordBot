const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == 'Why did the Chicken cross the Road?') {
        message.reply('To get to the other side');
    }

});

bot.login('YOUR BOT TOKEN');