module.exports = {
    name: 'esay',
    description: 'anuncioscustom',
    async execute(message, args) {
        const Discord = require("discord.js"); // carrega a API do discord
        const client = new Discord.Client(); // carrega a API do client do discord
        const { MessageEmbed } = require('discord.js');

        message.delete().catch();
        let anunciostat = args.join(" ");
        
        const embed = {
                "color": 8690150,
                "title": "**ANUNCIO**",
                "description": "📣 "+ `${anunciostat}`
            }
        const m = await message.channel.send("ARROBAeveryone", { embed: embed });
        }
    }
