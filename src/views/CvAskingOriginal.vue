<template>
    <div class="mainPage">
        <h1 class="title">{{ $t("galleryMessage.titleAskingOriginal") }}</h1>
        <div class="donate">
            <img class="askingImg" :src="srcImg" alt="asking image"/>
            <section>
                <p>{{ $t("galleryMessage.p1AskingOriginal") }}</p>
                <p>{{ $t("galleryMessage.p2AskingOriginal") }}</p>
                <p>{{ $t("galleryMessage.p3AskingOriginal") }}</p>
                <p class="biggerGap">{{ $t("galleryMessage.p4AskingOriginal") }}
                    <router-link class="contactLink" to="/contact">{{ $t("galleryMessage.p4bisAskingOriginal") }}</router-link>
                </p>
                <p>{{ $t("galleryMessage.p5AskingOriginal") }} 😄</p>
                <form class="formDonate" v-on:submit.prevent="submitDonation" novalidate="novalidate">
                    <label class="labelAmount">
                        <span>{{ $t("galleryMessage.amount")}}</span>
                        <input type="number" v-model="donationAmount"/>
                    </label>
                    <span class="euro">€</span>
                    <button type="submit" class="donateLink">{{ $t("galleryMessage.buttonAskingOriginal")}}</button>
                </form>
                <p>

                </p>
            </section>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class CvAskingOriginal extends Vue {
        donationAmount = null;

        get srcImg(){
            return `${process.env.VUE_APP_URL_CREATIVIEW}/pictures/${this.$route.params.idPhoto}`;
        }

        submitDonation(){
            console.log('test');
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
        justify-content: space-between;
        flex-wrap: wrap;
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

    .donateLink{
        cursor: pointer;
        font-size: large;
        background-color: #005082;
        color: white;
        padding: 1vh 5%;
        border: none;
        text-decoration: none;
        margin-top: 2vh;
    }

    .donate img{
        width: 100%;
        margin-bottom: 2vh;
    }

    .labelAmount{
        margin-top: 2vh;
        display: flex;
        flex-direction: column;
        color: #005082;
        width: 30%;
        margin-right: 1%;
    }

    .euro{
        margin-right: 5%;
        font-size: xx-large;
        color: #005082;
    }

    input[type="number"]{
        border: solid 1px #005082;
        width: 97%;
        font-size: large;
        padding-top: 1vh;
        padding-bottom: 1vh;
        padding-left: 3%;
        -moz-appearance: textfield;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .formDonate{
        display: flex;
        align-items: flex-end;
        margin-bottom: 2vh;
    }

    @media(min-width: 900px){
        .donate{
            flex-direction: row-reverse;
        }

        .donate img{
            width: 40%;
        }

        .donate section{
            width: 55%;
        }

        .euro{
            font-size: 42px;
        }
    }
</style>