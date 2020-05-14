<template>
    <div v-if="connectedAsAdmin" class="mainPage">
        <form v-on:submit.prevent="postGallery" novalidate="novalidate">
            <div class="descriptionPart">
                <label>
                    <span>Name</span>
                    <input type="text" v-model="galleryName"/>
                </label>
                <label>
                    <span>Description (FR)</span>
                    <textarea v-model="descriptionFr"/>
                </label>
                <label>
                    <span>Description (EN)</span>
                    <textarea v-model="descriptionEn"/>
                </label>
                <button type="submit" :disabled="disableSending">Add gallery</button>
            </div>
            <div class="imgPart">
                <label class="filePicker">
                    <img src="../assets/icons/get_app-black-18dp.svg" alt="logo_upload"/>
                    <span>Files</span>
                    <input type="file" multiple="multiple" @change="loadFiles">
                </label>
                <div class="imgListPreview">
                    <div @click="removeImg(index)" class="divPreview" v-for="(file, index) in listFiles" :key="index">
                        <span class="fileName">{{ file.name.toLowerCase() }}</span>
                        <img class="imgPreview" :src=getFileObjectUrl(file) :alt=file.fileName />
                        <img class="clearImg" src="../assets/icons/clear.svg" alt="clear_logo"/>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import {Action, Getter} from "vuex-class";
    import axiosCreatiview from "@/axios/axiosCreatiview";

    @Component
    export default class CvAddGallery extends Vue {
        @Getter('isConnectedAsAdmin', { namespace: 'user'}) connectedAsAdmin!: boolean;
        @Action('showLoginModal', { namespace: 'user'}) showLoginModal: any;

        listFiles: any[] = [];
        galleryName: string|null = null;
        descriptionFr: string|null = null;
        descriptionEn: string|null = null;
        disableSending = false;

        async postGallery(){
            try{
                this.disableSending = true;
                const formData = new FormData();
                this.listFiles.forEach(file => {
                    formData.append(`photo`, file, file.name);
                })
                if(this.descriptionFr && this.descriptionEn && this.galleryName) {
                    formData.append('descriptionFr', this.descriptionFr);
                    formData.append('descriptionEn', this.descriptionEn);
                    formData.append('galleryName', this.galleryName);
                }
                await axiosCreatiview.post('/gallery', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
            }catch(error){
                if(error.response.status === 401){
                    this.showLoginModal();
                }
            }finally{
                this.disableSending = false;
            }
        }

        loadFiles(event: any){
            event.target.files.forEach((eventFile: any) => {
                this.listFiles.push(eventFile);
            });
        }

        removeImg(index: number){
            this.listFiles.splice(index, 1);
        }

        getFileObjectUrl(file: any){
            return URL.createObjectURL(file);
        }
    }
</script>

<style scoped>
    form{
        display: flex;
    }

    .descriptionPart, .imgPart{
        width: 50%;
    }

    .descriptionPart label{
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        margin-bottom: 3vh;
    }

    .descriptionPart label:first-child{
        margin-top: 1vh;
    }

    label span{
        display: block;
        width: 30%;
    }

    input[type="text"]{
        border-radius: 25px;
        border: solid 1px #005082;
        padding: 0.2vh 2%;
        font-size: large;
        color: #005082;
    }

    textarea{
        resize: none;
        border-radius: 25px;
        padding: 0.2vh 2%;
        width: 60%;
        height: 20vh;
        border: 1px solid #005082;
        color: #005082;
    }

    button[type="submit"]{
        background-color: #005082;
        color: white;
        padding: 1vh 5%;
        border: none;
        font-size: large;
        cursor: pointer;
    }

    .imgListPreview{
        margin-top: 2vh;
        overflow-y: scroll;
        height: 80vh;
    }

    .fileName{
        color: #005082;
    }

    .divPreview{
        position: relative;
    }

    .divPreview:not(:first-child){
        margin-top: 2vh;
        margin-bottom: 2vh;
    }

    .imgPreview {
        width: 100%;
    }

    input[type="file"]{
        display: none;
    }

    .clearImg{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
    }

    .clearImg:hover{
        opacity: 0.8;
    }

    .filePicker{
        background-color: #005082;
        color: white;
        padding: 1vh 3%;
        margin-top: 1vh;
        width: 10%;
        cursor: pointer;
        display: flex;
        justify-content: space-around;
    }
</style>