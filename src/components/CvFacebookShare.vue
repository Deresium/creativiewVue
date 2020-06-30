<template>
    <button @click="fbSharing">
        <img src="../assets/fb_icon.png" alt="facebook icon"/>
        <span>Share</span>
    </button>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class CvFacebookShare extends Vue {
        @Prop() url!: string;

        fbSharing(){
            // @ts-ignore
            // eslint-disable-next-line no-undef
            FB.ui({
                method: 'share',
                href: this.url
            });
        }
    }
</script>

<style scoped>
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        background-color: #4267b2;
        font-weight: 300;
        font-size: x-large;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        padding-right: 3%;
    }

    button img{
        height: 4vh;
        border-radius: 10px;
    }

    @media(min-width: 900px){
        button{
        }

        button img{
            height: 3vh;
        }
    }
</style>