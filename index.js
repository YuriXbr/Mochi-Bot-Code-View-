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
const guild = new Discord.Guild(client); // Cria a constante guild e carrega a API de guildManagment do discord
var today = new Date(); // Variavel de data.
const data = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear() + '  ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
const pm = require("pm2");
const config = require("./config.json");
const fs = require('fs'); // Carrega o recurso FS
const { match } = require("assert"); // recurso necessário para o Date()
const { boolean } = require("mathjs");
const mysql = require('mysql2/promise');
const ownerid = "297905031171145751"; //Yuri ID
const coownerid = "659465519178711068"; // Cliente ID
vtrue = true;
vfalse = false;
let comandotoggle = vtrue;
let logtoggle = vtrue;
//Identidade
global.botname = "hawk";
///////////////////////////////////////////////////////////////////
//                      BOT STARTUP MESSAGE
///////////////////////////////////////////////////////////////////


//#region | Startup Bot
const db = require('./database/db');
const Connection = require('mysql2/promise');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command)
}

//Se achar erro mostra no console
client.on("error", console.error);

//Ao ligar:
client.on("ready", () => { //StartUP
    client.user.setActivity(`🙂| Bot ATIVO`);
    const embedstart = new Discord.MessageEmbed().setTitle(` ✅  **BOT INICIANDO** - ${data}`).setColor('#ff0000').setDescription(`APIVersion: ${Discord.version} Status: Online \n Sistemas: ativados Logs: ${logtoggle} \n **BANCO DE DADOS:** ${global.connectionstate}`);
    client.channels.cache.get(config.logchannelid).send(embedstart);
    console.log("[BOTSYSTEM] : Iniciando");
});

//Inicio do message listener
client.on("message", async message => { //Abrindo sistema de comando
    if (message.author.bot) return; //Ignora BOTS
    if (message.channel.type === "dm") return; //Ignora DM
    const args = message.content.slice(config.prefix.length).trim().split(/ +/); // prefix
    global.comando = args.shift().toLowerCase(); //preparação para os comandos
    let botmessage = args.join(" ");

//#region Trava mamaco
    if (message.content.startsWith("**🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈**")) {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        message.delete().catch();
        console.log("Trava bloqueada");
        client.channels.cache.get(config.logchannelid).send("Bloqueando trava no canal" + `${message.channel} do ${message.author}`);
        await member.ban({ days: 7, reason: `👮‍♂️ Staff: ${message.author.tag}   |   💀 motivo: Trava discord` })
            .catch(err => { if (err) return message.channel.send('Algo deu errado') }) }
//#endregion


//#region Embeds
    const embedlog = {
        "embed": {
            "color": 6675581,
            "title": "[LOG] - Registro de comando executado",
            "description": `o usuário ${message.author} executou comando ${comando} no ${message.channel}\n`,
            "footer": {
                "text": `${botname} Log - ${data}`
            }
        }
    }
    const embedlogtry = {
        "embed": {
            "color": 15690603,
            "title": "[LOG] - Registro de Tentativa de execução de comando",
            "description": `o usuário ${message.author} tentou executar comando ${comando} no ${message.channel}, porem não tinha a permissão necessária`,
            "footer": {
                "text": `${botname} Log - ${data}`
            }
        }
    }
    const embedlogownercommand = {
        "embed": {
            "color": 15962180,
            "title": "[LOG] - Registro de Execução de comando Administrativo",
            "description": `o Administrador ${message.author} Executou o comando ${comando} no canal ${message.channel}`,
            "footer": {
                "text": `${botname} Log - ${data}`
            }
        }
    }
    const embedsayadm = {
        "embed": {
            "color": 6675581,
            "title": "[LOG] - Registro de comando executado",
            "description": `o usuário ${message.author} executou comando ${comando} no ${message.channel} (administrador)`,
            "footer": {
                "text": `${botname} Log - ${data}`
            }
        }
    }
    const embedsaynormal = {
        "embed": {
            "color": 16776084,
            "title": "[LOG] - Registro de comando executado",
            "description": `o usuário ${message.author} executou comando ${comando} no ${message.channel} (user) \nMensagem: ${botmessage}`,
            "footer": {
                "text": `${botname} Log - ${data}`
            }
        }
    }
//#endregion

    ///////////////////////////////////////////////////////////////////
    //                        COMMAND LISTENER
    ///////////////////////////////////////////////////////////////////
    if (message.content.startsWith(config.prefix)) {

//#region Comandos Owner

        if (comando === "logtoggle") {
            message.delete();
            if (message.author.id == `${ownerid}` || message.author.id == `${coownerid}`) {
                if (logtoggle === vtrue) {
                    logtoggle = vfalse;
                    console.log(logtoggle)
                    message.reply(` Logs desabilitados`);
                } else if (logtoggle === vfalse) {
                    logtoggle = vtrue;
                    message.reply(` Logs habilitados`);
                }
            }
        }


        if (comando === "eval") {
            if (message.author.id == `${ownerid}` || message.author.id == `${coownerid}`) {
                message.delete().catch();
                client.commands.get('eval').execute(client, message, args);
                if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlog);
            } else {
                if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlogtry);
                message.reply('nem tenta...');
            }
        }

        if (comando === "cmd") {
            message.delete();
            if (message.author.id == `${ownerid}` || message.author.id == `${coownerid}`) {
                if (comandotoggle === vtrue) {
                    comandotoggle = vfalse;
                    console.log(comandotoggle)
                    message.reply(` Comandos desabilitados`);
                } else if (comandotoggle === vfalse) {
                    comandotoggle = vtrue;
                    message.reply(` Comandos habilitados`);
                }
            } else {
                if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlogtry);
                message.reply(' Nem tenta bonitão...');
            }
        }

        if (comando === "setstat") {
            if (message.author.id == `${ownerid}` || message.author.id == `${coownerid}`) {
                message.delete().catch();
                let stat = args.join(" ");
                client.user.setActivity(`🙂| ${stat}`);
                message.reply(" Status setado para" + `${stat}`);
                if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlogownercommand);
            } else {
                message.delete();
                message.reply(' Sem permissão.');
                if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlogtry);
            }
        }
        
        if (comando === "restart") {
            if (message.author.id == `${ownerid}` || message.author.id == `${coownerid}`) {
                if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlogownercommand);
                client.commands.get('restart').execute(message, args);
            } else {
                message.delete();
                message.reply(" Choquin no dedo uiuiui, Doeu é? vai chola? você não tem permissão para isso, boboquinha.");
            }
        }

        if (comando === "stop") {
            if (message.author.id == `${ownerid}` || message.author.id == `${coownerid}`) {
                if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlogownercommand);
                client.commands.get('stop').execute(message, args);
            } else {
                message.delete();
                message.reply(" Choquin no dedo uiuiui, Doeu é? vai chola? você não tem permissão para isso, boboquinha.");
            }
        }
//#endregion

if (comandotoggle == true) {

//#region Utilidades

            if (comando === "ping") {
                message.delete().catch();
                client.commands.get('ping').execute(message, args,);
                if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlog);
            }

            if (comando === "help") {
                message.delete().catch();
                client.commands.get('help').execute(message, args);
                if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlog);
            }

            if (comando === "say") {
                message.delete().catch();
                const m = message.channel.send(botmessage);
                if (message.member.hasPermission('MANAGE_MESSAGES')) {
                    if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedsayadm);
                } else {
                    if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedsaynormal);
                }
            }

            if (comando === "invite") {
                client.commands.get('invite').execute(message, args);
                if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlog);
            }

            if (comando === "changelog") {
                message.delete();
                client.commands.get('changelog').execute(message, args);
                if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlog);
            }

            if (comando === "calcular") {
                message.delete();
                client.commands.get('calcular').execute(message, args);
                if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlog);
            }

            if (comando === "avatar") {
                message.delete();
                client.commands.get('avatar').execute(message, args);
                if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlog);
            }

            if (comando === "clima") {
                message.delete();
                client.commands.get('clima').execute(message, args);
                if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlog);
            }

            if (comando === "ascii") {
                message.delete();
                client.commands.get('ascii').execute(message, args);
                if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlog);
            }

//#endregion


//#region Diversão

            if (comando === "meme") {
                message.delete();
                client.commands.get('meme').execute(message, args);
                if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlog);
            }

            if (comando === "kiss" || comando === "beijar" || comando === "beijo" || comando === "beijando") {
                message.delete().catch();
                client.commands.get('kiss').execute(client, message, args);
                if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlog);
            }

            if (comando === "chorar" || comando === "cry" || comando === "chorando") {
                message.delete().catch();
                client.commands.get('chorar').execute(client, message, args);
                if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlog);
            }

            if (comando === "fbi" || comando === "loli" || comando === "lolicon" || comando === "lollicon") {
                message.delete().catch();
                client.commands.get('fbi').execute(client, message, args);
                if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlog);
            }
            if (comando === "soco" || comando === "socar" || comando === "punch" || comando === "socao") {
                message.delete().catch();
                client.commands.get('soco').execute(client, message, args);
                if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlog);
            }

            if (comando === "dedada" || comando === "dedar" || comando === "dedadanocu" || comando === "dedando") {
                message.delete().catch();
                client.commands.get('dedada').execute(client, message, args);
                if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlog);
            }

//#endregion


//#region Moderação

            if (comando === "ban") {
                if (message.member.hasPermission('BAN_MEMBERS')) {
                    client.commands.get('ban').execute(message, args);
                    if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlog);
                } else {
                    message.reply(" Sem permissão");
                    if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlogtry);
                }
            }

            if (comando === "kick") {
                if (message.member.hasPermission('KICK_MEMBERS')) {
                    client.commands.get('kick').execute(message, args);
                    if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlog);
                } else {
                    message.reply(" Sem permissão");
                    if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlogtry);
                }
            }

            if (comando === "clear") {
                if (message.member.hasPermission('MANAGE_MESSAGES')) {
                    const amount = args.join(" ");
                    if (!amount) return message.reply('Envie ao menos 1 mensagem para deletar')
                    if (amount > 100) return message.reply(`Não posso deletar mais de 100 mensagens`)
                    if (amount < 1) return message.reply(`Preciso de no minimo 1 mensagem para deletar`)
                    await message.channel.messages.fetch({ limit: amount }).then(messages => { message.channel.bulkDelete(messages) });
                    message.channel.send('Concluido')
                    if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlog);
                } else {
                    message.reply(" Sem permissão");
                    if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlogtry);
                }
            }

            if (comando === "esay") {
                if (message.member.hasPermission('MANAGE_MESSAGES')) {
                    client.commands.get('esay').execute(message, args);
                    if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlog);
                } else {
                    message.delete();
                    message.reply(" Sem permissão.");
                    if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlogtry);
                }
            }

//#endregion
            

//#region Alertas

            if (comando === "playalert") {
                if (message.member.hasPermission('MANAGE_MESSAGES')) {
                    client.commands.get('playalert').execute(message, args);
                    if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlog);
                } else {
                    message.reply(" Sem permissão.");
                    if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlogtry);
                }
            }

            if (comando === "amongalert") {
                client.commands.get('among').execute(message, args);
                if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlog);
            }


            if (comando === "telefonesemfioalert") {
                client.commands.get('telefonesemfioalert').execute(message, args);
                if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlog);
            }

            if (comando === "garticalert") {
                client.commands.get('garticalert').execute(message, args);
                if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlog);
            }

//#endregion

// bagunça

if (comando === "advertencia") {
    //return;
    if (message.member.hasPermission('MANAGE_MESSAGES')) {
        let id = args[1];
        let advnum = args[2];
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!args[0]) return message.channel.send('Especifique um usuario');
        if(!args[1]) return message.channel.send('Especifique um ID');
        if(!args[2]) return message.channel.send('Diga o numero da Advertencia');
        if(!member) return message.channel.send('Não consegui achar este usuario');
        if(!member.bannable) return message.channel.send('Este usuario possui permissões maiores que a minha.');
        if(member.id === message.author.id) return message.channel.send('Bruh, Você não pode banir você mesmo');
        let reason = args.slice(3).join(" ");
        if(!reason) return message.channel.send('Coloque um motivo.');
        let sql = `UPDATE vrp advertencias SET advertencias='${advnum}' WHERE  id=${id}`;

        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log (result.affectedRows + `Adv aplicada com sucesso no ${id}`);
        })
        message.reply(`advertencia aplicada no id ${id}, advertencia numero ${advnum} aplicada no ${member} com o motivo ${reason}`)
        
    }
}






    ///////////////////////////////////////////////////////////////////
    //                      FINALIZANDO COMANDOS
    ///////////////////////////////////////////////////////////////////



    }/*comandtogggle*/ } /*prefix*/
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
Startup Version: 2.1.5
Bot By: YuriXbrDEV
Update Date: 29/10/2020


///////////////////////////////////////////////////////////////


*/