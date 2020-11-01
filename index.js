const Discord = require("discord.js"); // carrega a API do discord
const client = new Discord.Client(); // carrega a API do client do discord
const { MessageEmbed } = require('discord.js');
const { Permissions } = require('discord.js');
const flags = [
    'MANAGE_CHANNELS',
    'EMBED_LINKS',
    'ATTACH_FILES',
    'READ_MESSAGE_HISTORY',
    'MANAGE_ROLES',
    'SEND_MESSAGES',
    'CONNECT',
    'VIEW_AUDIT_LOG',
    'ADMINISTRATOR',
    'MANAGE_ROLES',
    'MANAGE_NICKNAMES',
    'CHANGE_NICKNAME',
    'MUTE_MEMBERS',
];
const permissions = new Permissions(flags); // Cria a constante permissions e carrega a API de permissções do discord
const guild = new Discord.Guild(client, data); // Cria a constante guild e carrega a API de guildManagment do discord
var today = new Date(); // Variavel de data.
var data = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear() + '  ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
const pm = require("pm2");
const config = require("./config.json"); // carrega o token e o prefix do bot pelo config.json
const fs = require('fs'); // Carrega o recurso FS
const { match } = require("assert"); // recurso necessário para o Date()
var nopermstring = "Sem permissão.";
const ownerid = "297905031171145751"; //Yuri ID
const coownerid = "659465519178711068"; // Cliente ID


    ///////////////////////////////////////////////////////////////////
    //                      BOT STARTUP MESSAGE
    ///////////////////////////////////////////////////////////////////


    //#region | Startup Bot

    client.commands = new Discord.Collection();

    const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
    for(const file of commandFiles) {
        const command = require(`./commands/${file}`);
        client.commands.set(command.name, command)
    }


//Ao ligar:
client.on("ready", () => { //StartUP
    client.user.setActivity(`🙂| O gadometro esta louco por aqui`);
    client.channels.cache.get(config.logchannelid).send(`\n INICIANDO BOT (-\-)   [ ${data} ] \n`);
    console.log("Ativado")
    //client.channels.cache.get("761353336925454338").send("Bot atualizado com sucesso para a versão 2.0.2");
});


//Inicio do message listener
client.on("message", async message => {  //Abrindo sistema de comando
if (message.author.bot) return; //Ignora BOTS
if (message.channel.type === "dm") return; //Ignora DM
const args = message.content.slice(config.prefix.length).trim().split(/ +/); // prefix
const comando = args.shift().toLowerCase(); //preparação para os comandos


    ///////////////////////////////////////////////////////////////////
    //                        COMMAND LISTENER
    ///////////////////////////////////////////////////////////////////

    if (message.content.startsWith(config.prefix)) {

    if(comando === "ping") {
        client.commands.get('ping').execute(message, args);
        client.channels.cache.get(config.logchannelid).send(`o usuario ${message.author} usou o comando ${comando} no ${message.channel}`);
    }


    if(comando === "setstat") {
        if(message.author.id == `${ownerid}`) {
            message.delete().catch();
            let stat = args.join(" ");
            client.user.setActivity(`🙂| ${stat}`);
            message.reply(" Status setado para" + `${stat}`);
        client.channels.cache.get(config.logchannelid).send(`o usuario ${message.author} usou o comando ${comando} no ${message.channel}`);
        } else {
            message.delete();
            message.reply(' Sem permissão.');
            client.channels.cache.get(config.logchannelid).send(`O User ${message.author} tentou utilizar o ${comando} na data: ${data}`);
        }
    }

    if (comando === "comandos") {
        message.delete();
        const m = message.reply(" Comandos: playalert, among, telefonesemfioalert, ping, invite, svmanu, garticalert, changelog \n Prefix: >");
        client.channels.cache.get(config.logchannelid).send(`o usuario ${message.author} usou o comando ${comando} no ${message.channel}`);
    }

    if (comando === "say") {
        client.commands.get('say').execute(message, args);
        if (message.member.hasPermission('MANAGE_MESSAGES')) {
            client.channels.cache.get(config.logchannelid).send(`o usuario ${message.author} usou o comando ${comando} no ${message.channel}`);
        } else {
            client.channels.cache.get(config.logchannelid).send(`o usuario ${message.author} usou o comando de say com a seguinte frase \n"`+botmessage)+`"`;
        }
    }
   
    if (comando === "playalert") {
        if (message.member.hasPermission('MANAGE_MESSAGES')) {
            client.commands.get('playalert').execute(message, args);
            client.channels.cache.get(config.logchannelid).send(`o usuario ${message.author} usou o comando ${comando} no ${message.channel}`);
        } else {
            message.reply(" Sem permissão.");
            client.channels.cache.get(config.logchannelid).send(`O User ${message.author} tentou utilizar o ${comando} na data: ${data}`);
        }
    }

    if (comando === "among") {
            client.commands.get('among').execute(message, args);
            client.channels.cache.get(config.logchannelid).send(`o usuario ${message.author} usou o comando ${comando} no ${message.channel}`);
        }

    if (comando === "invite") {
        client.commands.get('invite').execute(message, args);
        client.channels.cache.get(config.logchannelid).send(`o usuario ${message.author} usou o comando ${comando} no ${message.channel}`);
    }

    if (comando === "mandamentos") {
        message.delete().catch();
        const m = message.channel.send(`\n**14 de junho - dia santo** os 10 desmandamentos mandados** \nAdorais a Mochi \nNão falar o santo nome de Mochi em vão \ntodos adeptos são iguais perante a Mochi \nEu sou tua senhora mochi, não terá outras egirls além de mim \nBeberás vinho toda a noite`);
        client.channels.cache.get(config.logchannelid).send(`o usuario ${message.author} usou o comando ${comando} no ${message.channel}`);
    }

    if (comando === "telefonesemfioalert") {
        client.commands.get('telefonesemfioalert').execute(message, args);
        client.channels.cache.get(config.logchannelid).send(`o usuario ${message.author} usou o comando ${comando} no ${message.channel}`);
    }

    if (comando === "garticalert") {
        client.commands.get('garticalert').execute(message, args);
        client.channels.cache.get(config.logchannelid).send(`o usuario ${message.author} usou o comando ${comando} no ${message.channel}`);
    }

    if (comando === "esay") {
        if (message.member.hasPermission('MANAGE_MESSAGES')) {
        client.commands.get('esay').execute(message, args);
        client.channels.cache.get(config.logchannelid).send(`o usuario ${message.author} usou o comando ${comando} no ${message.channel}`);
        } else {
            message.delete();
            message.reply(" Sem permissão.");
            client.channels.cache.get(config.logchannelid).send(`O User ${message.author} tentou utilizar o ${comando} na data: ${data}`);
        }
    }

    if(comando === "restart") {
        if(message.author.id == `${ownerid}` || message.author.id == `${coownerid}`) {
            client.commands.get('restart').execute(message, args);
       } else {
           message.delete();
           message.reply(" Choquin no dedo uiuiui, Doeu é? vai chola? você não tem permissão para isso, boboquinha.");
       }
    }

    if(comando === "stop") {
        if(message.author.id == `${ownerid}` || message.author.id == `${coownerid}`) {
            client.commands.get('stop').execute(message, args);
       } else {
           message.delete();
           message.reply(" Choquin no dedo uiuiui, Doeu é? vai chola? você não tem permissão para isso, boboquinha.");
       }
    }

    if (comando === "changelog") {
        client.commands.get('changelog').execute(message, args);
        client.channels.cache.get(config.logchannelid).send(`o usuario ${message.author} usou o comando ${comando} no ${message.channel}`);
    }

    if(comando === "ban") {
        if (message.member.hasPermission('BAN_MEMBERS')) {
            client.commands.get('ban').execute(message, args);
            client.channels.cache.get(config.logchannelid).send(`o usuario ${message.author} usou o comando ${comando} no ${message.channel}`);
        } else {
            message.reply(" Sem permissão");
        }
    }

    if(comando === "kick") {
        if (message.member.hasPermission('KICK_MEMBERS')) {
            client.commands.get('kick').execute(message, args);
       } else {
           message.reply(" Sem permissão")
       }
    }



    ///////////////////////////////////////////////////////////////////
    //                      FINALIZANDO COMANDOS
    ///////////////////////////////////////////////////////////////////

}
});
    

    ///////////////////////////////////////////////////////////////////
    //                      KEYS DO BOT SECRET
    ///////////////////////////////////////////////////////////////////


client.login(config.token);






    ///////////////////////////////////////////////////////////////////
    //                          NOTE BLOCK 
    ///////////////////////////////////////////////////////////////////


/*


///////////////////////////////////////////////////////////////


INFORMAÇÕES DO BOT
Startup Version: 2.0
Bot By: YuriXbrDEV
Update Date: 29/10/2020


///////////////////////////////////////////////////////////////


*/