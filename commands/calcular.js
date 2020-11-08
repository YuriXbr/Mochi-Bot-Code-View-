const math = require('mathjs');

const Discord = require('discord.js');

module.exports = {
    name: "calcular",
    description: "Get the answer to a math problem",


    async execute (message, args){

        if(!args[0]) return message.channel.send('Me de uma questão');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('Por favor me de uma questão **valida**')
        }

        const embed = new Discord.MessageEmbed()
        .setColor(0x808080)
        .setTitle('Calculatdora')
        .addField('Questão', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Resposta', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed);

    }
}