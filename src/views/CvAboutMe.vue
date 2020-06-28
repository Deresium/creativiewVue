<template>
    <div class="mainPage">
        <h1>About Me</h1>
        <div class="divAboutMe">
            <section>
                <p class="mainWord">Hello !</p>
                <p>{{ $t("aboutMeMessages.p1") }}</p>
                <p>
                    {{ $t("aboutMeMessages.p2") }}
                    <router-link to="/contact">{{ $t("aboutMeMessages.pcontact") }}</router-link>
                    {{ $t("aboutMeMessages.p2end") }}
                </p>
                <p>{{ $t("aboutMeMessages.p3") }}</p>
                <p>{{ $t("aboutMeMessages.p4") }}</p>
                <p>
                    {{ $t("aboutMeMessages.p5") }}
                    <router-link to="/contact">{{ $t("aboutMeMessages.pcontact2") }}</router-link>
                    {{ $t("aboutMeMessages.p5end") }}
                </p>
                <p>{{ $t("aboutMeMessages.p6") }}</p>
                <p>
                    {{ $t("aboutMeMessages.p7") }}
                    <router-link to="/contact">{{ $t("aboutMeMessages.p7contact") }}</router-link>
                    {{ $t("aboutMeMessages.p7end") }}
                </p>
            </section>
            <img src="../assets/aboutMe.jpg" alt="img of me"/>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class CvAboutMe extends Vue{
    }
</script>

<style scoped>
    h1{
        color: #005082;
        font-weight: normal;
        margin-top: 2vh;
        border-bottom: solid 5px #FFA41B;
    }

    .divAboutMe{
        display: flex;
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin-top: 2vh;
        margin-bottom: 2vh;
    }

    .divAboutMe > section{
        background-color: rgba(255, 164, 27, 0.7);
        padding-left: 5%;
        padding-right: 5%;
    }

    section > p{
        margin-bottom: 2vh;
    }

    .divAboutMe > img{
        width: 100%;
    }

    .divAboutMe a{
        text-decoration: none;
        color: #005082;
        font-weight: bolder;
    }

    .mainWord{
        color: #005082;
        font-size: 50px;
        font-family: 'Anton', sans-serif;
    }

    @media(min-width: 900px) {

        .divAboutMe{
            flex-direction: row-reverse;
            justify-content: space-between;
            align-items: stretch;
        }

        .divAboutMe > img{
            width: 40%;
        }

        .divAboutMe > section{
            width: 50%;
            padding: 2vh 5% 2vh 5%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            flex-direction: column;
        }

        section > p {
            margin-bottom: 2vh;
            width: 100%;
        }
    }
</style>