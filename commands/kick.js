const Discord = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'kicka um usuario',
    async execute(message, args) {
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('Voce nao pode fazer isso')
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('Eu não tenho permissao')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('Especifique um usuario');

        if(!member) return message.channel.send('Nao consigo achar um usuario com este nome');
        if(!member.kickable) return message.channel.send('A permissão deste usuario é maior que a minha');

        if(member.id === message.author.id) return message.channel.send('Bruh, Voce não pode kickar voce mesmo');

        let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Nao especificado';

        member.kick(`👮‍♂️ Staff: ${message.author.tag}   |   💀 motivo: ${reason}`)
        .catch(err => {
            if(err) return message.channel.send('Alguma coisa deu errado')
        })

        const kickembed = new Discord.MessageEmbed()
        .setTitle('Kick')
        .color()
        .setTimestamp()

        message.channel.send(kickembed);        
    }
}
