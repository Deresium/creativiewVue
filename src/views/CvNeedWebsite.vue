<template>
    <div>
        <div class="imgContainer">
            <img class="imgNeedWebsite" src="../assets/hero_need_website.jpg" alt="hero needed website"/>
            <div class="divTitle">
                <h1 class="titleOnImg">{{ $t('needWebsiteMessages.title') }}</h1>
                <h2 class="titleOnImg">{{ $t('needWebsiteMessages.subtitle') }}</h2>
            </div>
        </div>
        <div class="mainPage">
            <div id="notSticky"></div>
            <div class="subMenu">
                <router-link :class="checkEmptyRoute" to="/needWebsite/benefits#notSticky">{{ $t('needWebsiteMessages.benefits') }}</router-link>
                <router-link to="/needWebsite/roadmap#notSticky">{{ $t('needWebsiteMessages.roadmap') }}</router-link>
                <!--<router-link to="/needWebsite/technology#notSticky">{{ $t('needWebsiteMessages.technology') }}</router-link>
                <router-link to="/needWebsite/projects#notSticky">{{ $t('needWebsiteMessages.projects') }}</router-link>-->
            </div>
            <router-view/>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class CvNeedWebsite extends Vue {
        get checkEmptyRoute(){
            return{
                'router-link-active': this.$route.name === 'benefits'
            }
        }
    }
</script>

<style scoped>
    .imgContainer{
        position: relative;
    }

    .imgNeedWebsite{
        width: 100%;
    }

    .divTitle{
        position: absolute;
        left: 50%;
        top: 50%;
        width: 90%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .titleOnImg{
        font-weight: 400;
        background-color: rgba(255, 164, 27, 0.95);
        color: #005082;
        text-align: center;
        padding: 1vh 2%;
    }

    h1.titleOnImg{
        font-size: large;
        margin-bottom: 5%;
    }

    h2.titleOnImg{
        font-size: medium;
    }

    .subMenu{
        margin-top: 1vh;
        margin-bottom: 1vh;
        padding-top: 1vh;
        padding-bottom: 1vh;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        position: sticky;
        top: 0;
        background-color: white;
    }

    .subMenu > a{
        display: block;
        text-align: center;
        width: 50%;
        color: #005082;
        text-decoration: none;
        margin-bottom: 1vh;
    }

    .router-link-active{
        border-bottom: 2px solid #005082;
    }

    @media(min-width: 900px){
        .divTitle{
            top: 40%;
        }

        .titleOnImg{
            padding: 1.5vh 3%;
        }

        h1.titleOnImg{
            font-size: xx-large;
            margin-bottom: 2%;
        }

        h2.titleOnImg{
            font-size: x-large;
        }
    }
</style>