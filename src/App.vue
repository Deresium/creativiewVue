<template>
  <div>
    <CvGallery v-for="(gallery, i) in galleries" :gallery="gallery" :key="i"></CvGallery>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import CvGallery from "@/components/CvGallery.vue";
  import Gallery from "@/models/Gallery";
  import axios from "@/axios/axios-creatiview"

  @Component({
    components: {
      CvGallery
    },
  })
  export default class App extends Vue {
    private galleries: Gallery[] = [];

    created() {
      axios.get('/galleries').then(response => {
        response.data.forEach((galleryJson: {id: number; name: string; description: string}) => {
          const gallery = new Gallery(galleryJson.id, galleryJson.name, galleryJson.description);
          this.galleries.push(gallery);
        });
      });
    }
  }
</script>

<style>
</style>