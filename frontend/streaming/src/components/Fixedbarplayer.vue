<template>
    <div class="playercontent">
        <div class="content-cover">Cover</div>
        <div class="content-player-btn">
            <div class="progress-time">
                <span>========================================================</span>
            </div>
            <div class="content-btns">
                <div class="btn-backward">
                    <a class="font-menor" href=""><i class="fas fa-step-backward"></i></a>
                </div>
                <div class="btn-play">                    
                    <a href=""><i class="fas fa-play"></i></a>
                </div>
                <div class="btn-forward">
                    <a class="font-menor" href=""><i class="fas fa-step-forward"></i></a>
                </div>                                          
            </div>
        </div>
        <div class="content-volume">volum</div>
    </div>
</template>

<script>
export default {
    name:'fixedbarplayer',
    data(){
        return{

        }
    }
}
</script>
<style lang="sass" scoped>

</style>

