<template>
    <div class="mainPage">
        <h1>{{ $t('homeMessage.gallery') }}</h1>
        <div v-if="onlyOwner" class="adminAction">
            <router-link to="/addGallery" class="addGallery">Add gallery</router-link>
        </div>
<!--        <script type="application/javascript" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        &lt;!&ndash; annonce 1 &ndash;&gt;
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-5833099071292911"
             data-ad-slot="9960199001"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script type="application/javascript">
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>-->
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
        @Getter('onlyOwner', { namespace: 'user'}) onlyOwner!: boolean;

        galleries: Gallery[] = [];

        async created(){
            try {
                const response = await axiosCreatiview.get('/gallery');
                for(const galleryResponse of response.data){
                    const gallery = new Gallery(galleryResponse.id, galleryResponse.name, galleryResponse.descriptionFr, galleryResponse.descriptionEn);
                    gallery.addPicture(`${process.env.VUE_APP_URL_CREATIVIEW}/gallery/${galleryResponse.id}/mainPicture`);
                    this.galleries.push(gallery);
                }
            }catch(error) {
                //console.error(error);
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
        height: 30vh;
    }

    .infoGallery{
        width: 60%;
        height: 100%;
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
        font-size: smaller;
    }

    @media(min-width: 900px) {
        .allGallery{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        .gallery{
            height: 30vh;
            width: 45%;
        }

        .infoGallery{
            width: 60%;
        }
    }
</style>