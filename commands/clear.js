const Discord = require('discord.js');

module.exports = {
    name: "clear",
    description: "Limpa mensagens",

    async execute (message, args) {
        const amount = args.join(" ");
        if(!amount) return message.reply('Envie ao menos 1 mensagem para deletar')
        if(amount > 100) return message.reply(`Não posso deletar mais de 100 mensagens`)
        if(amount < 1) return message.reply(`Preciso de no minimo 1 mensagem para deletar`)
        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
    )});
    message.channel.send('Concluido')

    }
}
