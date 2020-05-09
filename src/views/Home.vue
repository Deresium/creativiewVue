<template>
    <div>
        <div class="content">
            <CvTextSlogant class="svgLogo"/>
            <div class="mainActions">
                <router-link to="/gallery">Visit Gallery</router-link>
                <router-link to="/">Need a website?</router-link>
            </div>
        </div>
        <div class="background">
            <img class="heroImg" src="../assets/hero.jpg" alt="heroImg"/>
        </div>
        <div class="whiter"></div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import CvTextSlogant from "@/components/commons/CvTextSlogant.vue";
    import {Action} from "vuex-class";

    @Component({
        components: {CvTextSlogant}
    })
    export default class Home extends Vue {
        @Action('showBackgroundColor', { namespace: 'navbar'}) showBackgroundColor: any;
        @Action('hideBackgroundColor', { namespace: 'navbar'}) hideBackgroundColor: any;
        created(){
            this.hideBackgroundColor();
        }
        destroyed(){
            this.showBackgroundColor();
        }
    }
</script>

<style scoped>
    .content{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 2;
        margin-top: 15vh;
    }

    .mainActions{
        display: flex;
        justify-content: space-between;
        margin-top: 5vh;
        width: 90%;
        align-items: stretch;
    }

    .mainActions > a{
        width: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: white;
        text-decoration: none;
        padding: 1vh 2vw 1vh 2vw;
        background-color: #005082;
        font-size: x-large;
        font-weight: 300;
    }

    .svgLogo{
        width: 80%;
    }

    .background{
        position: fixed;
        top: 0;
        z-index: 0;
        width: 100vw;
        height: 100vh;
    }

    .whiter{
        position: fixed;
        top: 0;
        z-index: 1;
        width: 100vw;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.5);
    }

    .background > img{
        width: 100%;
        height: 100%;
    }

    @media(min-width: 900px){
        .svgLogo{
            width: 70%;
        }

        .content{
            margin-top: 5vh;
        }

        .mainActions{
            width: 70%;
        }

        .mainActions > a{
            font-size: xx-large;
            width: 20%;
        }
    }
</style>
