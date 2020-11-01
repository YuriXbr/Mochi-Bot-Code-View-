module.exports = {
    name: 'setstat',
    description: 'Muda o status do bot',
    async execute(message, args) {
        const Discord = require("discord.js"); // carrega a API do discord
        const client = new Discord.Client(); // carrega a API do client do discord
        const { MessageEmbed } = require('discord.js');

        message.delete().catch();
        var member = message.mentions.members.first();
        if (member.bannable) {
        member.ban().then((member) => {
            message.channel.send(":wave: " + member.displayName + " Escreveu não leu o pau comeu");
            client.channels.get(config.logchannelid).send(`${message.author} baniu ${member}`);
        }).catch(() => {
            message.reply("Permissão negada");
        });
    } else {
        message.reply("Não é banivel");
    }
        }
    }
