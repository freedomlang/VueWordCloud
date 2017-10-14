<template>
    <canvas v-bind:id="id4canvas"></canvas>
</template>

<script>
    import randomID from 'js/randomID.js';
    import Word from 'js/word.js';

    export default {
        data:function(){
            return {
                id4canvas: randomID(),
                canvasEl: {},
                drawArea: {},
                words: [],
                mouse: {},
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
            }
        },
        mounted:function(){
        	this.$el.width = this.width;
        	this.$el.height	= this.height;
            this.$nextTick(function () {
            	this.drawArea = this.$el.getContext("2d");
	            if (this.mouseStop) {
	                this.stopByMouse();
	            }
	            this.setUp();
            })
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
            }
        }
    }
</script>
