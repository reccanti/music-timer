import {Synth, Loop, Transport} from 'tone';
import {lyrics} from './testdata';
import Lyric from './components/lyric.vue';
import Lyrics from './components/lyrics.vue';
import Vue from 'vue';

/**
 * The main app. Has methods to help updated
 * in time with the Tone.js Transport
 */
const app = new Vue({
    el: '#app',
    data() {
        return {
            currentIndex: 0,
            currentLyric: lyrics[0],
            lyricList: lyrics
        }
    },
    methods: {
        updateLyrics: function(lyric) {
            this.currentLyric = lyric;
            this.$nextTick(function () {
                console.log('updated!');
                console.log(this.currentLyric);
            });
        },
        setCurrent: function(current) {
            this.currentIndex = current;
            this.$nextTick();
        }
    },
    /*render(h) {
        return (
            <Lyric lyric={this.currentLyric}>
            </Lyric>
        );
    }*/
    render(h) {
        return (
            <Lyrics current={this.currentIndex} list={lyrics}></Lyrics>
        );
    }
});

/**
 * A loop that updates the current lyric of the app
 */
let counter = 0;
const loop = new Loop((time) => {
    if (counter < lyrics.length) {
        app.setCurrent(counter);
    }
    counter++;
}, '1m');

loop.start('0m');
Transport.start();