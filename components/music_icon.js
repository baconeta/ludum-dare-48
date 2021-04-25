Crafty.c("MusicIcon", {
    init: function(){
        this.addComponent('2D, Color, Mouse, DOM, HUD, music_on')
    },
    initClick: function(mx, my, mw, mh) {
        this.bind('Click', function(e){
            if (audioController.muted == false) {
                audioController.muted = true;
                audioController.pauseTrack("bgAudio", 0)
                this.addComponent("music_off").attr({x: mx, y: my, w: mw, h: mh})               
                this.removeComponent("music_on").attr({x: mx, y: my, w: mw, h: mh})               
            }
            else {
                audioController.muted = false;
                audioController.playTrack("bgAudio", -1, 0.25)
                this.addComponent("music_on").attr({x: mx, y: my, w: mw, h: mh})
                this.removeComponent("music_off").attr({x: mx, y: my, w: mw, h: mh})
            }
        });
    }
});
