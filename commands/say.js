module.exports = {
    name: 'say',
    description: 'faz o bot falar o que você quiser',
    execute(message, args) {
        const Discord = require("discord.js"); // carrega a API do discord
        const client = new Discord.Client(); // carrega a API do client do discord
        const { MessageEmbed } = require('discord.js');

        message.delete().catch();
        let botmessage = args.join(" ");
        const m = message.channel.send(botmessage);

        }
    }
