<template>
    <div class="mainPage">
        <h1>Conditions générales</h1>
        <div>
            <section>
                <h2>1. Propriétaire du site web</h2>
                <p>
                    Ce site web appartient à Creatiview. Toutes les photos s'y trouvant sont protégées par la loi sur le copyright.
                </p>
            </section>
            <section>
                <h2>2. Votre utilisation des photos</h2>
                <p>
                    Si vous décidez d'utiliser une photo présente sur le site web, vous ne pouvez ni la reproduire, ni la modifier, ni l'afficher,
                    ni la transmettre, ni la ditribuer de quelconque manière que ce soit sans l'accord écrit de Creatiview.
                </p>
                <p>
                    Vous avez néamoins l'authorisation de partager l'ensemble des photos sur les réseaux sociaux ou sites web à condition de faire une référence explicite au site "www.creatiview.be".
                </p>
                <p>
                    Vous avez néanmoins l'authorisation de faire imprimer et afficher la photo si elle se trouve dans un espace privé et personnel (maison, appartement, ...).
                </p>
                <p>
                    Vous ne pouvez pas afficher, sans l'accord écrit de Creatiview, une photo dans un bureau, un hall d'entrée ou tout autre espace public.
                </p>
            </section>
            <section>
                <h2>3. Politique d'indémnisation</h2>
                <p>
                    Si toutefois, vous utilisez les photos présentes sur le site sans accord écrit, vous serez poursuivi pour violation des droits de propriété intellectuelle.
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