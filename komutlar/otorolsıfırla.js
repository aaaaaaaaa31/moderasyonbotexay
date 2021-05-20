const discord = require('discord.js');
const { Database } = require('nukleon');
const db = new Database("plasmic.json");
exports.run = async(client, message, args) => {
db.remove(`otorolrol_${message.guild.id}`)
db.remove(`otorollog_${message.guild.id}`)
return message.channel.send('Otorol sistemi başarı ile sıfırlandı!')
}
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    permLevel: 0, 
    aliases: []
    };
    exports.help = {
    name: "otorol-sıfırla"
    };