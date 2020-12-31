require('dotenv').config()
const Disco = require("discord.js");
const bot = new Disco.Client();
const TOKEN = process.env.TOKEN

bot.login(TOKEN)

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

/* bot.on('voiceStateUpdate', (newState,oldState) => {
    let oldUserChannel = oldState.voiceChannel
    let newUserChannel = newState.voiceChannel
    console.log(oldState.id)
    // console.log(newState);

     if (oldState.guild.Mute !=false)
        var voiceChannel = newState.id.voice.channel;
        voiceChannel.join().then(connection => {
        const dispatcher = connection.play('./media/dbz_it.mp3');
        dispatcher.on("finish", end => {
            voiceChannel.leave();
        });
    }).catch(err => console.log(err)); 

    // User Joins a voice channel

}) */

bot.on('message', msg => {
    if (msg.content == '!Gohan') {
        var voiceChannel = msg.member.voice.channel;
        if (voiceChannel) {
            voiceChannel.join().then(connection => {
                const dispatcher = connection.play('./media/dbz_it.mp3');
                dispatcher.on("finish", end => {
                    voiceChannel.leave();
                });
            }).catch(err => console.log(err));
        }else{
            msg.reply('You need to be in a voice channel.')
        }
    }
})
