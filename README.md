# wordcloud for Vue

A wordcloud component for Vue.



### Install

```javascript
npm install @blackywkl/vuewordcloud
```



### Example
[![Edit @blackywkl/vuewordcloud](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/3xz78r9r66)

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

### Props

| name      | meaning                               | type    | default value |
| --------- | ------------------------------------- | ------- | ------------- |
| texts     | array contain each text               | Array   | []            |
| width     | width(px) for entire component            | Number  | 400           |
| height    | height(px) for entire component           | Number  | 400           |
| mouseStop | stop the word when the mouse is hover | Boolean | false         |

#### properties for each item in texts

| name       | meaning                  | type   | default value    |
| ---------- | ------------------------ | ------ | ---------------- |
| text       | word to show             | String | test             |
| size       | font size for the word   | Number | random           |
| fontFamily | font family for the word | String | Microsoft YaHei  |
| color      | color for the word       | String | rgb(200,200,200) |


### Todos

- [ ] Add github page
- [x] Add online demo(codesandbox)
- [ ] Add test
- [x] Add callback for click
- [ ] Add attribute to avoid collision
- [ ] Add attribute to controll speed

## License

MIT.