const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "é so um comando de ajuda, oq vc esperava?",

    async execute ( message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const owner = new Discord.MessageEmbed()
        .setTitle('Owner')
        .addField('`>logtoggle`', "desliga/liga o log")
        .addField('`>eval`', "executa um código customizado")
        .addField('`>cmd`', "desliga/liga os comandos não owner")
        .addField('`>setstat`', 'Altera o status do bot')
        .addField('`>restart`', 'Reinicia o bot')
        .addField('`>stop`', 'para o bot')
        .setFooter('`Prefix`', ">")
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('Utilidades')
        .addField('`>calcular`', 'Calcula, dàh, exemplo: >calcular 10*10')
        .addField('`>ping`', 'Get the bot\'s API ping')
        .addField('`>say`', 'Fala algo da sua escolha exemplo: >say oi')
        .addField('`>changelog`', 'Mostra o Changelog')
        .addField('`>help`', 'Mostra os comandos, dàh')
        .addField('`>avatar`','Mostra o avatar do usuario, oq vc imaginava?')
        .addField('`>clima`', 'Mostra o clima de uma região exemplo: >clima Sao Paulo')
        .addField('`>invite`', 'Mostra o convite do bot, Dàh')
        .addField('`>ascii`', 'Converte um texto em ascii')
        .setFooter('`Prefix`', ">")
        .setTimestamp()

        const moderation = new Discord.MessageEmbed()
        .setTitle('Moderação')
        .addField('`>kick`', 'Kicka um membro exemplo: >kick @User#0000 Motivo')
        .addField('`>ban`', 'Bane um membro exemplo: >ban @User#0000 Motivo')
        .addField('`>clear`', 'Deleta mensagens exemplo: >clear 100')
        .addField('`>esay`', 'anuncio mencionando everyone com embed')
        .setFooter('`Prefix`', ">")
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('Diversão')
        .addField('`>meme`', 'Gera um meme Aleatório')
        .addField('`>kiss`', 'Da um beijo em outro usuario')
        .addField('`>fbi`', 'convida alguem pro carro do FBI')
        .addField('`>dedada`', 'Da uma dedada em alguem')
        .setFooter('`Prefix`', ">")
        .setTimestamp()

        const anuncios = new Discord.MessageEmbed()
        .setTitle('Anuncios')
        .addField('`>garticalert`', 'Chama o pessoal para jogar gartic')
        .addField('`>amongalert`', 'Chama o pessoal para jogar among us')
        .addField('`>playalert`', 'Chama o pessoal para jogar')
        .addField('`>telefonesemfioalert`', 'Chama o pessoal para jogar telefone sem fio')
        .setFooter('`Prefix`', ">")
        .setTimestamp()

        const pages = [
                owner,
                utility,
                moderation,
                fun,
                anuncios
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}