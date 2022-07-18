class MediaPlayer {
    constructor(player) {
        this.video = player.video;
    }
    play() {
        this.video.play();
    }
    pause() {
        this.video.pause();
    }
    togglePlay(){
        if(this.video.paused){
            this.video.play()
        }else{
            this.video.pause()
        }
    }
}
export default MediaPlayer;