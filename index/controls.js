function song() {
    if (XMPlayer.playing) {
        XMPlayer.pause()
    } else {
        XMPlayer.play()
    }
}