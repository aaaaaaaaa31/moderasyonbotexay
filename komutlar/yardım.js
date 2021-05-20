const discord = require('discord.js');
const { Database } = require('nukleon');
const db = new Database("plasmic.json");
exports.run = async(client, message, args) => {
const embed = new discord.MessageEmbed()
.setTitle(':book:  Moderasyon  :book:')
.setDescription(`:tools:  !ban = Etiketlenen kişiyi banlar. \n \n :tools:  !kick = Etiketlenen kişiyi kickler. \n \n :tools:  !mute-ayarla rol = Mute rol ayarlarsınız. \n \n :tools:  !mute-ayarla yetkili-rol = Mute yetkili rol ayarlarsınız. \n \n :tools:  !mute-ayarla log = Mute log ayarlarsınız. \n \n :tools:  !mute = Mute atarsınız. \n \n :tools:  !tempmute = Süreli mute atarsınız. \n \n :tools:  !unmute = Kişiye mute atılmışsa kaldırırsınız. \n \n :tools:  !otorol-ayarla log = Otorol log ayarlarsınız. \n \n :tools:  !otorol-ayarla rol = Otorol rolü ayarlarsınız. \n \n :tools:  !otorol-sıfırla = otorolü sıfırlarsınız. \n \n `)
return message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel:0,
    aliases: []
    }
    exports.help = {
    name: "yardım"
    }