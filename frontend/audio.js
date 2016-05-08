/**
 * Created by fs on 04.05.16.
 */
AudioPlayer = function() {
    var audio;

    return {
        init: function() {
            audio = new Audio('track.mp3');
            audio.play();
        }
    }
}();