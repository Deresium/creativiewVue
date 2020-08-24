<template>
    <div class="mainPage">
        <div class="title">
            <img @click="goToGallery" src="../assets/icons/arrow.svg" alt="arrow svg"/>
            <h1>{{ $route.params.galleryName.replace('.', ' ')}}</h1>
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
            <div :class="clickButtons">
                <router-link class="btnClick original" :to=routeOriginal>{{ $t("galleryMessage.askingOriginalQuality") }}</router-link>
                <button @click="clipboardLink" :class="animateButton" class="btnClick btnClipboard">{{ $t("galleryMessage.clipboard") }}</button>
                <CvFacebookShare class="fbShare" :url="urlFullSize"/>
            </div>
            <button @click="switchExtraMenu" :class="divInfoCenter">
                {{ $t("galleryMessage.messageCenter") }}<br/>
                {{ $t("galleryMessage.messageCenter2") }}
            </button>
            <img src="../assets/icons/arrow.svg" @click="goPrevious(indexFullSizedImage)" :style="hideExtraMenu" class="arrow arrowLeft" alt="arrow"/>
            <img src="../assets/icons/arrow.svg" @click="goNext(indexFullSizedImage)" :style="hideExtraMenu" class="arrow arrowRight" alt="arrow"/>
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

        inClickAnimation = false;

        async created(){
            await this.loadGallery();
            if(this.$route.params.idPhoto)
                this.listPhotos.forEach(photo => {
                    if(photo.photoId === this.$route.params.idPhoto)
                        this.fullSizedImage = photo;
                })
        }

        switchExtraMenu(){
            this.showExtraMenu = !this.showExtraMenu;
        }

        async loadGallery(){
            const response = await axiosCreatiview.get(`/gallery/${ this.$route.params.galleryName }`);
            this.listPhotos = [];
            for(const picture of response.data){
                this.listPhotos.push(new Photo(picture._id,`${process.env.VUE_APP_URL_CREATIVIEW}/pictures/${this.$route.params.galleryName}/${picture._id}`));
            }
        }

        get urlFullSize(): string|null{
            if(this.fullSizedImage != null)
                return this.fullSizedImage.photoUrl
            else
                return null;
        }
        goToGallery(){
            this.$router.push('/gallery');
        }

        pickFullSizeImg(photo: Photo, event: MouseEvent){
            if(this.fullSizedImage && this.fullSizedImage.photoId === photo.photoId){
                const divideWith = window.innerWidth / 3;
                const indexOfPhoto = this.listPhotos.indexOf(photo);
                if(event.clientX < divideWith)
                    this.goPrevious(indexOfPhoto)
                else if(event.clientX > divideWith*2)
                    this.goNext(indexOfPhoto);
                else if(event.clientX >= divideWith && event.clientX <= divideWith * 2)
                    this.showExtraMenu = !this.showExtraMenu;
            }else {
                this.fullSizedImage = photo;
            }
        }

        get indexFullSizedImage(){
            if(this.fullSizedImage)
                return this.listPhotos.indexOf(this.fullSizedImage);
            return -1;
        }

        goPrevious(indexOfPhoto: number){
            if(indexOfPhoto !== 0)
                this.fullSizedImage = this.listPhotos[indexOfPhoto - 1];
        }

        goNext(indexOfPhoto: number){
            if(indexOfPhoto < this.listPhotos.length -1)
                this.fullSizedImage = this.listPhotos[indexOfPhoto + 1];
        }

        fullSized(photo: Photo){
            return {
                'fullSized': this.fullSizedImage && photo.photoId === this.fullSizedImage.photoId
            }
        }

        get divInfoCenter(){
            return {
                'showInfoCenter': this.fullSizedImage != null && this.showExtraMenu,
                'hideInfoCenter': this.fullSizedImage == null
            }
        }

        get showClear(){
            return{
                'showClear': this.fullSizedImage != null && this.showExtraMenu,
                'hideClear': this.fullSizedImage == null
            }
        }

        get clickButtons(){
            return{
                'showButtons': this.fullSizedImage != null && this.showExtraMenu,
                'hideButtons': this.fullSizedImage == null
            }
        }

        get hideExtraMenu(){
            return{
                display : this.showExtraMenu && this.fullSizedImage != null? 'block': 'none'
            }
        }

        get animateButton(){
            return{
                'animateButton': this.inClickAnimation
            }
        }

        closingFullSize(){
            this.fullSizedImage = null;
        }

        get routeOriginal(){
            return `/askingOriginal/${this.fullSizedImage?.photoId}`;
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

        clipboardLink(){
            this.inClickAnimation = false;
            this.inClickAnimation = true;
            if(this.fullSizedImage)
                navigator.clipboard.writeText(this.fullSizedImage.photoUrl);
            setTimeout(() => {
                this.inClickAnimation = false;
            }, 1000)
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

    .original{
        margin-bottom: 2vh;
    }

    .btnClick{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #005082;
        color: white;
        padding: 1vh 2vw;
        text-decoration: none;
        border-radius: 25px;
        font-weight: 300;
        border: none;
        outline: none;
    }

    .btnClipboard{
        margin-bottom: 2vh;
        cursor: pointer;
    }

    .animateButton{
        animation: popupButton 0.3s
    }

    @keyframes popupButton {
        0%{
            transform: scale(1);
        }
        50%{
            transform: scale(0.8);
        }
        100%{
            transform: scale(1);
        }
    }

    .showButtons{
        position: fixed;
        z-index: 6;
        top: 4vh;
        left: 2vw;
    }

    .hideButtons{
        display: none;
    }

    .showInfoCenter{
        position: fixed;
        text-align: center;
        z-index: 6;
        width: 90%;
        top: 80%;
        left: 5%;
        color: white;
        background-color: #005082;
        padding: 1vh 2vw;
        border-radius: 25px;
        font-weight: 300;
        border: none;
        font-size: medium;
        cursor: pointer;
        outline: none;
    }

    .hideInfoCenter{
        display: none;
    }

    .arrow{
        width: 10%;
        cursor: pointer;
        position: fixed;
        z-index: 6;
        top: 50%;
        transform: translateY(-50%);
    }


    .arrowLeft{
        left: 5%;
    }

    .arrowRight{
        left: 85%;
        transform: translateY(-50%) scaleX(-1);
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
            justify-content: space-evenly;
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

        .showInfoCenter{
            left: 30%;
            width: 40%;
            top: 90%;
        }

        .arrow{
            width: 5%;
        }

        .arrowRight{
            left: 90%
        }
    }
</style>