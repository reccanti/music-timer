/**
 * A Vue component that displays the current lyric
 */
<template>
    <p>{{ lyric }}</p>
</template>

<script>
    export default {
        props: [
            'lyric'
        ]
    }
</script>