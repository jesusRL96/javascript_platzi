import MediaPlayer from '../../MediaPlayer'
import Ads, {Ad} from './Ads';

class AdsPlugin {
    private ads: Ads;
    private player;
    private media: HTMLMediaElement;
    private currentAd: Ad;

    constructor() {
        this.ads = Ads.getInstance();
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    }

    run(player: MediaPlayer): void {
        this.player = player;
        this.media = this.player.media;
        this.media.addEventListener('timeupdate', this.handleTimeUpdate);
    }

    private handleTimeUpdate() {
        const currentTime = Math.floor(this.media.currentTime);
        if (currentTime % 30 === 0) {
            this.renderAd();
        }
    }

    private renderAd() {
        if (this.currentAd){
            return;
        }
        const ad = this.ads.getAd();
        this.currentAd = ad;
        console.log(this.currentAd);
        setTimeout(()=>{
            this.currentAd = null
        }, 500);
    }
}

export default AdsPlugin;