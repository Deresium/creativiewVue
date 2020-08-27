<template>
    <div class="mainPage">
        <h1>Contact</h1>
        <div class="mainContact">
            <CvContactForm class="contactForm"/>
            <section class="info">
                <section>
                    <a href="mailto:dimitri.steinbusch@creatiview.be">dimitri.steinbusch@creatiview.be</a>
                    <a href="tel:0032476691674">+32 476 69 16 74</a>
                    <div class="socialIcons">
                        <a href="https://www.linkedin.com/in/dimitri-steinbusch-239878129/" target="_blank" rel="noopener">
                            <img class="socialImg" src="../assets/linkedin.png" alt="linkedin icon"/>
                        </a>
                        <a href="https://www.facebook.com/dimitri.steinbusch.7" target="_blank" rel="noopener">
                            <img class="socialImg" src="../assets/fb_icon.png" alt="facebook icon"/>
                        </a>
                    </div>
                </section>
            </section>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import CvContactForm from "@/components/CvContactForm.vue";
    @Component({
        components: {CvContactForm}
    })
    export default class CvContact extends Vue {
    }
</script>

<style scoped>
    h1{
        color: #005082;
        font-weight: normal;
        margin-top: 2vh;
        border-bottom: solid 5px #FFA41B;
    }

    .info{
        margin-top: 2vh;
    }

    .info h2{
        color: #005082;
    }

    .info a{
        display: block;
        margin-top: 1vh;
        margin-bottom: 1vh;
        margin-right: 5%;
        color: #005082;
        font-size: larger;
    }

    .socialImg{
        height: 8vh;
    }

    .socialIcons{
        display: flex;
        width: 100%;
    }

    @media(min-width: 900px){
        .mainContact{
            display: flex;
        }

        .contactForm, .info{
            width: 50%;
        }

        .info{
            display: flex;
            justify-content: center;
        }

        .info a{
            text-align: center;
            margin-top: 0;
        }

        .socialIcons{
            justify-content: center;
        }

        .socialImg{
            height: 5vh;
        }
    }
</style>