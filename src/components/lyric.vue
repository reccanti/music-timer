/**
 * A Vue component that displays the current lyric
 */
<template>
    <li>{{ lyric }}</li>
</template>

<script>
    export default {
        props: [
            'lyric'
        ]
    }
</script>