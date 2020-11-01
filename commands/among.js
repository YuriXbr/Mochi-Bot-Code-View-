module.exports = {
    name: 'among',
    description: 'Chama o pessoal para jogar among',
    async execute(message, args) {
        const Discord = require("discord.js"); // carrega a API do discord
        const client = new Discord.Client(); // carrega a API do client do discord
        const { MessageEmbed } = require('discord.js');

        message.delete().catch();
        let argamongs = args.join(" ").split(" / ");
        const amongcode = args[0];
        const amongvagas = args[1];
        const embed = {
            "title": "**ALERTA DE AMONGUS!! VENHA JOGAR**",
            "description": "Olá pessoas, venham jogar among us, Siga abaixo o código da sala",
            "thumbnail": {
                "url": "https://cdn.discordapp.com/attachments/729467230835703842/770425265141973032/e81b4292c9b0d05e6c075b7abc15149f88d5bad5r1-512-512v2_00.jpg"
            },
            "fields": [
                {
                    "name": "CHAT: ",
                    "value": "Canais de voz",
                    "inline": false
                },
                {
                    "name": "CÓDIGO",
                    "value": `${amongcode}`,
                    "inline": true
                },
                {
                    "name": "vagas: ",
                    "value": `${amongvagas}`,
                    "inline": true
                }
            ],
            "color": 16740207
        }
        const m = await message.channel.send("ARROBAeveryone", { embed: embed });


    }
}