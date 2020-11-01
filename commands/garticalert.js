module.exports = {
    name: 'garticalert',
    description: 'Chama para jogar gartic',
    async execute(message, args) {
        const Discord = require("discord.js"); // carrega a API do discord
        const client = new Discord.Client(); // carrega a API do client do discord
        const { MessageEmbed } = require('discord.js');

        message.delete().catch();
        let argsgartic = args.join(" ").split(" / ");
        const garticcode = args[0];
        const garticpass = args[1];

        const embed = {
            "title": "**VENHA JOGAR GARTIC**",
            "color": 4208334,
            "description": "Opá, iremos jogar um Gartic, chega mais",
            "thumbnail": {
                "url": "https://media.discordapp.net/attachments/729467148338200649/770436429868040202/O1PZp04AoxddQSPDs-2Ci5ZLMXZZw4TMgNiGjh9wpW8SSbBdQ9wiGIfhStR8YZEBBk96.png"
            },
            "footer": {
                "text": "https://gartic.io/   OU   https://gartic.com.br/",
                "icon_url": "https://cdn.discordapp.com/attachments/729467230835703842/770418580369571840/UIHere.png"
            },
            "fields": [
                {
                    "name": "Call: ",
                    "value": "Canais de vóz",
                    "inline": false
                },
                {
                    "name": "Código da Sala: ",
                    "value": `${garticcode}`,
                    "inline": true
                },
                {
                    "name": "Senha da sala: ",
                    "value": `${garticpass}`,
                    "inline": true
                }
            ]
        };

        const m = await message.channel.send({ embed: embed });
        }
    }
