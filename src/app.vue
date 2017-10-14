<template>
    <div id="app">
        <word-cloud
            v-bind:texts="texts"
            v-bind:mouseStop="true"></word-cloud>
    </div>
</template>

<script>
    import WordCloud from './wordCloud.vue';

    export default {

        name: 'app',
        data () {
            return {
                texts: [{
                    text: 'foo',
                    size: 27,
                    color: 'cyan'
                }],
            }
        },
        components:{
            WordCloud
        }
    }
</script>

<style>
    html, body, #app {
        height: 100%;
        width: 100%;
    }
</style>
