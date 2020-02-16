<template>
    <div class="gallery">
        <p>Gallery</p>
        <p>{{ gallery.getDescription() }}</p>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator'
    import Gallery from "@/models/Gallery";
    @Component
    export default class CvGallery extends Vue{
        @Prop() private gallery!: Gallery;
    }
</script>

<style scoped>
    .gallery{
        background-color: #222222;
        color: #DDDDDD;
    }
</style>