const randomPuppy = require('random-puppy');
const Discord = require('discord.js');

module.exports = {
    name: "meme",
    description: "te da um meme",
    async execute (message, args) { 
        const subReddits = ["circojeca", "brasil", "DiretoDoZapZap", "Capyvara", "ithadtobeinbrazil", "MemesBrasil", "dankmemes", "nextfuckinglevel", "memes", "MinecraftMemes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]
  
        const img = await randomPuppy(random);
  
        const memeEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`Meme do subreddit r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)
  
        message.channel.send(memeEmbed);
    }
}