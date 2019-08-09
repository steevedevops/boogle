import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Songs: [
      {
        audio:
          "https://rorg.z1.fm/d/3f/ti_ft_eminem_-_thats_all_she_wrote_(zv.fm).mp3",
        artist: "T.I",
        tittle: "That's All She Wrote (ft. Eminem)",
        album: "",
        cover:
          "https://res.cloudinary.com/djx5h4cjt/image/upload/v1551189593/random/f55abc725080eb05147e45ce3cd406a8.1000x1000x1.jpg"
      },
      {
        audio:
          "https://dll.z1.fm/music/8/e8/ellie_goulding_feat_diplo__swae_lee_-_close_to_me.mp3",
        artist: "Ellie Goulding Feat. Diplo & Swae Lee",
        tittle: "Close To Me",
        album: "None",
        cover:
          "https://res.cloudinary.com/djx5h4cjt/image/upload/v1551189716/random/ellie-goulding-close-to-me-lg.jpg"
      },
      {
        audio: "https://rorg.z1.fm/8/ff/sia_-_lullaby_zaycevnet_(zv.fm).mp3",
        artist: "Sia",
        tittle: "Lullaby",
        album: "",
        cover:
          "https://res.cloudinary.com/djx5h4cjt/image/upload/v1551189786/random/t54664010-b708389188_s400.jpg"
      },
      {
        audio: "https://muz.z1.fm/6/6f/lp_-_muddy_waters_(zf.fm).mp3",
        artist: "LP",
        tittle: "Muddy Waters",
        album: "",
        cover:
          "https://res.cloudinary.com/djx5h4cjt/image/upload/v1551189837/random/t337772630-i1186767461_s400.jpg"
      },
      {
        audio: "https://rorg.z1.fm/f/d6/david_dallas_-_runnin_(zf.fm).mp3",
        artist: "David Dallas",
        tittle: "Runnin",
        album: "",
        cover:
          "https://res.cloudinary.com/djx5h4cjt/image/upload/v1551189882/random/t93555159-i1095888717_s400.jpg"
      },
      {
        audio: "https://jt2.z1.fm/f/bf/labrinth_-_vultures_(zvukoff.ru).mp3",
        artist: "Labrinth",
        tittle: "Vultures",
        album: "",
        cover:
          "https://res.cloudinary.com/djx5h4cjt/image/upload/v1551189373/random/R-3512282-1392987047-7461.jpeg.jpg"
      },
      {
        audio:
          "https://muz17.z1.fm/b/10/niall_horan_-_slow_hands_slow_hands_(zf.fm).mp3",
        artist: "Niall Horan",
        tittle: "Slow Hands",
        album: "",
        cover:
          "https://res.cloudinary.com/djx5h4cjt/image/upload/v1551190705/random/niall-horan-slow-hands-audio-02.jpg"
      },
      {
        audio:
          "https://muz.z1.fm/a/fa/davide_esposito_-_a_cavallo_del_vento_(zf.fm).mp3",
        artist: "Davide Esposito",
        tittle: "A Cavallo Del Vento",
        album: "",
        cover:
          "https://res.cloudinary.com/djx5h4cjt/image/upload/v1551190889/random/500x500.jpg"
      },
      {
        audio:
          "https://dll.z1.fm/music/9/88/benny_blanco__halsey__khalid_-_eastside.mp3",
        artist: "Benny Blanco, Halsey & Khalid",
        tittle: "Eastside",
        album: "",
        cover:
          "https://res.cloudinary.com/djx5h4cjt/image/upload/v1551192768/random/artworks-000432419499-7ts3gr-t500x500.jpg"
      }
    ],
    presentSongId: 0,
    lastSongId: 0,
    isPlaying: false,
    audio: new Audio(),
    isPaused: false,
    volume: 0.5,
    //
    timeLapse: false,
    timeBufferSecs: 0,
    timeBufferMins: 0,
    currentTrackTime: 0,
    lastRecordedTrackTime: -1,
    countCheck: 0,
    currentTrackDuration: 0,
    playerIsBuffering: false,
    //
    color: "#8dff97",
    progressPercent: 0,
    continuousPlay: false
  },
  getters: {
    getSongs: state => state.Songs,
    getVolume: state => state.volume,
    getProgressPercent: state => state.progressPercent,
    getTimeLapse: state => state.timeLapse
  },
  mutations: {
    updateLastSongId(state, payload) {
      state.lastSongId = payload.lastSongId;
    },
    changeVolume(state, payload) {
      state.volume = payload.volume;
      state.audio.volume = state.volume;
    },
    updateTimeLapse(state, payload) {
      state.timeLapse = payload.timeLapse;
    },
    updateCountCheck(state, payload) {
      state.countCheck = payload.countCheck;
    },
    updateAudioCurrentTime(state, payload) {
      state.audio.currentTime = payload.currentTime;
    },
    updateProgressPercent(state, payload) {
      state.audio.currentTime = payload.percent;
    },
    updateContinuousPlay(state, payload) {
      state.continuousPlay = payload.status;
    },
    play(state, payload /*songId = this.presentSongId, type = ''*/) {
      state.progressPercent = 0; // reset playback progress
      if (state.isPlaying && !state.isPaused) {
        if (payload.type !== "") {
          // next/previous
          state.audio.src = state.Songs[payload.songId].audio;
          state.audio.play();
          // initial track timer
          state.timeBufferMins = 0;
          state.currentTrackDuration = 0;
          // change player controls icons
          state.isPlaying = true;
          state.isPaused = false;
          // begin buffering of track
          state.playerIsBuffering = true;
          state.audio.addEventListener("loadeddata", () => {
            state.playerIsBuffering = false; // enough media to begin playback
          });
          state.audio.addEventListener("playing", () => {
            // Audio has started playing
            state.countCheck = 0;
            state.lastRecordedTrackTime = -1;
            state.timeBufferMins = 0;
          });
        } else {
          // pause
          state.audio.pause();
          state.isPlaying = false;
          state.isPaused = true;
        }
      } else if (!state.isPlaying && state.isPaused) {
        if (payload.type !== "") {
          // next/previous
          state.audio.src = state.Songs[payload.songId].audio;
          state.audio.play();
          // initial track timer
          state.timeBufferMins = 0;
          state.currentTrackDuration = 0;
          // change player controls icons
          state.isPlaying = true;
          state.isPaused = false;
          // begin buffering of track
          state.playerIsBuffering = true;
          state.audio.addEventListener("loadeddata", () => {
            state.playerIsBuffering = false; // enough media to begin playback
          });
          state.audio.addEventListener("playing", () => {
            // player has moved to +payload.type+ song
            state.countCheck = 0;
            state.lastRecordedTrackTime = -1;
            state.timeBufferMins = 0;
          });
        } else {
          // resume playing
          state.audio.play();
          // initial track timer
          state.timeBufferMins = 0;
          state.currentTrackDuration = 0;
          // change player controls icons
          state.isPlaying = true;
          state.isPaused = false;
          // begin buffering of track
          state.playerIsBuffering = true;
          state.audio.addEventListener("loadeddata", () => {
            state.playerIsBuffering = false; // enough media to begin playback
          });
          state.audio.addEventListener("playing", () => {
            // Audio has resumed playing
            state.countCheck = 0;
            state.lastRecordedTrackTime = -1;
            state.timeBufferMins = 0;
          });
        }
      } else if (!state.isPlaying && !state.isPaused) {
        state.audio.src = state.Songs[payload.songId].audio;
        state.audio.play();
        // initial track timer
        state.timeBufferMins = 0;
        state.currentTrackDuration = 0;
        // change player controls icons
        state.isPlaying = true;
        state.isPaused = false;
        // begin buffering of track
        state.playerIsBuffering = true;
        state.audio.addEventListener("loadeddata", () => {
          state.playerIsBuffering = false; // enough media to begin playback
        });
        state.audio.addEventListener("playing", () => {
          // Audio has started playing for the first time
          state.countCheck = 0;
          state.lastRecordedTrackTime = -1;
          state.timeBufferMins = 0;
        });
      }
    }
  },
  actions: {}
});
