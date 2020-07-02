<template>
    <div class="mainPage">
        <h1 class="title">{{ $t("galleryMessage.titleAskingOriginal") }}</h1>
        <div class="donate">
            <img class="askingImg" :src="srcImg" alt="asking image"/>
            <section>
                <p>{{ $t("galleryMessage.p1AskingOriginal") }}</p>
                <p>{{ $t("galleryMessage.p2AskingOriginal") }}</p>
                <p class="biggerGap">
                    {{ $t("galleryMessage.p3AskingOriginal") }}
                    <router-link class="contactLink" to="/contact">{{ $t("galleryMessage.p3bisAskingOriginal") }}</router-link>
                    {{ $t("galleryMessage.p3bis2AskingOriginal") }}
                    <router-link class="contactLink" to="/termsOfUse">{{ $t("galleryMessage.p3bis3AskingOriginal")}}</router-link>
                </p>
                <p>{{ $t("galleryMessage.p4AskingOriginal") }} 😄</p>
                <p>
                    {{ $t("galleryMessage.p5") }}
                    <span class="account">{{ $t("galleryMessage.p5Account") }}</span>
                </p>
                <CvDonateForm :photo-id="$route.params.idPhoto"/>
                <p>

                </p>
            </section>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import CvDonateForm from "@/components/CvDonateForm.vue";
    @Component({
        components: {CvDonateForm}
    })
    export default class CvAskingOriginal extends Vue {


        get srcImg(){
            return `${process.env.VUE_APP_URL_CREATIVIEW}/pictures/${this.$route.params.idPhoto}`;
        }
    }
</script>

<style scoped>
    .title{
        margin-top: 2vh;
        margin-bottom: 2vh;
        color: #005082;
        border-bottom: solid 5px #FFA41B;
    }

    .donate{
        display: flex;
        flex-direction: column;
    }

    .contactLink{
        color: #005082;
        font-weight: bold;
    }

    .donate p{
        margin-bottom: 0.5vh;
    }

    .donate .biggerGap{
        margin-bottom: 1.5vh;
    }

    .donate img{
        width: 100%;
        height: auto;
        margin-bottom: 2vh;
    }

    .account{
        display: block;
        color: #005082;
        font-weight: bolder;
    }

    @media(min-width: 900px){
        .donate{
            flex-direction: row-reverse;
            justify-content: space-between;
        }

        .donate img{
            width: 40%;
            align-self: start;
        }

        .donate section{
            width: 55%;
        }
    }
</style>