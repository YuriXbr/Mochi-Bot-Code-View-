const Discord = require('discord.js');
const client = new Discord.Client(); // carrega a API do client do discord
module.exports = {
    name: "chorar",
    description: "Mostra  o avatar de algum usuario",

    async execute (client, message, args) {
        var brokiss = [
            "https://media.giphy.com/media/ROF8OQvDmxytW/giphy.gif",
            "https://media.giphy.com/media/3fmRTfVIKMRiM/giphy.gif",
            "https://media.giphy.com/media/AI7yqKC5Ov0B2/giphy.gif",
            "https://media.giphy.com/media/beFz7ODP7OD8Q/giphy.gif",
            "https://media.giphy.com/media/87HkPDUOtN0TC/giphy.gif",    
            "https://media.giphy.com/media/mvRwcoCJ9kGTS/giphy.gif",
            "https://media.giphy.com/media/11N961lfRaZWfu/giphy.gif"
    ];
    var mochi = [
        "https://media.giphy.com/media/uj9l4ULaFx7erdZvei/giphy.gif",
        "https://media.giphy.com/media/beFz7ODP7OD8Q/giphy.gif",
        "https://media.giphy.com/media/ukfn7kMzzLqLeyi5Tt/giphy.gif"  
];
    
    var user = message.mentions.members.first()
                    if (!user) {
                            message.reply('Mencione quem te faz chorar');
                            return;
                    }
                    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    
    var colors = [
    0xffffff,
    0x000000,
    0x0000ff,
    0xff0000,
    0x7a7a7a,
    0x00ffff,
    0xffd700,
    0x4b0082
    ]
                    if(message.author.id === "659465519178711068") {
                    message.channel.send({embed:{
                        description: `${message.author} esta chorando por culpa de ${user}`,
                        image: {
                            url: mochi[Math.floor(Math.random() * mochi.length)]
                        },
                        color: colors[Math.floor(Math.random() * colors.length)]
                    }})
                } else {
                    message.channel.send({embed:{
                        description: `${message.author} esta chorando por culpa de ${user}`,
                        image: {
                            url: brokiss[Math.floor(Math.random() * brokiss.length)]
                        },
                        color: colors[Math.floor(Math.random() * colors.length)]
                    }})
                }
}
}