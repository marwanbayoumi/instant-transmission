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
            switch (voiceChannel != null && args != null) {
                case (args.length == 0):
                    dispatcher(voiceChannel, sfx.dbz_it)
                    break;
                case (args.includes('p')):
                    dispatcher(voiceChannel, sfx.dbz_bp)
                    break;
                case (args.includes('no')):
                    dispatcher(voiceChannel, sfx.oh_no)
                    break;
                case (args.includes('wow')):
                    dispatcher(voiceChannel, sfx.anime_wow)
                    break;
            }
        }
    }
}

