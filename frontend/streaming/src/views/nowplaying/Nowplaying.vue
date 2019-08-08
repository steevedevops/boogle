<template>
    <div class="nowplaying">
        <div class="row">
            <div class="col-md-12">
                <h1>Now playing</h1>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapState, mapGetters} from 'vuex';


export default {
    name:'nowplaying',
    data(){
        return {

        }
    },
    computed: {        
        ...mapState([
            'Songs',
            'presentSongId',
            'lastSongId',
            'isPlaying',
            'audio',
            'isPaused',
            'timeBufferSecs',
            'timeBufferMins',
            'currentTrackTime',
            'lastRecordedTrackTime',
            'countCheck',
            'currentTrackDuration',
            'color',
            'progressPercent',
            'continuousPlay',
            'timeLapse',
            'volume',
            'playerIsBuffering'
        ])
    }
    
}
</script>
<style lang="scss" scoped>

</style>


