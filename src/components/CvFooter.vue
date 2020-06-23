<template>
    <footer :class="showFooter">
        <section>
            <h2>Contact me</h2>
            <a href="mailto:dimitri.steinbusch@hotmail.com">dimitri.steinbusch@hotmail.com</a>
            <a href="tel:0032476691674">+32 476 69 16 74</a>
        </section>
        <section>
            <h2>Follow me</h2>
             <a href="https://www.facebook.com/Creatiview-115424323438636" target="_blank">Facebook</a>
        </section>
        <section>
            <h2>Explore</h2>
            <router-link to="/gallery">Gallery</router-link>
            <router-link to="/needWebsite">Need a website?</router-link>
            <router-link to="/aboutMe">About Me</router-link>
        </section>
        <section>
            <h2>Legal</h2>
            <router-link to="/termsOfUse">Conditions générales</router-link>
        </section>
        <section>
            <h2>Language</h2>
            <p @click="frLang">Français</p>
            <p @click="enLang">English</p>
        </section>
        <section class="copyright">
            <p>© Copyright 2020, Creatiview.be. All rights reserved.</p>
        </section>
    </footer>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import {Getter} from "vuex-class";

    @Component
    export default class CvFooter extends Vue {
        @Getter('showBackgroundColor', {namespace: 'navbar'}) showBackground!: boolean;

        get showFooter(){
            return{
                'noneDisplay': !this.showBackground
            }
        }

        frLang(){
            this.$i18n.locale = 'fr';
            this.$cookies.set('lang', 'fr');
        }

        enLang(){
            this.$i18n.locale = 'en';
            this.$cookies.set('lang', 'en');
        }
    }
</script>

<style scoped>
    footer{
        background-color: #005082;
        color: white;
    }

    .noneDisplay{
        display: none;
    }

    section{
        padding-top: 2vh;
        padding-bottom: 2vh;
        text-align: center;
    }

    h2{
        font-weight: bold;
        font-size: medium;
        margin-bottom: 1vh;
    }

    a{
        color: white;
        text-decoration: none;
        display: block;
        margin-bottom: 0.5vh;
    }

    p{
        margin-bottom: 0.5vh;
        cursor: pointer;
    }

    .copyright{
        font-size: small;
    }

    @media(min-width: 900px){
        footer{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: baseline;
            padding-left: 5%;
            padding-right: 5%;
        }

        .copyright{
            align-self: flex-end;
        }
    }
</style>