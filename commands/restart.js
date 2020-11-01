module.exports = {
    name: 'restart',
    description: 'reinicia o bot',
    async execute(message, args) {
        const Discord = require("discord.js"); // carrega a API do discord
        const client = new Discord.Client(); // carrega a API do client do discord
        const { MessageEmbed } = require('discord.js');

        message.delete();
        const Embedrestart = new MessageEmbed()
          .setTitle("RESTART ALERT!")
          .setAuthor(`${message.author.username}` , message.author.displayAvatarURL())
          .setDescription(
            `Estou Reiniciando....`
          )
          .setColor('#ffcc00'); //#fb644c
          const m = await message.channel.send(Embedrestart);
        process.exit();
        }
    }
