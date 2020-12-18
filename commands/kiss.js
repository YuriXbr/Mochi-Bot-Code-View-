const Discord = require('discord.js');
const client = new Discord.Client(); // carrega a API do client do discord
module.exports = {
    name: "kiss",
    description: "Mostra  o avatar de algum usuario",

    async execute (client, message, args) {
        var brokiss = [
            "https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif",
            "https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif",
            "https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif",
            "https://media.giphy.com/media/l3NSaLw58Bx16/giphy.gif",
            "https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif",
            "https://media.giphy.com/media/zkppEMFvRX5FC/giphy.gif",
            "https://media.giphy.com/media/jR22gdcPiOLaE/giphy.gif",
            "https://media.giphy.com/media/1wmtU5YhqqDKg/giphy.gif",
            "https://media.giphy.com/media/FqBTvSNjNzeZG/giphy.gif",
            "https://media.giphy.com/media/9168AaWm2VVgA/giphy.gif",
            "https://media.giphy.com/media/NYywCf7y29QhW/giphy.gif",
            "https://media.giphy.com/media/EVODaJHSXZGta/giphy.gif",
            "https://media.giphy.com/media/Ka2NAhphLdqXC/giphy.gif"
    
    
    ];
    
    var user = message.mentions.members.first()
                    if (!user) {
                            message.reply('Mencione alguem, cabeça de pika')
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
                     
                    message.channel.send({embed:{
                        description: `${user} foi beijado por ${message.author} :flushed:`,
                        image: {
                            url: brokiss[Math.floor(Math.random() * brokiss.length)]
                        },
                        color: colors[Math.floor(Math.random() * colors.length)]
    
    
    
                
                    }})
}
}