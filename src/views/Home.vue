<template>
    <div>
        <div class="content">
            <div class="titleAndSlogan">
                <CvTextSlogant class="svgLogo"/>
                <p>Website Creation <span class="orange">&</span> Full Stack Development</p>
            </div>
            <div class="catchBlock">
                <p class="catchPhrase">
                    {{$t('homeMessage.catchPhraseBegin')}}
                    <span class="orange">{{$t('homeMessage.catchPhraseUnderstand')}}</span>
                    {{$t('homeMessage.catchPhraseAnd')}}
                    <span class="orange">{{$t('homeMessage.catchPhraseDevelop')}}</span>
                    {{$t('homeMessage.catchPhraseLa')}}
                    <span class="orange">{{$t('homeMessage.catchPhraseWebSolution')}}</span>
                    {{$t('homeMessage.catchPhraseEnd')}}
                </p>
                <div class="catchButtons">
                    <router-link to="/talk" class="catchButtonSpeak">{{$t('homeMessage.catchButtonSpeak')}}</router-link>
                    <router-link to="/gallery" class="catchButtonPictures">{{$t('homeMessage.myPictures')}}</router-link>
                </div>
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

        z-index: 2;
        margin-top: 15vh;
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
        background-color: rgba(255, 255, 255, 0.7);
    }

    .catchBlock{
        display: flex;
        flex-direction: column;
        margin: 30px 10px 20px 10px;
    }

    .catchPhrase{
        font-weight: 300;
        font-size: large;
        text-align: left;
        color: #005082;
    }

    .catchPhrase .orange{
        display: inline-block;
        padding: 2px;
        margin-top: 1px;
        margin-bottom: 1px;
        color: #FFA41B;
        background-color: #005082;
    }

    .catchButtons{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 20px;
    }

    .catchButtons a {
        text-decoration: none;
        border: 1px solid #005082;
        border-radius: 5px;
        cursor: pointer;
    }

    .catchButtonSpeak{
        display: block;
        font-weight: 300;
        font-size: large;
        color: #005082;
        background-color: rgba(255, 164, 27, 0.9);
        padding: 10px;
        margin-bottom: 10px;
    }

    .catchButtonPictures{
        color: #005082;
        font-weight: 300;
        background-color: rgba(255, 255, 255, 0.3);
        padding: 7px;
    }

    @media(min-width: 900px){
        .svgLogo{
            width: 70%;
        }

        .content{
            margin-top: 1vh;
        }

        .catchBlock{
            margin-top: 100px;
            margin-left: 5%;
        }

        .catchPhrase{
            font-size: xx-large;
        }

        .catchButtonSpeak{
            font-size: xx-large;
        }

        .catchButtonPictures{
            font-size: x-large;
        }


        .titleAndSlogan p {
            font-size: 70px;
        }
    }

    @media(min-width: 1400px){
        .svgLogo{
            width: 50%;
        }
    }
</style>
