<template>
    <canvas v-bind:id="id4canvas" :width="width" :height="height"></canvas>
</template>

<script>
    import Word from './assets/js/word.js';
    import { isFunc, randomID } from './util'

    export default {
        name: 'Wordcloud',
        data:function(){
            return {
                id4canvas: randomID(),
                drawArea: {}
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
        created: function () {
            // Set properties that unreactivity
            this.mouse = {};
            this.words = [];
            this.canvasPosition = {};
        },
        mounted:function(){
            this.$nextTick(function () {
                this.drawArea = this.$el.getContext("2d");
                const canvasBounding = this.$el.getBoundingClientRect();
                this.canvasPosition = {
                    top: canvasBounding.top,
                    left: canvasBounding.left
                };

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
                this.drawArea.clearRect(0, 0, this.width, this.height);

                for (let i = 0; i < this.words.length; i++) {
                    this.words[i].update();
                    this.words[i].draw();
                }
            },
            setUp:function(){
                this.words = [];
                for (var i = this.texts.length - 1; i >= 0; i--) {
                    this.words.push(new Word(this.texts[i].text, this.texts[i].size, this.texts[i].color, this.width, this.height,this.mouse,this.drawArea));
                }
                window.requestAnimationFrame(this.loop);
            },
            stopByMouse:function(){
                var that = this;
                this.$el.addEventListener('mousemove',function(event) {
                    event.stopPropagation();
                    // important: correct mouse position:
                    that.mouse.x = event.clientX - that.canvasPosition.left;
                    that.mouse.y = event.clientY - that.canvasPosition.top;
                });
            },
            handleClick: function (event) {
                const clickedPosition = {
                    x: event.clientX - this.canvasPosition.left,
                    y: event.clientY - this.canvasPosition.top
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
