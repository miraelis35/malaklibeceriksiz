const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('GOLD')
    .setAuthor(`ArveLoS | Eğlence Komutları`, client.user.avatarURL) 
      .setDescription('**[Website](https://glitch.com/edit/#!/ertac-34)**')
.setThumbnail(client.user.avatarURL)
      .addField('**Komutlar:**')  ( `aşkölçer`, `avatar`, `balıktut`, `cowsay`, `emojiler`, `espri`, `fbi`, `googledeara`, `youtubedeara`, `havadurumu`, `hesapla`, `ilgincbilgi`, `korkut`, `sorusor`, `söv`, `çeviri`, true)
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yardım'],
    permLevel: 0
};

exports.help = {
    name: 'eğlence',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};