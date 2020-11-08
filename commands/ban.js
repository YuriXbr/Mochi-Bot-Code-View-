const Discord = require('discord.js');
const config = require("../config.json"); // carrega o token e o prefix do bot pelo config.json
const client = new Discord.Client(); // carrega a API do client do discord
module.exports = {
    name: "ban",
    description: "Bane 1 usuario",

    async execute (message, args) {

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Você não pode fazer isso')
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('Não tenho permissão de fazer isso')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('Especifique Alguem');

        if(!member) return message.channel.send('Não consegui achar este usuario');
        if(!member.bannable) return message.channel.send('Este usuario possui permissões maiores que a minha.');

        if(member.id === message.author.id) return message.channel.send('Bruh, Você não pode banir você mesmo');

        let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Não Especificado';

        await member.ban({days: 7, reason: `👮‍♂️ Staff: ${message.author.tag}   |   💀 motivo: ${reason}`})
        .catch(err => {
            if(err) return message.channel.send('Algo deu errado')
        })

        const banembed = new Discord.MessageEmbed()
        .setTitle('Banido')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('Usuario Banido:', member)
        .addField('Staff:', message.author)
        .addField('Motivo', reason)
        .setTimestamp()

        client.channels.cache.get(config.Banchannelid).send(banembed);


    }
}