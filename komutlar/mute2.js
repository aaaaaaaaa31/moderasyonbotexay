const discord = require('discord.js')
const { Database } = require('nukleon');
const db = new Database("plasmic.json");
exports.run = async(client, message,args) => {
    var kontrol = message.guild.roles.cache.get(db.fetch(`muteyetkili_${message.guild.id}`))
if(!kontrol) return message.channel.send('Mute yetkilisi değilsin :d')
    let log = db.fetch(`mutelog_${message.guild.id}`)
    let muterol = db.fetch(`muterol_${message.guild.id}`)
let enginar = message.mentions.users.first()
if(!enginar) return message.channel.send('Lütfen mute atılacak kişiyi etiketleyin')
let sebep = args.slice(1).join(' ')
    const embed = new discord.MessageEmbed()
    .setTitle('Yeni bir mute işlemi!')
    .setDescription(`<@${message.author.id}> adlı kişi <@${enginar.id}> adlı kişiyi muteledi! \n \n Sebep: ${sebep} \n \n Süre: sınırsız!`)
client.channels.cache.get(log).send(embed)
    message.guild.members.cache.get(enginar.id).roles.add(muterol)
    return message.channel.send('Kişi başarı ile mutelendi!')
}
exports.conf = {
enabled: true, 
guildOnly: false, 
permLevel: 0, 
aliases: []
};
exports.help = {
name: "mute"
};