require('dotenv').config()
const Disco = require("discord.js");
const cmd_hndler = require("./cmd_handler.js")
const bot = new Disco.Client();
bot.commands = new Disco.Collection();
const TOKEN = process.env.TOKEN

bot.login(TOKEN)

/* bot.on('voiceStateUpdate', (newState, oldState) => {
    let oldUserChannel = oldState.voiceChannel
    let newUserChannel = newState.voiceChannel
    console.log(oldState.id)
    // console.log(newState);

    if (oldState.guild.Mute != false)
        var voiceChannel = newState.id.voice.channel;
    voiceChannel.join().then(connection => {
        const dispatcher = connection.play('./media/dbz_it.mp3');
        dispatcher.on("finish", end => {
            voiceChannel.leave();
        });
    }).catch(err => console.log(err));

    // User Joins a voice channel

}) */

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
    const args = msg.content.split(/ +/);
    const command = args.shift().toLowerCase();
    if (!bot.commands.has(command)) return;
    try {
        bot.commands.get(command).execute(msg, args);
    } catch (err) {
        console.error(err)
        msg.reply('Something went wrong.')
    }
})

Object.keys(cmd_hndler).map(key => {
    bot.commands.set(cmd_hndler[key].name, cmd_hndler[key])
})
