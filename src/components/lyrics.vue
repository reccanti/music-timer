/**
 * A Vue component for displaying a list of lyrics
 */
<template>
    <ul>
        <li is="Lyric" 
            v-for="line in list" 
            v-bind:lyric="line">
        </li>
    </ul>
</template>

<script>
    import Lyric from './lyric.vue'
    export default {
        props: [
            'list'
        ],
        components: {
            Lyric
        }
    }
</script>

<style>
    ul {
        list-style: none;
    }
</style>