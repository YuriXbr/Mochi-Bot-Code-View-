const Discord = require('discord.js');
const client = new Discord.Client(); // carrega a API do client do discord
module.exports = {
    name: "dedada",
    description: "Mostra  o avatar de algum usuario",

    async execute (client, message, args) {
        var brokiss = [
            "https://tenor.com/view/naruto-kakashi-thienniensat-gif-8475779",
            "https://tenor.com/view/naruto-kakashi-thienniensat-gif-8475779"
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
                        description: `${message.author} Deu uma dedada em ${user} :point_right: `,
                        image: {
                            url: brokiss[Math.floor(Math.random() * brokiss.length)]
                        },
                        color: colors[Math.floor(Math.random() * colors.length)]
    
    
    
                
                    }})
}
}