module.exports = {
    name: 'ping',
    description: 'Ping command',
    async execute(message, args) {
        const Discord = require("discord.js"); // carrega a API do discord
        const client = new Discord.Client(); // carrega a API do client do discord
        const { MessageEmbed } = require('discord.js');

            message.delete().catch();
            const Embedpinging = new MessageEmbed()
              .setTitle("Pong!")
              .setAuthor(`${message.author.username}` , message.author.displayAvatarURL())
              .setDescription(
                `⌛ Pingando...`
              )
              .setColor('#fb644c');
            const msgp = await message.channel.send(Embedpinging);
            const Embed = new MessageEmbed()
              .setTitle("Pong!")
              .setAuthor(`${message.author.username}` , message.author.displayAvatarURL())
              .setDescription(
                `⌛ Latencia is ${Math.floor(
                  msgp.createdTimestamp - message.createdTimestamp
                )}ms\n⏲️ API Ping is ${Math.round(client.ws.ping)}`
              )
              .setColor('#fb644c');
            msgp.edit(Embed);
            msgp.edit("\u200b");
        }
    }
