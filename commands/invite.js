module.exports = {
    name: 'invite',
    description: 'pega o convite',
    async execute(message, args) {
        const Discord = require("discord.js"); // carrega a API do discord
        const client = new Discord.Client(); // carrega a API do client do discord
        const { MessageEmbed } = require('discord.js');
        const config = require('../config.json');

        message.delete();
        const m = await message.channel.send(`LINK: http://discordapp.com/oauth2/authorize?=&client_id=${config.BOTID}&scope=bot&permissions=8`);
        }
    }