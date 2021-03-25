<template>
    <nav v-show="showBackground">
        <img class="logo" src="../assets/logo.svg" alt="logo"/>
        <img class="phone menuIco" @click="switchMenu" src="../assets/icons/menu.svg" alt="icon-menu"/>
        <CvPhoneMenu @closeMenuClick="switchMenu" :show-menu-phone="showMenuPhone"/>
        <CvRoutes class="desktop routes"/>
    </nav>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import CvHamburger from "@/components/commons/CvHamburger.vue";
    import CvPhoneMenu from "@/components/CvPhoneMenu.vue";
    import CvRoutes from "@/components/CvRoutes.vue";
    import { Getter } from 'vuex-class';
    @Component({
        components: {CvRoutes, CvPhoneMenu, CvHamburger}
    })
    export default class CvNavbar extends Vue{
        showMenuPhone = false;
        @Getter('showBackgroundColor', {namespace: 'navbar'}) showBackground!: boolean;

        switchMenu(){
            this.showMenuPhone = !this.showMenuPhone;
        }
    }
</script>

<style scoped>
    nav{
        position: relative;
        z-index: 4;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        margin-top: 10px;
    }

    .menuIco{
        width: 50px;
        margin-right: 5%;
    }

    .logo{
        margin-left: 5%;
    }

    @media(min-width: 900px){
        .logo{
            width: 5%;
        }

        .routes{
            width: 80%;
            margin-right: 5%;
        }

        nav{
            display: flex;
            align-items: center;
            height: auto;
            padding-top: 1vh;
            padding-bottom: 1vh;
            background-color: white;
        }
    }

</style>