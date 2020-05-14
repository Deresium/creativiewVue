<template>
    <div class="mainPage">
        <div class="title">
            <img @click="goToGallery" src="../assets/icons/arrow.svg" alt="arrow svg"/>
            <h1>{{ $route.params.galleryName.replace('.', ' ')}}</h1>
            <CvFacebookShare :album-u-r-l="routeGallery"/>
        </div>
        <div class="photoList">
            <img
                    v-for="photo in listPhotos"
                    :key="photo.photoId"
                    :class="fullSized(photo)"
                    class="imgGallery"
                    @click="pickFullSizeImg(photo, $event)"
                    :src="photo.photoUrl"
                    alt="image gallery"
            />
            <img @click="closingFullSize" :class="showClear" src="../assets/icons/clear.svg" alt="clear icon"/>
            <router-link :class="askingOriginal" :to=routeOriginal>{{ $t("galleryMessage.askingOriginalQuality") }}</router-link>
            <label v-if="connectedAsAdmin" class="addPicture">
                <span>Add Picture</span>
                <input type="file" @change="addNewPicture"/>
            </label>
        </div>
        <CvLoginModal as-modal="true"/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import axiosCreatiview from "@/axios/axiosCreatiview";
    import Photo from '@/models/Photo';
    import CvFacebookShare from "@/components/CvFacebookShare.vue";
    import {Action, Getter} from "vuex-class";
    import CvLoginModal from "@/components/CvLoginModal.vue";
    @Component({
        components: {CvLoginModal, CvFacebookShare}
    })
    export default class CvDetailGallery extends Vue {
        @Action('showLoginModal', { namespace: 'user'}) showLoginModal: any;
        @Getter('isConnectedAsAdmin', { namespace: 'user'}) connectedAsAdmin!: boolean;

        listPhotos: Photo[] = [];
        fullSizedImage: Photo | null = null;
        showExtraMenu = true;

        async created(){
            await this.loadGallery();
        }

        async loadGallery(){
            const response = await axiosCreatiview.get(`/gallery/${ this.$route.params.galleryName}`);
            this.listPhotos = [];
            for(const picture of response.data){
                this.listPhotos.push(new Photo(picture._id,`${process.env.VUE_APP_URL_CREATIVIEW}/pictures/${picture._id}`));
            }
        }

        goToGallery(){
            this.$router.push('/gallery');
        }

        pickFullSizeImg(photo: Photo, event: MouseEvent){
            if(this.fullSizedImage && this.fullSizedImage.photoId === photo.photoId){
                const divideWith = window.innerWidth / 3;
                const indexOfPhoto = this.listPhotos.indexOf(photo);
                if(event.clientX < divideWith && indexOfPhoto !== 0)
                    this.fullSizedImage = this.listPhotos[indexOfPhoto - 1];
                else if(event.clientX > divideWith*2 && indexOfPhoto < this.listPhotos.length -1)
                    this.fullSizedImage = this.listPhotos[indexOfPhoto + 1];
                else if(event.clientX >= divideWith && event.clientX <= divideWith * 2)
                    this.showExtraMenu = !this.showExtraMenu;
            }else {
                this.fullSizedImage = photo;
            }
        }

        fullSized(photo: Photo){
            return {
                'fullSized': this.fullSizedImage && photo.photoId === this.fullSizedImage.photoId
            }
        }

        get askingOriginal(){
            return {
                'showOriginal': this.fullSizedImage != null && this.showExtraMenu,
                'hideOriginal': this.fullSizedImage == null
            }
        }

        get showClear(){
            return{
                'showClear': this.fullSizedImage != null && this.showExtraMenu,
                'hideClear': this.fullSizedImage == null
            }
        }

        closingFullSize(){
            this.fullSizedImage = null;
        }

        get routeOriginal(){
            return `/askingOriginal/${this.fullSizedImage?.photoId}`;
        }

        get routeGallery(){
            return `${process.env.VUE_APP_URL_CREATIVIEW_VUE}/gallery/${this.$route.params.galleryName}`
        }

        async addNewPicture(event: any){
            const newPicture = event.target.files[0];
            if(newPicture) {
                const formData = new FormData();
                formData.append(`photo`, newPicture, newPicture.name);
                try {
                    await axiosCreatiview.post(`/gallery/addPicture/${this.$route.params.galleryName}`, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });
                    await this.loadGallery();
                } catch (error) {
                    if (error.response.status === 401) {
                        this.showLoginModal();
                    }
                }
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

    .showClear{
        position: fixed;
        top: 3vh;
        left: 79vw;
        display: block;
        width: 20vw;
        z-index: 6;
        cursor: pointer;
    }

    .hideClear{
        display: none;
    }

    .showOriginal{
        position: fixed;
        display: block;
        top: 6vh;
        left: 2vw;
        background-color: #005082;
        color: white;
        padding: 1vh 2vw;
        z-index: 6;
        text-decoration: none;
        border-radius: 25px;
        font-weight: 300;
    }

    .hideOriginal{
        display: none;
    }

    .title img{
        width: 10%;
        cursor: pointer;
    }

    .title h1{
        margin-right: 2%;
        font-weight: normal;
    }

    .photoList{
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        flex-wrap: wrap;
    }

    .photoList .imgGallery{
        width: 49%;
        object-fit: cover;
        margin-bottom: 1vh;
        height: 20vh;
        cursor: pointer;
    }

    .photoList .imgGallery.fullSized{
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background-color: black;
        z-index: 5;
        max-height: 100vh;
        object-fit: contain;
        cursor: initial;
    }

    input[type="file"]{
        display: none;
    }

    .addPicture{
        width: 33%;
        height: 30vh;
        display: flex;
        justify-content: center;
        align-items: center;
        border: solid 2px #005082;
        box-sizing: border-box;
        color: #005082;
        cursor: pointer;
    }

    @media(max-width: 900px) and (orientation: landscape){
        .showClear{
            width: 7vw;
            left: 92vw;
            top: 1vh;
        }

        .showOriginal{
            left: 1vw;
            word-break: break-all;
        }
    }

    @media(min-width: 900px){
        .photoList .imgGallery{
            width: 33%;
            margin-bottom: 0.5vh;
            height: 30vh;
        }

        .photoList{
            align-items: stretch;
        }

        .title img{
            width: 3%;
        }

        .showClear{
            top: 0;
            left: 94vw;
            width: 5vw;
            height: 5vh;
            opacity: 0.9;
        }

        .showOriginal{
            top: 1vh;
        }
    }
</style>