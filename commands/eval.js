module.exports = {
    name: "eval",
    description: "Mostra  o avatar de algum usuario",

    execute (client, message, args) {
		const Discord = require('discord.js');
		const fs = require('fs');
		const config = require("../config.json"); // carrega o token e o prefix do bot pelo config.json
        function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }
  // Here you need your ID so only you can use eval 
        if(message.author.id !== "297905031171145751") return;
        try {
          const code = args.join(" ");
          let evaled = eval(code);
    
          if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
    
          client.channels.cache.get(config.evallog).send(`evaled: \n` + clean(evaled), {code:"xl"});
		  client.channels.cache.get(config.evallog).send(`codigo executado: ${code}`);
        } catch (err) {
          message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        }
}
}