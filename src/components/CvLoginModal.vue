<template>
    <div v-if="isShowLoginModal && isDisconnected" :class="classesAsModal">
        <form v-on:submit.prevent="submitLogin" novalidate="novalidate">
            <div class="formInput">
                <label>
                    <span>Login</span>
                    <input type="text" v-model="login"/>
                </label>
            </div>
            <div class="formInput">
                <label>
                    <span>Password</span>
                    <input type="password" v-model="password"/>
                </label>
            </div>
            <button :disabled="disabledSending" type="submit" class="btnAction">Envoyer</button>
        </form>
    </div>
    <div v-else>
        <p class="alreadyConnected">Vous êtes déjà connecté</p>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';
    import {Action, Getter} from "vuex-class";
    import axiosCreatiview from "../axios/axiosCreatiview";

    @Component
    export default class CvLoginModal extends Vue {
        disabledSending = false;
        login = null;
        password = null;
        @Prop() asModal!: boolean;

        @Action('connectAsAdmin', {namespace: 'user'}) connectAsAdmin: any;
        @Action('disconnect', {namespace: 'user'}) disconnect: any;
        @Action('hideLoginModal', { namespace: 'user'}) hideLoginModal: any;
        @Getter('isShowLoginModal', { namespace: 'user'}) isShowLoginModal: any;
        @Getter('isDisconnected', { namespace: 'user'}) isDisconnected: any;

        async submitLogin(){
            try{
                this.disabledSending = true;
                if(this.login && this.password){
                    const response = await axiosCreatiview.post('/login', {login: this.login, password: this.password});
                    if(response.status == 200){
                        this.connectAsAdmin();
                        if(this.asModal) {
                            this.hideLoginModal();
                        }
                    }else{
                        alert('error');
                    }
                }else{
                    alert('Fill all the form');
                }
            }catch(error){
                if(error.response.status == 401){
                    this.disconnect();
                }
                console.log(error);
            }finally{
                this.disabledSending = false;
            }
        }

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