# wordcloud for Vue

A wordcloud component for Vue，



### Install

```javascript
npm install @blackywkl/vuewordcloud
```



### Example

```
<template>
	<div id="app">
      	<wordcloud v-bind:texts="texts"></wordcloud>
  	</div>
</template>

<script>
import Wordcloud from '@blackywkl/vuewordcloud';

export default {
  	name: 'app',
  	components: {
    	Wordcloud
  	},
  	data() {
    	return {
      		defaultWords: [{
          		text: 'Cat',
          		size: 26
        	}, {
          		text: 'fish',
          		size: 19
        	}, {
          		text: 'things',
          		size: 18
        	}, {
          		text: 'look',
          		size: 16
        	}, {
          		text: 'two',
          		size: 15
        	}, {
        	    text: 'fun',
        	    size: 9
        	}, {
        	    text: 'know',
        	    size: 9
        	}, {
        	    text: 'good',
        	    size: 9
        	}, {
        	    text: 'play',
        	    size: 6
        	}]
    	}
  	}
}
</script>
```

