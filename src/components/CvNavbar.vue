<template>
    <nav :class="navClasses">
        <img class="logo" src="../assets/logo.svg"/>
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

        get navClasses(){
           return{
               'colorBackground': this.showBackground
           }
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
        height: 10vh;
    }

    .colorBackground{
        background-color: #005082;
    }

    .menuIco{
        width: 70px;
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
        }
    }

</style>