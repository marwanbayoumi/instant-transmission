const sfx = require('./sfx.js')

function dispatcher(voiceChannel, sound) {
    voiceChannel.join().then(connection => {
        const dispatcher = connection.play(sound);
        dispatcher.on("finish", end => {
            voiceChannel.leave();
        });
    }).catch(err => console.log(err));
}

module.exports = {
    general: {
        name: '!gohan',
        execute(msg, args) {
            var voiceChannel = msg.member.voice.channel;
            if (voiceChannel && args ==='') {
                dispatcher(voiceChannel, sfx.dbz_it)
            }
            else if (voiceChannel && args.includes('p')) {
                dispatcher(voiceChannel, sfx.dbz_bp)
            } else {
                msg.reply('You need to be in a voice channel.')
            }
        }
    }
}