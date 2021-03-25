<template>
    <div>
        <div class="content">
            <div class="titleAndSlogan">
                <CvTextSlogant class="svgLogo"/>
                <p>Website Creation <span class="orange">&</span> Full Stack Development</p>
            </div>
            <div class="mainActions">
                <router-link to="/aboutMe/presentation">About Me</router-link>
                <router-link to="/needWebsite">{{$t('homeMessage.needAWebsite')}}</router-link>
                <router-link to="/gallery">My Pictures</router-link>
            </div>
        </div>
        <div class="background">
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
        flex-direction: column;
        align-items: center;
        margin-top: 100px;
        width: 100%;
    }

    .mainActions > a{
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #005082;
        border: 1px solid #005082;
        text-decoration: none;
        padding: 1vh 2vw 1vh 2vw;
        background-color: rgba(255, 255, 255, .8);
        font-size: x-large;
        font-weight: 300;
        margin-bottom: 20px;
    }

    .titleAndSlogan{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .titleAndSlogan p{
        font-size: 30px;
        text-align: center;
        font-family: 'Anton', sans-serif;
        color: #005082;
    }

    .titleAndSlogan p .orange{
        font-family: 'Anton', sans-serif;
        color: #FFA41B;
    }

    .svgLogo{
        width: 80%;
    }

    .background{
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        z-index: 0;
        width: 100vw;
        height: 100vh;
        background-image: url("../assets/hero.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .whiter{
        position: fixed;
        top: 0;
        z-index: 1;
        width: 100vw;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.5);
    }

    @media(min-width: 900px){
        .svgLogo{
            width: 70%;
        }

        .content{
            margin-top: 20vh;
        }

        .mainActions{
            width: 90%;
        }


        .mainActions > a{
            font-size: x-large;
            width: 25%;
        }

        .titleAndSlogan p {
            font-size: 50px;
        }

        .mainActions{
            flex-direction: row;
            justify-content: space-between;
        }
    }

    @media(min-width: 1400px){
        .svgLogo{
            width: 50%;
        }
    }
</style>
