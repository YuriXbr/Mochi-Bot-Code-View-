const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "changelog",
    description: "ve o changelog",

    async execute ( message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const doisdotzero = new Discord.MessageEmbed()
        .setTitle('2.0')
        .addField('`Adicionado`', 'comando de RESTART')
        .addField('`Adicionado`', 'comando de STOP')
        .addField('`Adicionado`', 'comando de BAN/KICK')
        .addField('`Criados`', 'Comandos playalert, telefonesemfioalert, garticalert, among.')
        .addField('`Adicionado`', 'PM2 para desenvolvimento de um painel de controle')
        .addField('`Adicionado`', 'comandos de debug')
        .addField('`Melhorado`', 'Melhorias no código')
        .addField('`Otimização`', 'Otimização no código')
        .addField('`Correção`', 'Correção no sistema de ping, permissão, embed e comando say')
        .setFooter('`Data`', "29/10")
        .setTimestamp()

        const doisdotcinco = new Discord.MessageEmbed()
        .setTitle('2.0.5 (algumas versões puladas)')
        .addField('`Adicionado`', 'CommandHandler para melhoria no código')
        .addField('`Otimização`', 'Codigo completamente refatorado e otimizado')
        .addField('`Corrigidos`', 'Crashs e bugs')
        .addField('`Melhorias`', 'Sistema de anuncios melhorados')
        .addField('`Finalizados`', 'Anuncios pré montados, agora não precisa de permissão')
        .addField('`Adicionado`', 'esay Anuncio em embed para staffs')
        .addField('`FELIZ ANIVERSÁRIO`', 'Bolinho de 16 anos para o ADM :)')
        .setFooter('`Data`', "30/10")
        .setTimestamp()

        const doisone = new Discord.MessageEmbed()
        .setTitle('2.1 - Grande atualização')
        .addField('`Adicionado`', 'Comando calcular')
        .addField('`Adicionado`', 'Comando help')
        .addField('`Adicionado`', 'Comando clear')
        .addField('`Adicionado`', 'Comando meme')
        .addField('`Adicionado`', 'Comando ascii')
        .addField('`Adicionado`', 'Comando avatar')
        .addField('`Adicionado`', 'Bloqueando trava discord')
        .addField('`Removido`', 'Comando comandos')
        .addField('`Refeito`', 'Sistema de log')
        .addField('`Refeito`', 'Comando ChangeLog')
        .addField('`Library`', 'Suporte a biblioteca discord.js-Pagination')
        .addField('`Melhorado`', 'Comando de ban&kick Melhorado')
        .setFooter('`Data`', "02/11")
        .setTimestamp()

        const doistwo = new Discord.MessageEmbed()
        .setTitle('2.2 - Pequena atualização')
        .addField('`Adicionado`', 'Comando kiss')
        .addField('`Adicionado`', 'Comando FBI')
        .addField('`Adicionado`', 'Comando chorar')
        .addField('`Adicionado`', 'Comando dedada')
        .addField('`Adicionado`', 'Comando eval')
        .addField('`NOVO:`', 'Os comandos de interação agora são reconhecidos de varias formas (cry, chorar, chorando etc)')
        .setFooter('`Data`', "05/12")
        .setTimestamp()


        const pages = [
                doisdotzero,
                doisdotcinco,
                doisone,
                doistwo
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}