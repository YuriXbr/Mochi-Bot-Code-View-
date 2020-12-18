const Discord = require('discord.js');
const client = new Discord.Client(); // carrega a API do client do discord
module.exports = {
    name: "soco",
    description: "Mostra  o avatar de algum usuario",

    async execute (client, message, args) {
        var brokiss = [
            "https://tenor.com/view/toradora-punch-gif-10769541",
            "https://tenor.com/view/hunter-x-hunter-bisky-punch-anime-fly-gif-17696890",
            "https://tenor.com/view/rin243109-blue-exorcist-anime-punch-gif-13785833",
            "https://tenor.com/view/tgggg-anime-punch-gif-13142581",
            "https://tenor.com/view/bear-fight-hit-teddy-bear-kids-gif-12373244",    
            "https://tenor.com/view/one-punch-man-saitama-anime-punch-gif-17053376",
            "https://tenor.com/view/anime-punch-gif-7679409"
    ];
    var mochi = [
        "https://tenor.com/view/anime-umaru-jump-attack-destroy-gif-5240293",
        "https://tenor.com/view/anime-punching-gif-10194781"  
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
                        description: `${message.author} DEU UM SOCÃO EM ${user}`,
                        image: {
                            url: mochi[Math.floor(Math.random() * mochi.length)]
                        },
                        color: colors[Math.floor(Math.random() * colors.length)]
                    }})
                } else {
                    message.channel.send({embed:{
                        description: `${message.author} DEU UM SOCÃO EM ${user}`,
                        image: {
                            url: brokiss[Math.floor(Math.random() * brokiss.length)]
                        },
                        color: colors[Math.floor(Math.random() * colors.length)]
                    }})
                }
}
}