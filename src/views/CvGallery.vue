<template>
    <div class="mainPage">
        <div v-if="connectedAsAdmin" class="adminAction">
            <router-link to="/addGallery" class="addGallery">Add gallery</router-link>
        </div>
        <div class="allGallery">
            <div class="gallery" v-for="gallery in galleries" :key="gallery.galleryID">
                <div class="infoGallery">
                    <h2>{{gallery.galleryName}}</h2>
                    <section v-if="isFrench" class="description">{{gallery.galleryDescriptionFr}}</section>
                    <section v-else class="description">{{gallery.galleryDescriptionEn}}</section>
                    <router-link :to="`/gallery/${gallery.galleryName.replace(' ', '.')}`" class="btnDiscover">{{ $t("galleryMessage.discover") }}</router-link>
                </div>
                <img class="imgGallery" :src="gallery.galleryUrlPictures[0]" alt="main image gallery"/>
            </div>
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

        get isFrench(){
            return this.$i18n.locale === 'fr';
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
        height: 20vh;
    }

    .infoGallery{
        width: 60%;
        background-color: #FFA41B;
        font-weight: 300;
    }

    .infoGallery h2{
        font-weight: 300;
        text-align: center;
        margin-top: 0.5vh;
    }

    .infoGallery section{
        margin: 1vh 3%;
    }

    .btnDiscover{
        display: inline-block;
        border: none;
        color: white;
        background-color: #005082;
        padding: 1vh 5%;
        font-size: large;
        margin-left: 3%;
        text-decoration: none;
    }

    .imgGallery{
        object-fit: cover;
        background-color: #FFA41B;
        width: 40%;
    }

    .description{
        height: 40%;
        overflow-y: hidden;
        font-size: smaller;
    }

    @media(min-width: 900px) {
        .allGallery{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        .gallery{
            height: 20vh;
            width: 45%;
        }

        .infoGallery{
            width: 60%;
        }

        .description{
            height: 55%;
        }

    }
</style>