const discord = require('discord.js');
const { Database } = require('nukleon');
const db = new Database("plasmic.json");
exports.run = async(client, message, args) => {
if(args[0] == "log") {
let engin = message.mentions.channels.first()
if(!engin) return message.channel.send('Lütfen otorol log kanalını belirtin!')
db.set(`otorollog_${message.guild.id}`, engin.id)
const embed = new discord.MessageEmbed()
.setTitle('BAŞARILI')
.setDescription(`Otorol log kanalı <#${engin.id}> olarak ayarlandı!`)
return message.channel.send(embed)
}
if(args[0] == "rol") {
let engin = message.mentions.roles.first()
if(!engin) return message.channel.send('Lütfen otorol rolünü belirtin!')
db.set(`otorolrol_${message.guild.id}`, engin.id)
const embed = new discord.MessageEmbed()
.setTitle('BAŞARILI')
.setDescription(`Otorol rolü <@&${engin.id}> olarak ayarlandı!`)
return message.channel.send(embed)
}
}
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    permLevel: 0, 
    aliases: []
    };
    exports.help = {
    name: "otorol-ayarla"
    };