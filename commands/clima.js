const weather = require('weather-js');
const Discord = require('discord.js');

module.exports = {
    name: "clima",
    description: "Checks a weather forecast",

    async execute ( message, args){

    weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
        // 'C' can be changed to 'F' for farneheit results
        if(error) return message.channel.send(error);
        if(!args[0]) return message.channel.send('Especifique um local por favor.')

        if(result === undefined || result.length === 0) return message.channel.send('Localização **invalida**');

        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Clima de: ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(0x111111)
        .addField('Fuso Horario', `UTC${location.timezone}`, true)
        .addField('Temepratura em:', 'Graus célsius', true)
        .addField('Temperatura:', `${current.temperature}°`, true)
        .addField('vento:', current.winddisplay, true)
        .addField('Sensação de:', `${current.feelslike}°`, true)
        .addField('Humidade', `${current.humidity}%`, true)


        message.channel.send(weatherinfo)
        })        
    }
}