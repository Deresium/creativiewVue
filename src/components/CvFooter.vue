<template>
    <footer :class="showFooter">
        <section>
            <h2>{{ $t('homeMessage.contactMe') }}</h2>
            <a href="mailto:dimitri.steinbusch@creatiview.be">dimitri.steinbusch@creatiview.be</a>
            <a href="tel:0032476691674">+32 476 69 16 74</a>
        </section>
        <section>
            <h2>{{ $t('homeMessage.followMe') }}</h2>
             <a href="https://www.facebook.com/Creatiview-115424323438636" target="_blank" rel="noopener">Facebook</a>
        </section>
        <section>
            <h2>{{ $t('homeMessage.explore') }}</h2>
            <router-link to="/gallery">{{ $t('homeMessage.gallery') }}</router-link>
            <router-link to="/needWebsite">{{ $t('homeMessage.needAWebsite') }}</router-link>
            <router-link to="/aboutMe">{{ $t('homeMessage.aboutMe') }}</router-link>
        </section>
        <section>
            <h2>{{ $t('homeMessage.legal') }}</h2>
            <router-link to="/termsOfUse">{{ $t('termsOfUseMessage.termsAndCondition') }}</router-link>
        </section>
        <section>
            <h2>{{ $t('homeMessage.language') }}</h2>
            <p @click="frLang">{{ $t('homeMessage.french') }}</p>
            <p @click="enLang">{{ $t('homeMessage.english') }}</p>
        </section>
        <section class="copyright">
            <p>© Copyright 2020, Creatiview.be. All rights reserved.</p>
            <router-link :to="{name: 'Credits'}">Credits</router-link>
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
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
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

        .copyright a{
            text-align: left;
        }
    }
</style>