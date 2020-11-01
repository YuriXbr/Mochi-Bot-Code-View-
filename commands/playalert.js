module.exports = {
    name: 'playalert',
    description: 'Chama o pessoal para jogar',
    async execute(message, args) {
        const Discord = require("discord.js"); // carrega a API do discord
        const client = new Discord.Client(); // carrega a API do client do discord
        const { MessageEmbed } = require('discord.js');

        message.delete();
        const embed = {
            "title": "**EAI, BORA JOGAR?**",
            "description": "E se você entrasse na call, jogasse umas partidas com nos, e já gostasse? então te apresento o chat Geral, venha se divertir",
            "thumbnail": {
                "url": "https://cdn.discordapp.com/attachments/729467230835703842/770418580369571840/UIHere.png"
            },
            "fields": [
                {
                    "name": "Canal: Voz ",
                    "value": "Estamos nos canais de voz",
                    "inline": false
                },
                {
                    "name": "Jogo: ",
                    "value": "Não especificado",
                    "inline": true
                },
                {
                    "name": "Premio ",
                    "value": "cargo de ativo no dia",
                    "inline": true
                }
            ],
            "color": 65408
        }
        const m = await message.channel.send("ARROBAeveryone", { embed: embed });
    



        }
    }
