<template>
    <form class="formDonate" v-on:submit.prevent="submitAsking" novalidate="novalidate">
        <label class="labelName">
            <span>{{ $t("galleryMessage.name") }}</span>
            <input type="text" v-model="name"/>
        </label>
        <label class="labelEmail">
            <span>Email</span>
            <input type="email" v-model="email"/>
        </label>
        <label class="cbSupportMe">
            <input type="checkbox" v-model="supportMe"/>
            <span class="checkmark"></span>
            <span>{{ $t("galleryMessage.supportMe")}}</span>
        </label>
        <label v-if="supportMe" class="labelAmount">
            <span>{{ $t("galleryMessage.amount")}}</span>
            <div class="inputAmoutDiv">
                <input type="number" v-model="donationAmount"/>
                <span class="euro">€</span>
            </div>
        </label>
        <button type="submit" class="donateLink" :disabled="disableSending">
            <img v-if="supportMe" src="../assets/Bancontact_logo.svg" alt="bancontact logo"/>
            {{ buttonText }}
        </button>
    </form>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import {loadStripe} from "@stripe/stripe-js";
    import axiosCreatiview from "@/axios/axiosCreatiview";

    @Component
    export default class CvDonateForm extends Vue{
        donationAmount: number|null = null;
        name: string|null = null;
        supportMe = true;
        email: string|null = null;
        disableSending = false;

        @Prop() photoId!: string;

        async mounted(){
            if(this.$route.query.redirect_status) {
                const status = this.$route.query.redirect_status.toString();
                if(status === 'succeeded')
                    alert(this.$t('galleryMessage.successDonation'));
            }
        }

        get amountWithoutComa(){
            if(this.donationAmount)
                if(Math.floor(this.donationAmount) == this.donationAmount)
                    return `${this.donationAmount}00`;
                else{
                    const splitingAmount = this.donationAmount.toString().split('.');
                    if(splitingAmount[1].length === 1)
                        return `${splitingAmount[0]}${splitingAmount[1]}0`;
                    else if(splitingAmount[1].length == 2)
                        return `${splitingAmount[0]}${splitingAmount[1]}`;
                    else
                        return `${splitingAmount[0]}${splitingAmount[1].substr(0, 2)}`;
                }
            return null;
        }

        get redirectUrl(){
            return `${process.env.VUE_APP_URL_CREATIVIEW_VUE}/askingOriginal/${this.photoId}`;
        }

        get buttonText(){
            if(this.supportMe)
                return this.$t("galleryMessage.buttonAskingOriginalWithDonation");
            else
                return this.$t("galleryMessage.buttonAskingOriginalWithoutDonation");
        }

        async submitAsking(){
            if(this.supportMe)
                await this.submitDonation();
            else
                await this.submitWithoutDonation();
        }

        async submitDonation(){
            const stripe = await loadStripe(process.env.VUE_APP_PK_STRIPE);
            if(stripe && this.amountWithoutComa && this.name && this.email) {
                try{
                    const response = await stripe.createSource({
                        type: 'bancontact',
                        amount: parseInt(this.amountWithoutComa),
                        currency: 'eur',
                        owner: {
                            name: this.name,
                        },
                        redirect: {
                            // eslint-disable-next-line @typescript-eslint/camelcase
                            return_url: this.redirectUrl,
                        }
                    });
                    if(response.source) {
                        await axiosCreatiview.post('/createTransaction',
                            {
                                amount: response.source.amount,
                                clientId: response.source.id,
                                fullName: this.name,
                                email: this.email,
                                paymentState: 'PENDING',
                                photo: this.photoId
                            });
                        window.location.replace(response.source.redirect!.url);
                    }
                }catch (e) {
                    //console.log(e);
                }
            }else
                alert(this.$t('galleryMessage.completeForm'));
        }

        async submitWithoutDonation(){
            if(this.name && this.email){
                this.disableSending = true;
                const response = await axiosCreatiview.post('/createTransaction', {
                    fullName: this.name,
                    email: this.email,
                    photo: this.photoId
                });
                if(response.status === 200){
                    this.disableSending = false;
                    alert(this.$t('galleryMessage.successAsking'));
                }

            }else
                alert(this.$t('galleryMessage.completeForm'));
        }
    }
</script>

<style scoped>
    .labelAmount{
        width: 30%;
        margin-right: 1%;
    }

    label{
        display: flex;
        flex-direction: column;
        color: #005082;
        margin-top: 2vh;
    }

    .euro{
        margin-left: 5%;
        font-size: xx-large;
        color: #005082;
    }

    input[type="number"]{
        width: 97%;
        -moz-appearance: textfield;
    }

    input[type="text"], input[type="email"]{
        padding-left: 1%;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input{
        border: solid 1px #005082;
        font-size: large;
        padding-top: 1vh;
        padding-bottom: 1vh;
        padding-left: 3%;
    }

    .formDonate{
        display: flex;
        flex-direction: column;
        margin-bottom: 2vh;
    }

    .donateLink{
        cursor: pointer;
        font-size: large;
        background-color: #005082;
        color: white;
        padding: 1vh 5%;
        border: none;
        text-decoration: none;
        margin-top: 2vh;
    }

    .inputAmoutDiv{
        display: flex;
        align-items: center;
    }

    .formDonate button[type="submit"]{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .formDonate button[type="submit"] img{
        width: 20%;
        margin-right: 5%;
    }

    .cbSupportMe{
        flex-direction: row;
        align-items: center;
        width: auto;
    }

    .cbSupportMe input{
        position: absolute;
        opacity: 0;
        height: 0;
        width: 0;
    }

    .cbSupportMe .checkmark{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 2%;
        height: 25px;
        width: 25px;
        border: solid 1px #005082;
    }

    .checkmark:after{
        content: url(../assets/icons/done.svg);
        font-weight: bold;
        font-size: x-large;
        display: none;
    }

    .cbSupportMe input:checked ~.checkmark:after{
        display: block;
    }

    @media(min-width: 900px){
        .euro{
            font-size: 42px;
        }

        .formDonate button[type="submit"] img{
            width: 10%;
        }
    }
</style>