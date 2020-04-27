<template>
    <div class="mainPage">
        <div v-if="connectedAsAdmin" class="adminAction">
            <a @click="postGallery" class="addGallery">Add gallery</a>
        </div>
        <CvLoginModal :as-modal="true"/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import {Getter, Action} from "vuex-class";
    import axiosCreatiview from "@/axios/axiosCreatiview";
    import CvLoginModal from "@/components/CvLoginModal.vue";
    @Component({
        components: {CvLoginModal}
    })
    export default class CvGallery extends Vue{
        @Getter('isConnectedAsAdmin', { namespace: 'user'}) connectedAsAdmin!: boolean;
        @Action('showLoginModal', { namespace: 'user'}) showLoginModal: any;

        async postGallery(){
            try{
                const response = await axiosCreatiview.post('/gallery');
            }catch(error){
                if(error.response.status === 401){
                    this.showLoginModal();
                }
                console.log(error);
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
    }
</style>