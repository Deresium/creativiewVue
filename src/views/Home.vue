<template>
    <div>
        <img src="../assets/textSlogan.svg" alt="logoWithText"/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class Home extends Vue {
    }
</script>

<style scoped>
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
</style>
