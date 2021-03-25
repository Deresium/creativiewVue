<template>
    <div class="mainPage">
        <div class="title">
            <h1>{{ $t('needWebsiteMessages.title') }}</h1>
            <h2>{{ $t('needWebsiteMessages.subtitle') }}</h2>
        </div>

        <h3>{{ $t('needWebsiteMessages.whyCreatiview') }}</h3>
        <div class="cards">
            <div class="card">
                <h4>{{ $t('needWebsiteMessages.singlePointOfContact') }}</h4>
                <p>{{ $t('needWebsiteMessages.singlePointOfContactMessage1') }}</p>
                <p>{{ $t('needWebsiteMessages.singlePointOfContactMessage2') }}
                    <router-link :to="{name: 'Presentation'}"
                       target="_blank">{{ $t('needWebsiteMessages.singlePointOfContactMessage3') }}</router-link>
                    {{ $t('needWebsiteMessages.singlePointOfContactMessage4') }}</p>
            </div>

            <div class="card">
                <h4>{{ $t('needWebsiteMessages.madeToMeasure') }}</h4>
                <p>{{ $t('needWebsiteMessages.madeToMeasureMessage1') }}</p>
                <p>{{ $t('needWebsiteMessages.madeToMeasureMessage2') }}</p>
            </div>

            <div class="card">
                <h4>{{ $t('needWebsiteMessages.skill') }}</h4>
                <p>{{ $t('needWebsiteMessages.skillMessage1') }}</p>
                <p>{{ $t('needWebsiteMessages.skillMessage2') }}</p>
            </div>

            <div class="card">
                <h4>{{ $t('needWebsiteMessages.free') }}</h4>
                <p>{{ $t('needWebsiteMessages.freeMessage1') }}</p>
                <p>{{ $t('needWebsiteMessages.freeMessage2') }}</p>
            </div>

            <div class="card">
                <h4>{{ $t('needWebsiteMessages.projectMonitoring') }}</h4>
                <p>{{ $t('needWebsiteMessages.projectMonitoringMessage1') }}</p>
                <p>{{ $t('needWebsiteMessages.projectMonitoringMessage2') }}</p>
                <p>{{ $t('needWebsiteMessages.projectMonitoringMessage3') }}</p>
            </div>

            <div class="card">
                <h4>{{ $t('needWebsiteMessages.fairPrice') }}</h4>
                <p>{{ $t('needWebsiteMessages.fairPriceMessage1') }}</p>
                <p>{{ $t('needWebsiteMessages.fairPriceMessage2') }}</p>
                <p>{{ $t('needWebsiteMessages.fairPriceMessage3') }}</p>
            </div>
        </div>

        <h3>Mes projets</h3>
        <div class="projects">

            <div class="project">
                <h4>Cable & Network</h4>
                <a href="https://www.c-n.be" target="_blank" rel="noopener">
                    <span>www.c-n.be</span>
                </a>
                <div class="content">
                    <a href="https://www.c-n.be" target="_blank" rel="noopener">
                        <img src="../assets/projects/cn.png" alt="cn picture"/>
                    </a>
                    <div class="description">
                        <p>{{ $t('needWebsiteMessages.cnMessage1') }}</p>
                    </div>
                </div>
            </div>

            <div class="project">
                <h4>Samplier</h4>
                <a href="https://www.samplier.be" target="_blank" rel="noopener">
                    <span>www.samplier.be</span>
                </a>
                <div class="content">
                    <a href="https://www.samplier.be" target="_blank" rel="noopener">
                        <img src="../assets/projects/samplier.png" alt="samplier picture"/>
                    </a>
                    <div class="description">
                        <p>{{ $t('needWebsiteMessages.samplierMessage1') }}</p>
                    </div>
                </div>
            </div>

            <div class="project">
                <h4>ULiège</h4>
                <div class="content">
                    <img class="uliege" src="../assets/projects/uliege.png" alt="uliege picture"/>
                    <div class="description">
                        <p>{{ $t('needWebsiteMessages.uliegeMessage1') }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="end">
            <p>{{ $t('needWebsiteMessages.subtitle') }}</p>
            <router-link class="contactMe" :to="{name:'contact'}">{{ $t('needWebsiteMessages.contact') }}</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class CvNeedWebsite extends Vue {
    get pathToPdf() {
        return `${process.env.BASE_URL}commands.pdf#zoom=100`;
    }

}
</script>

<style scoped>
.mainPage {
    margin-top: 30px;
}

.title {
    margin-bottom: 30px;
}

p {
    margin-bottom: 10px;
    font-weight: normal;
}

h2 {
    color: #005082;
    font-weight: 300;
}

h3 {
    color: #005082;
    font-size: x-large;
    font-weight: 300;
}

h4{
    font-weight: normal;
    font-size: large;
    margin-bottom: 10px;
}

.cards{
    margin-top: 10px;
    margin-bottom: 60px;
}

.card{
    color: #005082;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    box-shadow: -3px 5px rgba(0, 80, 130, .5);
}

.card a{
    color: #005082;
    font-weight: bold;
    text-decoration: none;
}



.contactMe {
    display: inline-block;
    font-size: x-large;
    text-decoration: none;
    color: #005082;
    border: 1px solid #005082;
    padding: 10px;
    margin-bottom: 20px;
}

.projects{
    margin-top: 10px;
    margin-bottom: 40px;
}

.project h4{
    font-size: x-large;
    font-weight: 300;
}

.project{
    color: #005082;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    border-radius: 10px;
    box-shadow: -3px 5px rgba(255, 164, 27, .5);
}

.project a{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #005082;
}

.project img{
    width: 80%;
    border-radius: 10px;
    margin-top: 10px;
}

.description p{
    margin-top: 10px;
    text-align: center;
    color: #005082;
}

.end p{
    text-align: center;
    font-size: x-large;
    color: #005082;
}

.end{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
    margin-top: 100px;
}

@media (min-width: 900px) {
    .content{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .content a{
        width: 50%;
    }

    .content div{
        width: 50%;
    }

    img.uliege{
        width: 30%;
    }
}

</style>