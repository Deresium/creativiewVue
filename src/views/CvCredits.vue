<template>
    <div class="mainPage">
        <h1>Credits</h1>
        <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        <div>Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CvAboutMe extends Vue{
}
</script>

<style scoped>

.mainPage{
    margin-top: 2vh;
    min-height: 85vh;
}
</style>