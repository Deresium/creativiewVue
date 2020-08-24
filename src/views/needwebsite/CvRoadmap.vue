<template>
    <div>
        <section>
            <div class="title">
                <span class="number">1</span>
                <h3>{{ $t('needWebsiteMessages.firstContact') }}</h3>
            </div>
            <p>{{ $t('needWebsiteMessages.firstContactp1') }}</p>
        </section>
        <section>
            <div class="title">
                <span class="number">2</span>
                <h3>{{ $t('needWebsiteMessages.lfInterface') }}</h3>
            </div>
            <p>{{ $t('needWebsiteMessages.lfInterfacep1') }}</p>
        </section>
        <section>
            <div class="title">
                <span class="number">3</span>
                <h3>{{ $t('needWebsiteMessages.secondContact') }}</h3>
            </div>
            <p>{{ $t('needWebsiteMessages.secondContactp1') }}</p>
        </section>
        <section>
            <div class="title">
                <span class="number">4</span>
                <h3>{{ $t('needWebsiteMessages.design') }}</h3>
            </div>
            <p>{{ $t('needWebsiteMessages.designp1') }}</p>
        </section>
        <section>
            <div class="title">
                <span class="number">5</span>
                <h3>{{ $t('needWebsiteMessages.development') }}</h3>
            </div>
            <p>{{ $t('needWebsiteMessages.developmentp1') }}</p>
        </section>
        <section>
            <div class="title">
                <span class="number">6</span>
                <h3>{{ $t('needWebsiteMessages.delivery') }}</h3>
            </div>
            <p>{{ $t('needWebsiteMessages.deliveryp1') }}</p>
        </section>
        <section>
            <div class="title">
                <span class="number">7</span>
                <h3>{{ $t('needWebsiteMessages.maintenance') }}</h3>
            </div>
            <p>{{ $t('needWebsiteMessages.maintenancep1') }}</p>
        </section>
        <section>
            <div class="title">
                <span class="number">8</span>
                <h3>{{ $t('needWebsiteMessages.newFeature') }}</h3>
            </div>
            <p>{{ $t('needWebsiteMessages.newFeaturep1') }}</p>
        </section>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CvRoadmap extends Vue{

}
</script>

<style scoped>
    section{
        margin-bottom: 4vh;
    }

    .number{
        display: block;
        font-weight: bold;
        font-size: xx-large;
        margin-right: 5%;
        color: #005082;
    }
    .title{
        display: flex;
        align-items: center;
        margin-bottom: 1vh;
    }

    h3{
        flex-grow: 1;
        color: #005082;
        border-bottom: 2px solid #FFA41B;
    }

    @media(min-width: 900px){
        .number{
            margin-right: 2%;
        }

        h3{
            max-width: 40%;
        }
    }
</style>