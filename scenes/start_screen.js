

Crafty.defineScene("Start", function() {

    //background
    var gameStartBackground = Crafty.e("StartBackground");

    //buttons
    var playGameButton = Crafty.e("2D, DOM, Image, Mouse, play_button")
        .attr({x: PLAY_BUTTON_XPOS, y: PLAY_BUTTON_YPOS, w: PLAY_BUTTON_WIDTH, h: PLAY_BUTTON_HEIGHT})
        .bind('Click', function(MouseEvent) {
            if (Crafty.audio.isPlaying("bgAudio") == false && audioController.muted == false) {
                audioController.playTrack("bgAudio", -1, 0.25);
            } 
            Crafty.scene('Game'); 
        })
        .bind('MouseOver', function(e) {
            this.removeComponent("play_button").attr({x: PLAY_BUTTON_XPOS, y: PLAY_BUTTON_YPOS, w: PLAY_BUTTON_WIDTH, h: PLAY_BUTTON_HEIGHT})
            this.addComponent("play_mouse").attr({x: PLAY_BUTTON_XPOS, y: PLAY_BUTTON_YPOS, w: PLAY_BUTTON_WIDTH, h: PLAY_BUTTON_HEIGHT})   
        })
        .bind('MouseOut', function(e) {
            this.addComponent("play_button").attr({x: PLAY_BUTTON_XPOS, y: PLAY_BUTTON_YPOS, w: PLAY_BUTTON_WIDTH, h: PLAY_BUTTON_HEIGHT})               
            this.removeComponent("play_mouse").attr({x: PLAY_BUTTON_XPOS, y: PLAY_BUTTON_YPOS, w: PLAY_BUTTON_WIDTH, h: PLAY_BUTTON_HEIGHT})               
         });

    Crafty.e("MusicIcon")
        .attr({x: MUSIC_BUTTON_XPOS, y: MUSIC_BUTTON_YPOS, w: MUSIC_BUTTON_WIDTH, h: MUSIC_BUTTON_HEIGHT})
        .fixedPosition(MUSIC_BUTTON_XPOS, MUSIC_BUTTON_YPOS)
        .initClick(MUSIC_BUTTON_XPOS, MUSIC_BUTTON_YPOS, MUSIC_BUTTON_WIDTH, MUSIC_BUTTON_HEIGHT)

    //texts
    var title = Crafty.e("2D, DOM, GameTitle")
        .text("Ludum dare 48")
        .attr({x: GAME_SCREEN_WIDTH/2-80, y: 80});

    var title = Crafty.e("CreditsText")
        .text("Game Art by ")
        .attr({x: 50, y: GAME_SCREEN_HEIGHT-37});

    var title = Crafty.e("CreditsText")
        .text("Game Dev by ")
        .attr({x: 350, y: GAME_SCREEN_HEIGHT-37});

    var title = Crafty.e("CreditsText")
        .text("Game Dev by ")
        .attr({x: 650, y: GAME_SCREEN_HEIGHT-37});
});
