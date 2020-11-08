const Discord = require('discord.js');
const client = new Discord.Client(); // carrega a API do client do discord
module.exports = {
    name: "avatar",
    description: "Mostra  o avatar de algum usuario",

    async execute (message, args) {

        let member = message.mentions.users.first() || message.author

        let avatar = member.displayAvatarURL({size: 1024})


        const embed = new Discord.MessageEmbed()
        .setTitle(`${member.username}'s avatar`)
        .setImage(avatar)
        .setColor("RANDOM")

        message.channel.send(embed);
    }
}