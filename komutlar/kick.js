const discord = require('discord.js');
const { Database } = require('nukleon');
const db = new Database("plasmic.json");
exports.run = async(client, message, args) => {
let engin = message.mentions.users.first()
const embed = new discord.MessageEmbed()
.setTitle('HATA')
.setDescription('Lütfen atılacak kişiyi etiketleyin!')
if(!engin) return message.channel.send(embed)
let sebep = args.slice(1).join(' ')
const embedd = new discord.MessageEmbed()
.setTitle('HATA')
.setDescription('Lütfen lütfen atılma sebebini girin!')
if(!sebep) return message.channel.send(embedd)
client.guilds.cache.get(message.guild.id).members.cache.get(engin.id).kick({reason: sebep}).catch(err => {
    message.channel.send('Bir hata oluştu.');
})
const embeddd = new discord.MessageEmbed()
.setTitle(engin.username + " adlı kişi atıldı")
.setDescription(`<@${engin.id}> adlı kişi ${sebep} sebebi ile <@${message.author.id}> tarafından atıldı!`)
return message.channel.send(embeddd)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel:0,
    aliases: []
    }
    exports.help = {
    name: "kick"
    }