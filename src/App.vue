<template>
    <div id="app">
        <div class="exceptFooter">
            <CvNavbar/>
            <router-view/>
        </div>
        <CvFooter/>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import CvNavbar from "@/components/CvNavbar.vue";
    import {Action} from "vuex-class";
    import CvFooter from "@/components/CvFooter.vue";
    @Component({
        components: {CvFooter, CvNavbar}
    })
    export default class App extends Vue {
        @Action('loginUser', {namespace: 'user'}) loginUser: any;
        created(){
            if(this.$cookies.isKey('payload')){
                const payload = this.$cookies.get('payload');
                const decriptPayload = JSON.parse(atob(payload.split('.')[1]));
                this.loginUser(decriptPayload.role);
            }

            if(this.$cookies.isKey('lang')){
                this.$i18n.locale = this.$cookies.get('lang');
            }
        }
    }
</script>

<style>
    h1{
        width: 100%;
        color: #005082;
        font-weight: 300;
        margin-top: 2vh;
        border-bottom: solid 1px #FFA41B;
    }

    #app{
        min-height: 100%;
        width: 100%;
    }

    *{
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        margin-block-start: 0;
        margin-block-end: 0;
    }

    .desktop{
        display: none;
    }

    .mainPage{
        width: 90%;
        min-height: 90vh;
        margin-left: 5%;
        margin-right: 5%;
    }

    @media (min-width: 900px) {
        h1{
            width: 50%;
        }

        .phone {
            display: none;
        }

        .desktop {
            display: block;
        }
    }

</style>