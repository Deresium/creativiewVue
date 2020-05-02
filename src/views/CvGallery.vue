<template>
    <div class="mainPage">
        <div v-if="connectedAsAdmin" class="adminAction">
            <router-link to="/addGallery" class="addGallery">Add gallery</router-link>
        </div>
        <div class="gallery" v-for="gallery in galleries" :key="gallery.galleryID">
            <div class="infoGallery">
                <h2>{{gallery.galleryName}}</h2>
                <section>{{gallery.galleryDescriptionFr}}</section>
                <button class="btnDiscover">Discover</button>
            </div>
            <img class="imgGallery" :src="gallery.galleryUrlPictures[0]" alt="main image gallery"/>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import {Getter} from "vuex-class";
    import axiosCreatiview from "@/axios/axiosCreatiview";
    import Gallery from "@/models/Gallery";
    @Component
    export default class CvGallery extends Vue{
        @Getter('isConnectedAsAdmin', { namespace: 'user'}) connectedAsAdmin!: boolean;

        galleries: Gallery[] = [];

        async created(){
            try {
                const response = await axiosCreatiview.get('/gallery');
                for(const galleryResponse of response.data){
                    const gallery = new Gallery(galleryResponse._id, galleryResponse.galleryName, galleryResponse.descriptionFr, galleryResponse.descriptionEn);
                    gallery.addPicture(`${process.env.VUE_APP_URL_CREATIVIEW}/gallery/${galleryResponse._id}/mainPicture`);
                    this.galleries.push(gallery);
                }
            }catch(error) {
                console.error(error);
            }
        }
    }
</script>

<style scoped>
    .adminAction{
        display: flex;
        margin-top: 2vh;
    }

    .addGallery{
        display: block;
        background-color: #005082;
        color: white;
        padding: 1vh 5%;
        text-decoration: none;
    }

    .gallery{
        display: flex;
        margin-top: 2vh;
        margin-bottom: 2vh;
    }

    .infoGallery{
        width: 50%;
        background-color: #FFA41B;
        font-weight: 300;
    }

    .infoGallery h2{
        font-weight: 300;
        text-align: center;
    }

    .infoGallery section{
        margin: 1vh 3%;
    }

    .btnDiscover{
        border: none;
        color: white;
        background-color: #005082;
        padding: 1vh 5%;
        font-size: large;
        margin-left: 3%;
    }

    .imgGallery{
        width: 50%;
    }
</style>