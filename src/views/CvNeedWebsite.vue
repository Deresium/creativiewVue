<template>
    <div class="mainPage">
        <section class="title">
            <h1>{{ $t('needWebsiteMessages.title') }}</h1>
            <h2>{{ $t('needWebsiteMessages.subtitle') }}</h2>
        </section>
        <section class="whyWebsite">
            <h3>{{ $t('needWebsiteMessages.whyWebsite') }}</h3>
            <section class="cardList">
                <div class="card">
                    <h4>{{ $t("needWebsiteMessages.visibility") }}</h4>
                    <img src="../assets/icons/world.svg" alt="world icon"/>
                </div>
                <div class="card">
                    <h4>{{ $t("needWebsiteMessages.eShop") }}</h4>
                    <img src="../assets/icons/shopping_basket.svg" alt="shopping basket icon"/>
                </div>
                <div class="card">
                    <h4>{{ $t("needWebsiteMessages.automation") }}</h4>
                    <img src="../assets/icons/cached.svg" alt="cached icon"/>
                </div>
                <div class="card">
                    <h4>{{ $t("needWebsiteMessages.facility") }}</h4>
                    <img src="../assets/icons/thumb_up.svg" alt="thumb up icon"/>
                </div>
                <div class="card">
                    <h4>{{ $t("needWebsiteMessages.timeSaver") }}</h4>
                    <img src="../assets/icons/schedule.svg" alt="schedule icon"/>
                </div>
                <div class="card">
                    <h4>{{ $t("needWebsiteMessages.paperless") }}</h4>
                    <img src="../assets/icons/nature.svg" alt="nature icon"/>
                </div>
            </section>
        </section>
        <section class="process">
            <h3> {{ $t("needWebsiteMessages.process") }}</h3>
            <section class="cardList">
                <div class="card">
                    <h4>{{ $t("needWebsiteMessages.analyse") }}</h4>
                    <img src="../assets/icons/chat.svg" alt="chat icon"/>
                </div>
                <div class="card">
                    <h4>{{ $t("needWebsiteMessages.design") }}</h4>
                    <img src="../assets/icons/view_quilt.svg" alt="design icon"/>
                </div>
                <div class="card">
                    <h4>{{ $t("needWebsiteMessages.development") }}</h4>
                    <img src="../assets/icons/code.svg" alt="code icon"/>
                </div>
                <div class="card">
                    <h4>{{ $t("needWebsiteMessages.delivery") }}</h4>
                    <img src="../assets/icons/local_shipping.svg" alt="delivery icon"/>
                </div>
            </section>
        </section>
        <section class="contact">
            <span>{{ $t("needWebsiteMessages.waiting")}} </span>
            <router-link to="/contact">{{ $t("needWebsiteMessages.contact")}}</router-link>
        </section>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class CvNeedWebsite extends Vue {
    }
</script>

<style scoped>
    .title{
        margin-top: 2vh;
        margin-bottom: 2vh;
        border-bottom: solid 5px #FFA41B;
    }

    .title h1, .title h2, h3{
        font-weight: normal;
        color: #005082;
    }

    .title h1{
        font-size: xx-large;
    }

    h3{
        display: inline-block;
        border-bottom: solid 3px #FFA41B;
        margin-top: 3vh;
    }

    .cardList{
        display: flex;
        flex-wrap: wrap;
    }

    .card{
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        background-color: #005082;
        color: white;
        padding-top: 2vh;
        padding-bottom: 2vh;
        margin-top: 2vh;
        margin-bottom: 1vh;
        border-radius: 25px;
    }

    .card img{
        height: 15vh;
    }

    .card h4{
        font-size: large;
        margin-bottom: 2vh;
        text-align: center;
    }

    .process{
        margin-top: 3vh;
    }

    .contact{
        margin-top: 4vh;
        margin-bottom: 4vh;
        color: white;
        font-size: large;
        background-color: #005082;
        padding: 2vh 2%;
        text-align: center;
        border-radius: 25px;
    }

    .contact a{
        color: #FFA41B;
        font-weight: bold;
    }

    @media(min-width: 900px){
        .cardList{
            justify-content: space-between;
        }

        .card{
            width: 13%;
            padding-left: 1%;
            padding-right: 1%;
        }

        .card img{
            height: 5vh;
        }

        .card h4{
            height: 4vh;
        }

        h3{
            margin-top: 2vh;
        }

        .process{
            margin-top: 2vh;
        }

        .title{
            margin-bottom: 0;
        }
    }

</style>