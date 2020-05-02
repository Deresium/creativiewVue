<template>
    <div id="app">
        <CvNavbar/>
        <router-view/>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import CvNavbar from "@/components/CvNavbar.vue";
    import {Action} from "vuex-class";
    @Component({
        components: {CvNavbar}
    })
    export default class App extends Vue {
        @Action('connectAsAdmin', {namespace: 'user'}) connectAsAdmin: any;
        created(){
            if(this.$cookies.isKey('payload')){
                this.connectAsAdmin();
            }
        }
    }
</script>

<style>
    #app{
        min-height: 100%;
        width: 100vw;
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
        margin-left: 5%;
        margin-right: 5%;
    }

    @media (min-width: 900px) {
        .phone{
            display: none;
        }

        .desktop{
            display: block;
        }
    }

</style>