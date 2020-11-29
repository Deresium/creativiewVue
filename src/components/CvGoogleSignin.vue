<template>
    <div id="google-signin-btn"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axiosCreatiview from "@/axios/axiosCreatiview";
import {Action, Getter} from "vuex-class";

@Component
export default class CvGoogleSignin extends Vue{
    @Getter('isLoggedIn', {namespace: 'user'}) isLoggedIn!: boolean;
    @Action('loginUser', {namespace: 'user'}) connectAsAdmin: any;
    @Action('hideLoginModal', {namespace: 'user'}) hideLoginModal: any;

    mounted() {
        this.renderSignin();
    }

    renderSignin() {
        const signin = localStorage.getItem('signinLoaded');
        if(signin !== 'true')
            setTimeout(this.renderSignin, 100);
        else{
            // @ts-ignore
            // eslint-disable-next-line
            gapi.signin2.render('google-signin-btn', {
                onsuccess: this.onSignIn,
                longtitle: true
            });
        }
    }

    async onSignIn(googleUser: any){
        await this.useLogin(googleUser);
    }

    async useLogin(googleUser: any){
        if(!this.isLoggedIn) {
            let data;
            if(googleUser){
                const idToken = googleUser.getAuthResponse().id_token
                const profile = googleUser.getBasicProfile();
                const email = profile.getEmail();
                const name = profile.getName();
                data = {
                    idToken,
                    name,
                    email
                }
            }

            try {
                const response = await axiosCreatiview.post('/login', data);
                if (response.status === 200) {
                    await this.connectAsAdmin(response.data);
                    await this.hideLoginModal();
                }
            }catch(error){
                if(error.response.status === 400)
                    alert(error.response.data);
            }
        }
    }
}
</script>

<style scoped>

</style>