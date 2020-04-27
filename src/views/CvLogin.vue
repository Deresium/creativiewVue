<template>
    <div class="mainPage">
        <CvLoginModal :as-modal="false"/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import CvLoginModal from "@/components/CvLoginModal.vue";
    import {Action} from "vuex-class";
    @Component({
        components: {CvLoginModal}
    })
    export default class CvLogin extends Vue{
        @Action('showLoginModal', { namespace: 'user'}) showLoginModal: any;
        @Action('hideLoginModal', { namespace: 'user'}) hideLoginModal: any;

        created(){
            this.showLoginModal();
        }

        destroyed(){
            this.hideLoginModal();
        }
    }
</script>

<style scoped>
    .mainPage{
        display: flex;
        justify-content: center;
    }
</style>