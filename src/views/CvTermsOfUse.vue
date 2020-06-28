<template>
    <div class="mainPage">
        <h1>{{ $t('termsOfUseMessage.termsAndCondition') }}</h1>
        <div>
            <section>
                <h2>1. {{ $t('termsOfUseMessage.titleOwner') }}</h2>
                <p>
                    {{ $t('termsOfUseMessage.pOwner') }}
                </p>
            </section>
            <section>
                <h2>2. {{ $t('termsOfUseMessage.titleUsing') }}</h2>
                <p>
                    {{ $t('termsOfUseMessage.p1Using') }}
                </p>
                <p>
                    {{ $t('termsOfUseMessage.p2Using') }}
                </p>
                <p>
                    {{ $t('termsOfUseMessage.p3Using') }}
                </p>
                <p>
                    {{ $t('termsOfUseMessage.p4Using') }}
                </p>
            </section>
            <section>
                <h2>3. {{ $t('termsOfUseMessage.titleCompensation') }}</h2>
                <p>
                    {{ $t('termsOfUseMessage.pCompensation') }}
                </p>
            </section>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class CvTermsOfUse extends Vue{
    }
</script>

<style scoped>
    h1{
        color: #005082;
        font-weight: normal;
        margin-top: 2vh;
        border-bottom: solid 5px #FFA41B;
    }

    h2{
        color: #005082;
        padding-bottom: 1vh;
    }

    section{
        padding-bottom: 2vh;
    }

    p{
        margin-bottom: 0.5vh;
    }

    div{
        margin-top: 2vh;
        margin-bottom: 2vh;
    }
</style>