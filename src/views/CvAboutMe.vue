<template>
    <div class="mainPage">
        <h1>{{ $t('homeMessage.aboutMe') }}</h1>
        <div class="divAboutMe">
            <section>
                <div class="menu">
                    <router-link :to="{name: 'Presentation'}">{{$t('aboutMeMessages.introduction')}}</router-link>
                    <router-link :to="{name: 'Skills'}">{{$t('aboutMeMessages.skills')}}</router-link>
                </div>
                <div class="wrapper">
                    <transition :name="transitionName" mode="out-in">
                        <router-view/>
                    </transition>
                </div>
            </section>
            <img src="../assets/aboutMe.jpg" alt="img of me"/>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch  } from 'vue-property-decorator';

    @Component
    export default class CvAboutMe extends Vue{
        transitionName = '';
        @Watch('$route',{immediate: true})
        watchRoute(route: any){
            this.transitionName = route.name;
        }
    }
</script>

<style scoped>
    .divAboutMe{
        display: flex;
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-self: center;
        margin-top: 2vh;
        margin-bottom: 2vh;
    }

    .divAboutMe > section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        background-color: rgba(255, 164, 27, 0.7);
        padding-left: 5%;
        padding-right: 5%;
    }

    .divAboutMe > img{
        width: 100%;
        object-fit: contain;
    }

    .menu{
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
        margin-top: 30px;
        width: 100%;
    }

    .menu a{
        display: block;
        color: #005082;
        text-decoration: none;
    }

    a.router-link-active{
        font-weight: bold;
        text-decoration: underline;
    }

    .menu a:last-child{
        margin-left: 20px;
    }

    .wrapper{
        overflow: hidden;
    }

    .contentSlide{
    }

    .Presentation-enter-active{
        animation: slideRightIn .3s forwards;
    }

    .Presentation-leave-active{
        animation: slideRightOut .3s forwards;
    }

    .Skills-enter-active{
        animation: slideLeftIn .3s forwards;
    }

    .Skills-leave-active{
        animation: slideLeftOut .3s forwards;
    }

    @keyframes slideRightOut {
        from{
            transform: translateX(0%);
        }
        to{
            transform: translateX(100%);
        }
    }

    @keyframes slideRightIn {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0%);
        }
    }

    @keyframes slideLeftOut {
        from{
            transform: translateX(0%);
        }
        to{
            transform: translateX(-100%);
        }
    }

    @keyframes slideLeftIn {
        from{
            transform: translateX(100%);
        }
        to{
            transform: translateX(0%);
        }
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
        }

        section > p {
            margin-bottom: 2vh;
            width: 100%;
        }

        .menu{
            align-self: flex-start;
        }
    }

    @media(min-width: 1400px){
        .divAboutMe > img{
            width: 25%;
        }
        .divAboutMe > section{
            width: 65%;
        }

    }
</style>