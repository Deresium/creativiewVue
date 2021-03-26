<template>
    <div class="mainPage">
        <h1>Contact</h1>
        <div class="mainContact">
            <CvContactForm class="contactForm"/>
            <section class="info">
                <section>
                    <a href="mailto:dimitri.steinbusch@creatiview.be">dimitri.steinbusch@creatiview.be</a>
                    <a href="tel:0032476691674">+32 476 69 16 74</a>
                    <p>TVA: BE0753 863 214</p>
                    <div class="socialIcons">
                        <a href="https://www.linkedin.com/in/dimitri-steinbusch-239878129/" target="_blank" rel="noopener">
                            <img class="socialImg" src="../assets/linkedin.png" alt="linkedin icon"/>
                        </a>
                        <a href="https://www.facebook.com/Creatiview-115424323438636" target="_blank" rel="noopener">
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

    .info{
        margin-top: 2vh;
    }

    .info h2{
        color: #005082;
    }

    .info a, .info p{
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

        .info p{
            text-align: center;
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