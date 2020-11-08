const figlet = require('figlet');
const Discord = require('discord.js');
const client = new Discord.Client(); // carrega a API do client do discord
module.exports = {
    name: "ascii",
    description: "Converte texto em ascii",

    async execute ( message, args){
        if(!args[0]) return message.channel.send('Por favor informe algum textp');

        msg = args.join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                console.log('Something went wrong');
                console.dir(err);
            }
            if(data.length > 2000) return message.channel.send('O texto deve ser menor que 2000 caracteres')

            message.channel.send('```' + data + '```')
        })
    }
}