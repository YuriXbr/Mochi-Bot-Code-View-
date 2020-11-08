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
const { boolean } = require("mathjs");
var nopermstring = "Sem permissão.";
const ownerid = "297905031171145751"; //Yuri ID
const coownerid = "659465519178711068"; // Cliente ID
vtrue = true;
vfalse = false;
let comandotoggle = vtrue;
let logtoggle = vtrue;
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

//Se achar erro mostra no console
client.on("error", console.error);

//Ao ligar:
client.on("ready", () => { //StartUP
    client.user.setActivity(`🙂| O gadometro esta louco por aqui.`);
    client.channels.cache.get(config.logchannelid).send(`\n **BOT INICIANDO**   [ ${data} ] \n Versão: V2`);
    console.log("Ativado")
    //client.channels.cache.get("761353336925454338").send("Bot atualizado com sucesso para a versão 2.0.2");
});


//Inicio do message listener
client.on("message", async message => {  //Abrindo sistema de comando
if (message.author.bot) return; //Ignora BOTS
if (message.channel.type === "dm") return; //Ignora DM
const args = message.content.slice(config.prefix.length).trim().split(/ +/); // prefix
const comando = args.shift().toLowerCase(); //preparação para os comandos
let botmessage = args.join(" ");


    ///////////////////////////////////////////////////////////////////
    //                        COMMAND LISTENER
    ///////////////////////////////////////////////////////////////////

    if(message.content.startsWith("**🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈🙉🙊🐒🐵🙈**")) {
            message.delete().catch();
            console.log("Trava bloqueada");
            if(message.deleted)
            client.channels.cache.get(config.logchannelid).send("Bloqueando trava no canal"+`${message.channel}`);    
    }

    if (message.content.startsWith(config.prefix)) {

        if(comando === "logtoggle") {
            message.delete();
            if(message.author.id == `${ownerid}` || message.author.id == `${coownerid}`) {
                if(logtoggle === vtrue) {
                    logtoggle = vfalse;
                    console.log(logtoggle)
                message.reply(` Logs desabilitados`);
                } else if (logtoggle === vfalse) {
                    logtoggle = vtrue;
                    message.reply(` Logs habilitados`);
                }
                }
        }
        
        if(comando === "cmd") {
            message.delete();
            if(message.author.id == `${ownerid}` || message.author.id == `${coownerid}`) {
                if(comandotoggle === vtrue) {
                    comandotoggle = vfalse;
                    console.log(comandotoggle)
                message.reply(` Comandos desabilitados`);
                } else if (comandotoggle === vfalse) {
                    comandotoggle = vtrue;
                    message.reply(` Comandos habilitados`);
                }
            } else {
                message.reply(' Nem tenta bonitão...');
            }
        }

        
        if(comandotoggle == true) {
        const embedlog = {
            "embed": {
                "color": 6675581,
                "title": "[LOG] - Registro de comando executado",
                "description": `o usuário ${message.author} executou comando ${comando} no ${message.channel}\n`,
                "footer": {
                    "text": `Mochi-Bot Log - ${data}`
                }
            }
        }
        const embedlogtry = {
            "embed": {
                "color": 15690603,
                "title": "[LOG] - Registro de Tentativa de execução de comando",
                "description": `o usuário ${message.author} tentou executar comando ${comando} no ${message.channel}, porem não tinha a permissão necessária`,
                "footer": {
                    "text": `Mochi-Bot Log - ${data}`
                }
            }
        }
        const embedlogownercommand = {
            "embed": {
                "color": 15962180,
                "title": "[LOG] - Registro de Execução de comando BotAdmin",
                "description": `o Administrador ${message.author} Executou o comando ${comando} no canal ${message.channel}`,
                "footer": {
                    "text": `Mochi-Bot Log - ${data}`
                }
            }
        }
        const embedsayadm = {
            "embed": {
                "color": 6675581,
                "title": "[LOG] - Registro de comando executado",
                "description": `o usuário ${message.author} executou comando ${comando} no ${message.channel} (administrador)`,
                "footer": {
                    "text": `Mochi-Bot Log - ${data}`
                }
            }
        }
        const embedsaynormal = {
            "embed": {
                "color": 16776084,
                "title": "[LOG] - Registro de comando executado",
                "description": `o usuário ${message.author} executou comando ${comando} no ${message.channel} (user) \nMensagem: ${botmessage}`,
                "footer": {
                    "text": `Mochi-Bot Log - ${data}`
                }
            }
        }

    if(comando === "ping") {
        client.commands.get('ping').execute(message, args);
        if (logtoggle)client.channels.cache.get(config.logchannelid).send(embedlog);
    }


    if(comando === "setstat") {
        if(message.author.id == `${ownerid}` || message.author.id == `${coownerid}`) {
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

    if (comando === "help") {
        message.delete();
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
   
    if (comando === "playalert") {
        if (message.member.hasPermission('MANAGE_MESSAGES')) {
            client.commands.get('playalert').execute(message, args);
            if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlog);
        } else {
            message.reply(" Sem permissão.");
            if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlogtry);
        }
    }

    if (comando === "among") {
            client.commands.get('among').execute(message, args);
            if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlog);
        }

    if (comando === "invite") {
        client.commands.get('invite').execute(message, args);
        if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlog);
    }

    if (comando === "mandamentos") {
        message.delete().catch();
        const m = message.channel.send(`\n**14 de junho - dia santo** os 10 desmandamentos mandados** \nAdorais a Mochi \nNão falar o santo nome de Mochi em vão \ntodos adeptos são iguais perante a Mochi \nEu sou tua senhora mochi, não terá outras egirls além de mim \nBeberás vinho toda a noite`);
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

    if(comando === "restart") {
        if(message.author.id == `${ownerid}` || message.author.id == `${coownerid}`) {
            if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlogownercommand);
            client.commands.get('restart').execute(message, args);
       } else {
           message.delete();
           message.reply(" Choquin no dedo uiuiui, Doeu é? vai chola? você não tem permissão para isso, boboquinha.");
       }
    }

    if(comando === "stop") {
        if(message.author.id == `${ownerid}` || message.author.id == `${coownerid}`) {
            if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlogownercommand);
            client.commands.get('stop').execute(message, args);
       } else {
           message.delete();
           message.reply(" Choquin no dedo uiuiui, Doeu é? vai chola? você não tem permissão para isso, boboquinha.");
       }
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
    if (comando === "ascii") {
        message.delete();
        client.commands.get('ascii').execute(message, args);
        if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlog);
    }
    if (comando === "meme") {
        message.delete();
        client.commands.get('meme').execute(message, args);
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

    if(comando === "clear") {
        if (message.member.hasPermission('MANAGE_MESSAGES')) {
            const amount = args.join(" ");
             if(!amount) return message.reply('Envie ao menos 1 mensagem para deletar')
             if(amount > 100) return message.reply(`Não posso deletar mais de 100 mensagens`)
             if(amount < 1) return message.reply(`Preciso de no minimo 1 mensagem para deletar`)
            await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
            )});
            message.channel.send('Concluido')
            if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlog);
        } else {
            message.reply(" Sem permissão");
            if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlogtry);
        }
    }

    if(comando === "ban") {
        if (message.member.hasPermission('BAN_MEMBERS')) {
            client.commands.get('ban').execute(message, args);
            if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlog);
        } else {
            message.reply(" Sem permissão");
            if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlogtry);
        }
    }
    if(comando === "kick") {
        if (message.member.hasPermission('KICK_MEMBERS')) {
            client.commands.get('kick').execute(message, args);
            if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlog);
       } else {
           message.reply(" Sem permissão");
           if (logtoggle) client.channels.cache.get(config.logchannelid).send(embedlogtry);
       }
    }


    ///////////////////////////////////////////////////////////////////
    //                      FINALIZANDO COMANDOS
    ///////////////////////////////////////////////////////////////////

} 
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
Startup Version: 2.1.5
Bot By: YuriXbrDEV
Update Date: 29/10/2020


///////////////////////////////////////////////////////////////


*/