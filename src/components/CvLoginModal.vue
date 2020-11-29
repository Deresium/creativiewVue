<template>
    <div v-if="isShowLoginModal && isDisconnected" :class="classesAsModal">
        <CvGoogleSignin/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';
    import {Action, Getter} from "vuex-class";
    import CvGoogleSignin from "@/components/CvGoogleSignin.vue";
    @Component({
        components: {CvGoogleSignin}
    })
    export default class CvLoginModal extends Vue {
        login = null;
        @Prop() asModal!: boolean;

        @Action('connectAsAdmin', {namespace: 'user'}) connectAsAdmin: any;
        @Action('disconnect', {namespace: 'user'}) disconnect: any;
        @Action('hideLoginModal', { namespace: 'user'}) hideLoginModal: any;
        @Getter('isShowLoginModal', { namespace: 'user'}) isShowLoginModal: any;
        @Getter('isDisconnected', { namespace: 'user'}) isDisconnected: any;

        get classesAsModal(){
            return{
                'modalStyle': this.asModal,
                'includeStyle': !this.asModal
            }
        }
    }
</script>

<style scoped>
    .includeStyle{
        width: 100%;
        margin-top: 5vh;
        display: flex;
        justify-content: center;
    }

    .modalStyle{
        position: fixed;
        top: 0;
        left: 0;
        padding-top: 15vh;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .modalStyle > form{
        width: 90%;
        margin-left: 5%;
    }

    form{
        background-color: #FFA41B;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-bottom: 5vh;
        padding-top: 3vh;
        border-radius: 25px;
    }

    .formInput{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-bottom: 5vh;
    }

    label > span{
        display: block;
        width: 100%;
        margin-bottom: 0.5vh;
    }

    input{
        border: none;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 25px;
        padding: 1vh 10%;
    }

    button[type="submit"]{
        padding: 1vh 5%;
        background-color: #005082;
        color: white;
        border: none;
        font-size: x-large;
        cursor: pointer;
    }

    .alreadyConnected{
        margin-top: 2vh;
    }

    @media(min-width: 900px){
        form{
            width: 30%;
        }

        .modalStyle > form{
            width: 50%;
            margin-left: 25%;
        }

        .formInput{
            margin-bottom: 3vh;
        }

        input{
            padding: 0.5vh 5%;
        }
    }
</style>