const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const token = require('./token.json');

client.on('ready', () => {
    client.user.setActivity('Generating dongeons');
    console.log('Bot has been launched without issues!');
});

client.on('message', msg => {
    if (msg.author.bot) return;
    if (msg.content.indexOf(config.token.prefix) !== 0) return;
    const args = msg.content.slice(config.token.prefix.length).trim().split(/ /);
    const command = args.shift().toLowerCase();
});