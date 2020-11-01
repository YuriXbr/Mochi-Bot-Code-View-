module.exports = {
    name: 'stop',
    description: 'para o bot',
    async execute(message, args) {
        const Discord = require("discord.js"); // carrega a API do discord
        const client = new Discord.Client(); // carrega a API do client do discord
        const { MessageEmbed } = require('discord.js');

        message.delete();
        const Embedstop = new MessageEmbed()
          .setTitle("ESTOU DESLIGANDO!")
          .setAuthor(`${message.author.username}` , message.author.displayAvatarURL())
          .setDescription(
            `Desligando Sistemas`
          )
          .setColor('#fb644c');
          const m = await message.channel.send(Embedstop);
          setTimeout(function() {
        process.exit(0);
        process.exit(1);
        process.exit(2);
     }, 1500);
        }
    }
