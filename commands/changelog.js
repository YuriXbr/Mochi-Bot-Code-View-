module.exports = {
    name: 'changelog',
    description: 've o changelog',
    async execute(message, args) {
        const Discord = require("discord.js"); // carrega a API do discord
        const client = new Discord.Client(); // carrega a API do client do discord
        const { MessageEmbed } = require('discord.js');

        message.delete().catch();
        message.reply("Changelog no canal <#761351327740592128>");
        }
    }
