<template>
    <transition name="showFromMiddle">
        <div v-if="showMenuPhone" class="phoneMenu">
            <div class="clearDiv">
                <img @click="clickCloseEvent" src="../assets/icons/clear.svg" alt="icon-clear"/>
            </div>
            <CvRoutes @click.native="clickCloseEvent"/>
        </div>
    </transition>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import CvHamburger from "@/components/commons/CvHamburger.vue";
    import CvRoutes from "@/components/CvRoutes.vue";
    @Component({
        components: {CvRoutes, CvHamburger}
    })
    export default class CvPhoneMenu extends Vue{
        @Prop() showMenuPhone!: boolean;

        clickCloseEvent(){
            this.$emit('closeMenuClick');
        }
    }
</script>

<style scoped>
    img{
        width: 70px;
    }

    .clearDiv{
        width: 100%;
        height: 10vh;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .phoneMenu{
        position: fixed;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: #005082;
    }

    .showFromMiddle-enter-active{
        animation: openFromMiddle 0.3s forwards;
    }

    .showFromMiddle-leave-active{
        animation: closeFromMiddle 0.3s forwards;
    }

    @keyframes openFromMiddle {
        from{
            transform: scale(0.5, 0.5);
            border-radius: 50%;
            opacity: 0;
        }
        to{
            transform: scale(1, 1);
            border-radius: 0;
            opacity: 1;
        }
    }

    @keyframes closeFromMiddle {
        from{
            transform: scale(1, 1);
            border-radius: 0;
            opacity: 1;
        }
        to{
            transform: scale(0.5, 0.5);
            border-radius: 50%;
            opacity: 0;
        }
    }
</style>