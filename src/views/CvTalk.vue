<template>
    <div class="page">
        <div class="fullSection rocketSection">
            <div class="titleAndButton">
                <p class="title">{{$t('talk.project')}}</p>
                <!--<router-link class="buttonAction buttonRocket" to="/project">{{ $t('talk.myProjects') }}</router-link>-->
            </div>
            <div class="sectionImg rocket">
                <img class="imgIcon" src="../assets/icons/bulb.svg" alt="rocket icon"/>
            </div>
        </div>
        <div class="fullSection bulbSection">
            <div class="sectionImg bulb">
                <img class="imgIcon" src="../assets/icons/rocket.svg" alt="bulb icon"/>
            </div>
            <div class="titleAndButton">
                <p class="title">{{$t('talk.applicationIdea')}}</p>
                <router-link class="buttonAction buttonBulb" to="/aboutMe/presentation">{{ $t('talk.aboutMe') }}</router-link>
            </div>
        </div>
        <div class="fullSection rocketSection">
            <div class="titleAndButton">
                <p class="title">{{$t('talk.discuss')}}</p>
            </div>
            <div class="sectionImg rocket">
                <img class="imgIcon" src="../assets/icons/talk.svg" alt="talk icon"/>
            </div>
            <div>
                <p class="subtitle">{{ $t('talk.findSolution') }}</p>
            </div>
            <div class="buttons">
                <div class="buttonCall">
                    <a class="buttonAction" href="tel:0032476691674">{{$t('talk.phone')}}</a>
                    <p class="subtitle link">0032 476 69 16 74</p>
                </div>
                <div class="buttonCall">
                    <a class="buttonAction" href="mailto:dimitri.steinbusch@creatiview.be">Email</a>
                    <p class="subtitle link">dimitri.steinbusch@creatiview.be</p>
                </div>
                <div class="buttonCall">
                    <router-link class="buttonAction" to="/contact">Contact</router-link>
                    <p class="subtitle link">www.creatiview.be/contact</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class CvTalk extends Vue {}
</script>

<style scoped>
.page{
    border-bottom: 1px solid #FFA41B;
}

.fullSection{
    padding: 10% 2% 10% 2%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}
.rocketSection{
    background-color: #005082;
}

.bulbSection{
    background-color: #FFA41B;
}

.title{
    font-size: 40px;
    font-family: 'Anton', sans-serif;
    margin-bottom: 10px;
}

.subtitle{
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    color: #FFA41B;
}

.rocketSection .title{
    color: #FFA41B;
}

.bulbSection .title{
    color: #005082;
}

.titleAndButton{
    width: 65%;
}

.sectionImg{
    width: 30%;
}

.imgIcon{
    width: 100%;
}

.buttonAction{
    display: inline-block;
    text-decoration: none;
    border: 2px solid;
    padding: 10px;
    border-radius: 5px;
    font-size: 20px;
}

.buttonRocket{
    color: #FFA41B;
    border-color: #FFA41B;
    background-color: #005082;
}

.buttonBulb{
    color: #005082;
    border-color: #005082;
    background-color: #FFA41B;
}

.buttons{
    display: flex;
    flex-direction: column;
    color: #FFA41B;
    margin-top: 20px;
    width: 100%;
}

.buttons a{
    color: #FFA41B;
    border-color: #FFA41B;
    margin-bottom: 10px;
}

.buttonCall{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
}

@media(min-width: 900px){
    .title{
        font-size: 80px;
    }

    .buttonAction{
        border-width: 4px;
    }

    .buttonAction{
        font-size: 25px;
    }

    .subtitle{
        font-size: 30px;
    }

    .subtitle.link{
        font-size: 22px;
    }

    .buttonCall{
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .buttons{
        flex-direction: row;
        justify-content: space-between;
    }
}

@media(min-width: 1300px){
    .title{
        font-size: 120px;
    }

    .buttonAction{
        font-size: 35px;
    }

    .subtitle{
        font-size: 40px;
    }

    .subtitle.link{
        font-size: 30px;
    }
}
</style>