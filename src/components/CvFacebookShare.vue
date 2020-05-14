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
        @Prop() albumURL!: string;

        fbSharing(){
            // @ts-ignore
            FB.ui({
                method: 'share',
                href: this.albumURL
            }, function(response: any){

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
        padding-right: 2%;
    }

    button img{
        height: 4vh;
        margin-right: 2%;
        border-radius: 10px;
    }

    @media(min-width: 900px){
        button{
            padding-right: 1%;
        }

        button img{
            height: 3vh;
        }
    }
</style>