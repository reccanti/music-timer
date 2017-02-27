/**
 * A Vue component for displaying a list of lyrics
 */
<template>
    <ul>
        <li is="Lyric" 
            v-for="(line, index) in list" 
            v-bind:lyric="line"
            v-bind:class="[index === current ? 'selected' : '' ]">
        </li>
    </ul>
</template>

<script>
    import Lyric from './lyric.vue'
    export default {
        props: [
            'list',
            'current'
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