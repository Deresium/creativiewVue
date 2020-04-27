<template>
    <div>
        <transition name="closeOnHimself" mode="out-in">
            <img v-if="!showMenuPhone" src="../../assets/icons/menu.svg" alt="icon-menu" key="imgMenu"/>
            <img v-else src="../../assets/icons/clear.svg" alt="icon-delete" key="imgDelete"/>
        </transition>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";

    @Component
    export default class CvHamburger extends Vue{
        @Prop() showMenuPhone!: boolean;
    }
</script>

<style scoped>
    img{
        width: 80px;
    }

    .closeOnHimself-enter-active{
        animation: openOnHimself 0.1s forwards;
    }

    .closeOnHimself-leave-active{
        animation: closeOnHimself 0.1s forwards;
    }

    @keyframes closeOnHimself {
        from{
            transform: rotateY(0deg);
        }
        to{
            transform: rotateY(90deg);
        }
    }

    @keyframes openOnHimself {
        from{
            transform: rotateY(90deg);
        }
        to{
            transform: rotateY(0deg);
        }
    }
</style>