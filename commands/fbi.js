const Discord = require('discord.js');
const client = new Discord.Client(); // carrega a API do client do discord
module.exports = {
    name: "fbi",
    description: "Mostra  o avatar de algum usuario",

    async execute (client, message, args) {
        var brokiss = [
            "https://media.giphy.com/media/gW7XhsJuzIgH6/giphy.gif",
            "https://tenor.com/view/dont-lewd-the-loli-sit-here-here-anime-cute-gif-13704173"    
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
                        description: `${message.author} Chamou o ${user} para entrar no carro do FBI`,
                        image: {
                            url: brokiss[Math.floor(Math.random() * brokiss.length)]
                        },
                        color: colors[Math.floor(Math.random() * colors.length)]
    
    
    
                
                    }})
}
}