/**
 * A Vue component that displays the current lyric
 */
<template>
    <li>
        {{ lyric }}
    </li>
</template>

<script>
    export default {
        props: [
            'lyric'
        ]
    }
</script>

<style>
    li {
        opacity: 0.5;
    }
    .selected {
        opacity: 1.0;
    }
</style>