<template>
  <div id="app">
    <word-cloud
      v-bind:mouse-click="clickWord"
      v-bind:texts="texts"
      v-bind:mouseStop="true"
    ></word-cloud>
  </div>
</template>

<script>
import WordCloud from './wordCloud.vue';

export default {
  name: 'app',
  data() {
    return {
      texts: [
        {
          text: 'Cat',
        },
        {
          text: 'Fox',
        },
        {
          text: 'Dog',
        },
        {
          text: 'Lion',
        },
        {
          text: 'Squirrel',
        },
        {
          text: 'Snake',
        },
      ],
    };
  },
  components: {
    WordCloud,
  },
  methods: {
    clickWord: function(word) {
      console.log(word);
    },
  },
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  width: 100%;
}
</style>
