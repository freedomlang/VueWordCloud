<template>
    <canvas v-bind:id="id4canvas"></canvas>
</template>

<script>
    import Word from './assets/js/word.js';
    import { isFunc, randomID } from './util'

    export default {
        name: 'Wordcloud',
        data:function(){
            return {
                id4canvas: randomID(),
                drawArea: {},
                mouse: {},
                words: [],
                canvasSize: {}
            }
        },
        props:{
        	width: {
        		type: Number,
        		default: 400
        	},
        	height: {
        		type: Number,
        		default: 400
        	},
            texts:{
                type:Array,
                default:[]
            },
            mouseStop:{
                type:Boolean,
                default: false
            },
            mouseClick: {
                type: Function
            }
        },
        mounted:function(){
        	this.$el.width = this.width;
            this.$el.height	= this.height;
            console.log(isFunc)
            this.$nextTick(function () {
            	this.drawArea = this.$el.getContext("2d");
	            if (this.mouseStop) {
                    this.stopByMouse();
                    
                    if (isFunc(this.mouseClick)) {
                        this.$el.addEventListener('click', this.handleClick);
                    }
                }
                

	            this.setUp();
            });
        },
        methods:{
            loop:function(){
                window.requestAnimationFrame(this.loop);
                this.drawArea.clearRect(0, 0, this.$el.width, this.$el.height);

                for (let i = 0; i < this.words.length; i++) {
                    this.words[i].update();
                    this.words[i].draw();
                }
            },
            setUp:function(){
                this.words = [];
                for (var i = this.texts.length - 1; i >= 0; i--) {
                    this.words.push(new Word(this.texts[i].text, this.texts[i].size, this.texts[i].color, this.$el.width, this.$el.height,this.mouse,this.drawArea));
                }
                window.requestAnimationFrame(this.loop);
            },
            stopByMouse:function(){
                var that = this;
                this.$el.addEventListener('mousemove',function(event) {
                    event.stopPropagation();
                    // important: correct mouse position:
                    var rect = this.getBoundingClientRect();

                    that.mouse.x = event.clientX - rect.left;
                    that.mouse.y = event.clientY - rect.top;
                });
            },
            handleClick: function (event) {
                var rect = this.$el.getBoundingClientRect();
                const clickedPosition = {
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top
                };

                const clickedWord = this.words.filter(function (word) {
                    return clickedPosition.x >= word.x && clickedPosition.x <= word.x + word.width && clickedPosition.y >= word.y - word.size && clickedPosition.y <= word.y
                })[0];

                if (clickedWord) this.mouseClick({
                    text: clickedWord.text,
                    x: clickedWord.x,
                    y: clickedWord.y
                });
            }
        }
    }
</script>
