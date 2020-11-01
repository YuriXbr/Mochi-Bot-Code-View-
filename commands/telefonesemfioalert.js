module.exports = {
    name: 'telefonesemfioalert',
    description: 'chama pra jogar telefonesemfio',
    async execute(message, args) {
        const Discord = require("discord.js"); // carrega a API do discord
        const client = new Discord.Client(); // carrega a API do client do discord
        const { MessageEmbed } = require('discord.js');


        message.delete().catch();
        let argbrokenpic = args.join(" ").split(" / ");
        const salacode = args[0];
        const call = args[1];

        const embed = {
            "title": "**VENHA JOGAR BROKEN PICTURE PHONE!**",
            "color": 4208334,
            "description": "Iremos jogar telefone sem fio, se baseia em você escrever uma frase, e outra pessoa irá dezenhar, a proxima pessoa irá tentar adivinhar o que é, e assim por diante",
            "thumbnail": {
                "url": "https://cdn.discordapp.com/attachments/729467230835703842/770433185770635284/122255298_1GG.png"
            },
            "footer": {
                "text": "https://www.brokenpicturephone.com/   OU   https://garticphone.com/",
                "icon_url": "https://cdn.discordapp.com/attachments/729467230835703842/770418580369571840/UIHere.png"
            },
            "fields": [
                {
                    "name": "Chamada",
                    "value": `${call}`,
                    "inline": false
                },
                {
                    "name": "Código da Sala",
                    "value": `${salacode}`,
                    "inline": true
                },
                {
                    "name": "Limite de jogadores:",
                    "value": "10",
                    "inline": true
                }
            ]
        };

        const m = await message.channel.send("ARROBAeveryone", { embed: embed });
        }
    }
