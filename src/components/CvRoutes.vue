<template>
    <div>
        <div class="menuLinks">
            <!--<div class="loginMenu">
                <router-link to="/">Login</router-link>
                <router-link to="/" id="register">Register</router-link>
            </div>-->
            <div class="otherMenu">
                <router-link to="/">Home</router-link>
                <router-link to="/gallery">Gallery</router-link>
                <router-link to="/needWebsite">Need a website?</router-link>
                <router-link to="/aboutMe">About Me</router-link>
                <router-link to="/contact">Contact</router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class CvRoutes extends Vue {
    }
</script>

<style scoped>
    .menuLinks{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .loginMenu, .otherMenu{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 5vh;
        margin-top: 2vh;
    }

    #register{
        padding: 1vh 10% 1vh 10%;
        background-color: #FFA41B;
        color: black;
    }

    .menuLinks a{
        color: white;
        text-decoration: none;
        font-weight: 300;
        font-size: xx-large;
        margin-bottom: 3vh;
    }

    @media(min-width: 900px) {
        .menuLinks{
            display: block;
            /*flex-direction: row-reverse;
            justify-content: space-between;*/
        }

        .loginMenu, .otherMenu{
            flex-direction: row;

            justify-content: space-between;
            margin-bottom: 0;
            margin-top: 0;
        }

        .loginMenu{
            width: 20%;
        }

        .otherMenu{

        }

        #register{
            padding: 1vh 5% 1vh 5%;
        }

        .menuLinks a{
            margin-bottom: 0;
        }
    }

</style>