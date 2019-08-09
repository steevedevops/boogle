<template>
  <div class="playercontent">
    <div class="content-cover">Cover</div>
    <div class="content-player-btn">
      <div class="progress-time">
        <span>=========================Steeve==========================</span>
      </div>
      <div class="content-btns">
        <div class="btn-backward">
          <a class="font-menor" @click="prevSong()" href="#"><i class="fas fa-step-backward"></i></a>
        </div>
        <div class="btn-play">
          <a href="#" class="tw-text-white tw-cursor-pointer" v-show="!isPlaying" w="30" h="30" @click="play()"><i class="fas fa-play"></i></a>
          <a href="#" class="tw-text-white tw-cursor-pointer" v-show="isPlaying" w="30" h="30" @click="play()"><i class="fas fa-pause"></i></a>
        </div>
        <div class="btn-forward">
          <a class="font-menor" href="#" @click="nextSong()"><i class="fas fa-step-forward"></i></a>
        </div>
      </div>
    </div>
    <div class="content-volume">volum</div>
  </div>
</template>

<script>
export default {
  name: "fixedbarplayer",
  data () {

            return {
                loading: 'getLoadingState',
                Songs: [
                    { audio: 'https://rorg.z1.fm/d/3f/ti_ft_eminem_-_thats_all_she_wrote_(zv.fm).mp3', artist: 'T.I', tittle: 'That\'s All She Wrote (ft. Eminem)', album: '', cover: 'https://res.cloudinary.com/djx5h4cjt/image/upload/v1551189593/random/f55abc725080eb05147e45ce3cd406a8.1000x1000x1.jpg' },
                    { audio: 'https://dll.z1.fm/music/8/e8/ellie_goulding_feat_diplo__swae_lee_-_close_to_me.mp3', artist: 'Ellie Goulding Feat. Diplo & Swae Lee', tittle: 'Close To Me', album: 'None', cover: 'https://res.cloudinary.com/djx5h4cjt/image/upload/v1551189716/random/ellie-goulding-close-to-me-lg.jpg' },
                    { audio: 'https://rorg.z1.fm/8/ff/sia_-_lullaby_zaycevnet_(zv.fm).mp3', artist: 'Sia', tittle: 'Lullaby', album: '', cover: 'https://res.cloudinary.com/djx5h4cjt/image/upload/v1551189786/random/t54664010-b708389188_s400.jpg' },
                    { audio: 'https://muz.z1.fm/6/6f/lp_-_muddy_waters_(zf.fm).mp3', artist: 'LP', tittle: 'Muddy Waters', album: '', cover: 'https://res.cloudinary.com/djx5h4cjt/image/upload/v1551189837/random/t337772630-i1186767461_s400.jpg' },
                    { audio: 'https://rorg.z1.fm/f/d6/david_dallas_-_runnin_(zf.fm).mp3', artist: 'David Dallas', tittle: 'Runnin', album: '', cover: 'https://res.cloudinary.com/djx5h4cjt/image/upload/v1551189882/random/t93555159-i1095888717_s400.jpg'},
                    { audio: 'https://jt2.z1.fm/f/bf/labrinth_-_vultures_(zvukoff.ru).mp3', artist: 'Labrinth', tittle: 'Vultures', album: '', cover: 'https://res.cloudinary.com/djx5h4cjt/image/upload/v1551189373/random/R-3512282-1392987047-7461.jpeg.jpg'},
                    { audio: 'https://muz17.z1.fm/b/10/niall_horan_-_slow_hands_slow_hands_(zf.fm).mp3', artist: 'Niall Horan', tittle: 'Slow Hands', album: '', cover: 'https://res.cloudinary.com/djx5h4cjt/image/upload/v1551190705/random/niall-horan-slow-hands-audio-02.jpg'},
                    { audio: 'https://muz.z1.fm/a/fa/davide_esposito_-_a_cavallo_del_vento_(zf.fm).mp3', artist: 'Davide Esposito', tittle: 'A Cavallo Del Vento', album: '', cover: 'https://res.cloudinary.com/djx5h4cjt/image/upload/v1551190889/random/500x500.jpg'},
                    { audio: 'https://dll.z1.fm/music/9/88/benny_blanco__halsey__khalid_-_eastside.mp3', artist: 'Benny Blanco, Halsey & Khalid', tittle: 'Eastside', album: '', cover: 'https://res.cloudinary.com/djx5h4cjt/image/upload/v1551192768/random/artworks-000432419499-7ts3gr-t500x500.jpg'}
                ],
                presentSongId: 0,
                lastSongId: 0,
                isPlaying: false,
                audio: new Audio(),
                isPaused: false,
                volume: 0.5,
                timeLapse: false,
                timeBufferSecs: 0,
                timeBufferMins: 0,
                currentTrackTime: 0,
                lastRecordedTrackTime: -1,
                countCheck: 0,
                currentTrackDuration: 0,
                //
                color: '#8dff97',
                progressPercent: 0,
                continuousPlay: false
            }
        },
        watch: {
            volume () {
                this.audio.volume = this.volume
            },
            timeLapse () {
                let xns = this
                if (this.timeLapse) {
                    this.timeLapse = false;
                    this.viewShit()
                }
                if((this.currentTrackDuration === 'NaN : NaN') || ((this.progressPercent === 'NaN') || (this.progressPercent === 0))){ // fix to displaying track time 'NaN : NaN' & timeBufferMins being stuck at 0
                    this.countCheck = 0
                    this.viewShit()
                    setTimeout(()=>{
                        if((this.progressPercent === 'NaN') || (this.progressPercent === 0)){
                            xns.audio.currentTime = xns.audio.currentTime;
                            xns.viewShit()
                        }
                    }, 2000)
                }
            },
            audio () {
                this.currentTrackTime = parseInt(this.audio.currentTime);
                this.lastRecordedTrackTime = -1
                // console.log('changed Track')
            }
        },
        mounted () {
            let xns = this;
            setTimeout(function () {
                xns.lastSongId = xns.Songs.length - 1
            }, 1500);
            this.audio.volume = this.volume
        },
        methods: {
            viewShit () {
                let xns = this;
                setTimeout(function () {
                    xns.currentTrackTime = parseInt(xns.audio.currentTime);
                    // console.log('Current Track Time: ' + xns.currentTrackTime + ' lstRecTime: ' + xns.lastRecordedTrackTime)
                    xns.progressPercent = (xns.currentTrackTime / xns.audio.duration) * 100;
                    if (xns.countCheck === 0) { // initializer start check
                        // console.log('Current Track Time: ' + xns.currentTrackTime + ' lstRecTime: ' + xns.lastRecordedTrackTime)
                        let ctdSecs = (parseInt(xns.audio.duration) % 60) < 10 ? '0' + parseInt(xns.audio.duration) % 60 : (parseInt(xns.audio.duration) % 60);
                        xns.currentTrackDuration = parseInt(parseInt(xns.audio.duration) / 60) + ' : ' + ctdSecs
                    }
                    if (xns.currentTrackTime !== xns.lastRecordedTrackTime) {
                        // console.log(parseInt(xns.audio.currentTime))
                        if (parseInt(xns.audio.currentTime) >= 60) {
                            xns.timeBufferMins = Math.floor(xns.audio.currentTime / 60);
                            xns.timeBufferSecs = parseInt(Math.floor(xns.audio.currentTime)) % 60
                        } else {
                            xns.timeBufferSecs = parseInt(Math.floor(xns.audio.currentTime))
                        }
                        xns.duration -= 1;
                        xns.timeLapse = !xns.timeLapse;
                        xns.timeLapse = true; // continue time lapse
                        xns.countCheck += 1;
                        //
                        xns.lastRecordedTrackTime = parseInt(Math.floor(xns.audio.currentTime))
                    } else {
                        if (!xns.audio.paused) {
                            xns.isPlaying = true;
                            xns.isPaused = false
                        } else {
                            xns.timeBufferMins = 0;
                            xns.timeBufferSecs = 0;
                            xns.timeLapse = false; // stop time lapse
                            this.countCheck = 0; // initializer end
                            xns.isPlaying = false;
                            xns.isPaused = false;
                            if (xns.continuousPlay) { // if continuous play === true
                                xns.nextSong()
                            }
                        }
                    }
                }, 1000)
            },




            playSong (SongId) {
                console.log(SongId);
                this.presentSongId = SongId;
                this.audio.src = this.Songs[SongId].audio;
                this.audio.play();
                this.isPlaying = true;
                this.isPaused = false;
                //
                this.countCheck = 0;
                this.lastRecordedTrackTime = -1;
                this.timeBufferMins = 0;
                this.viewShit()
            },
            play (songId = this.presentSongId, type = '') {
                if (this.isPlaying && !this.isPaused) {
                    if (type !== '') { // next/previous
                        this.audio.src = this.Songs[songId].audio;
                        this.audio.play();
                        this.isPlaying = true;
                        this.isPaused = false
                    } else { // pause
                        this.audio.pause();
                        this.isPlaying = false;
                        this.isPaused = true
                    }
                } else if (!this.isPlaying && this.isPaused) {
                    if (type !== '') { // next/previous
                        this.audio.src = this.Songs[songId].audio;
                        this.audio.play();
                        this.isPlaying = true;
                        this.isPaused = false
                    } else { // resume playing
                        this.audio.play();
                        this.isPlaying = true;
                        this.isPaused = false
                    }
                } else if (!this.isPlaying && !this.isPaused) {
                    this.audio.src = this.Songs[songId].audio;
                    this.audio.play();
                    this.isPlaying = true;
                    this.isPaused = false
                }
                //
                this.countCheck = 0;
                this.lastRecordedTrackTime = -1;
                this.timeBufferMins = 0;
                this.viewShit()
            },
            nextSong () {
                if ((this.presentSongId + 1) <= this.lastSongId) {
                    this.presentSongId += 1;
                    this.play(this.presentSongId, 'next')
                } else {
                    if (this.continuousPlay) { // if continuous play === true
                        this.play(0) // restart the playlist
                    }
                    // console.log('We\'ve arrived at the end of the playlist!')
                }
                this.countCheck = 0;
                this.lastRecordedTrackTime = -1;
                this.timeBufferMins = 0;
                this.viewShit()
            },
            prevSong () {
                if ((this.presentSongId - 1) >= 0) {
                    this.presentSongId -= 1;
                    this.play(this.presentSongId, 'prev')
                } else {
                    // console.log('We\'ve arrived at the start of the playlist!')
                }
                this.countCheck = 0;
                this.lastRecordedTrackTime = -1;
                this.timeBufferMins = 0;
                this.viewShit()
            },
            stop () {
                if (this.audio) {
                    this.audio.load();
                    this.isPlaying = false;
                    this.isPaused = false;
                    this.continuousPlay = false // halt continuous play
                } else {
                    // console.log('Nothing Playing!')
                }
                this.countCheck = 1;
                this.lastRecordedTrackTime = -1;
                this.timeBufferMins = 0
            },
            scrubToTime(){
                this.audio.currentTime = (this.progressPercent * this.audio.duration) / 100;
                this.viewShit()
            }
        }
    };
</script>
<style scoped></style>
