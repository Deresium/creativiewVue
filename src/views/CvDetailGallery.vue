<template>
    <div class="mainPage">
        <div class="title">
            <img @click="goToGallery" src="../assets/icons/arrow.svg" alt="arrow svg"/>
            <h1>{{ $route.params.galleryName.replace('.', ' ')}}</h1>
        </div>
        <div class="photoList">
            <img
                    v-for="photo in listUrls"
                    :key="photo.photoId"
                    :class="fullSized(photo)"
                    @click="pickFullSizeImg(photo)"
                    :src="photo.photoUrl"
                    alt="image gallery"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import axiosCreatiview from "@/axios/axiosCreatiview";
    import Photo from '@/models/Photo';

    @Component
    export default class CvDetailGallery extends Vue {
        listUrls: Photo[] = [];
        fullSizedImage: Photo | null = null;

        async created(){
            const response = await axiosCreatiview.get(`/gallery/${ this.$route.params.galleryName}`);
            console.log(response.data);
            for(const picture of response.data){
                this.listUrls.push(new Photo(picture._id,`${process.env.VUE_APP_URL_CREATIVIEW}/pictures/${picture._id}`));
            }
        }

        goToGallery(){
            this.$router.push('/gallery');
        }

        pickFullSizeImg(photo: Photo){
            if(this.fullSizedImage && this.fullSizedImage.photoId === photo.photoId)
                this.fullSizedImage = null;
            else
                this.fullSizedImage = photo;
        }

        fullSized(photo: Photo){
            return {
                'fullSized': this.fullSizedImage && photo.photoId === this.fullSizedImage.photoId
            }
        }
    }
</script>

<style scoped>
    .title{
        width: 100%;
        display: flex;
        border-bottom: 5px solid #FFA41B;
        margin-bottom: 2vh;
        margin-top: 2vh;
        color: #005082;
        align-items: center;
    }

    .title img{
        width: 10%;
        cursor: pointer;
    }

    .photoList{
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        flex-wrap: wrap;
    }

    .photoList img{
        width: 49%;
        object-fit: cover;
        margin-bottom: 1vh;
        cursor: pointer;
        max-height: 20vh;
    }

    .photoList img.fullSized{
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background-color: black;
        z-index: 5;
        max-height: 100vh;
        object-fit: contain;
    }

    @media(min-width: 900px){
        .photoList img{
            width: 33%;
            margin-bottom: 0.5vh;
            max-height: 40vh;
        }

        .photoList{
            align-items: stretch;
        }

        .title img{
            width: 5%;
        }
    }
</style>