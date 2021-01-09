module.exports = {
    general: {
        name: '!gohan',
        execute(msg, args) {
            var voiceChannel = msg.member.voice.channel;
            if (voiceChannel) {
                voiceChannel.join().then(connection => {
                    const dispatcher = connection.play('./media/dbz_it.mp3');
                    dispatcher.on("finish", end => {
                        voiceChannel.leave();
                    });
                }).catch(err => console.log(err));
            }
        }
    },
    about: {
        execute(msg, args) {
            name: '!about',
                msg.reply('States if eatura is ready for Omar');
        },
    }
}
// https://www.myinstants.com/instant/bright-punch-dragon-ball-z/