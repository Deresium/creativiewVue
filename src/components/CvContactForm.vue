<template>
   <form @submit.prevent="submitContactForm" novalidate="novalidate">
        <div class="input">
            <label>
                <span class="spanInput">{{ $t("contactMessages.name") }}</span>
                <input @input="contact.checkName()" @focusout="contact.checkName()" type="text" v-model="contact.contactName"/>
            </label>
            <span v-if="contact.nameEmpty" class="error">{{ $t("contactMessages.errorName.empty") }}</span>
        </div>
       <div class="input">
           <label>
               <span class="spanInput">{{ $t("contactMessages.firstName") }}</span>
               <input @input="contact.checkFirstName()" @focusout="contact.checkFirstName()" type="text" v-model="contact.contactFirstName"/>
           </label>
           <span v-if="contact.firstNameEmpty" class="error">{{ $t("contactMessages.errorFirstName.empty") }}</span>
       </div>
       <div class="input">
           <label>
               <span class="spanInput">{{ $t("contactMessages.email") }}</span>
               <input @focusout="contact.checkEmail()" type="email" v-model="contact.contactEmail"/>
           </label>
           <span v-if="contact.emailEmpty" class="error">{{ $t("contactMessages.errorEmail.empty") }}</span>
           <span v-if="!contact.emailValid" class="error">{{ $t("contactMessages.errorEmail.notValid") }}</span>
       </div>
       <div class="input">
           <label>
               <span class="spanInput">{{ $t("contactMessages.message") }}</span>
               <textarea @input="contact.checkMessage()" @focusout="contact.checkMessage()" v-model="contact.contactMessage"/>
           </label>
           <span v-if="contact.messageEmpty" class="error">{{ $t("contactMessages.errorMessage.empty") }}</span>
       </div>
       <button :disabled="disabledSending" type="submit">{{ $t("contactMessages.send")}}</button>
   </form>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Contact from "@/models/Contact";
    import ContactForm from "@/models/ContactForm";
    import axiosCreatiview from "@/axios/axiosCreatiview";

    @Component
    export default class CvContactForm extends Vue{
        contact = new ContactForm();
        disabledSending = false;

        async submitContactForm(){
            try{
                this.disabledSending = true;
                if(this.contact.checkContact()){
                    const contactToSend = new Contact(this.contact);
                    const response = await axiosCreatiview.post('/contact', {...contactToSend});
                    if(response.status === 200){
                        alert(this.$t("contactMessages.sendOk"));
                    }
                }
            }catch(error){
                console.log(error);
            } finally{
                this.disabledSending = false;
            }
        }
    }
</script>

<style scoped>
    form{
        margin-top: 2vh;
        padding-bottom: 2vh;
        border-bottom: solid 5px #FFA41B;
    }

    div.input{
        display: flex;
        flex-direction: column;
        margin-bottom: 2vh;
    }

    input, textarea{
        border: 1px solid #005082;
        border-radius: 5px;
        margin-top: 0.5vh;
        padding-left: 1%;
        padding-top: 0.5vh;
        padding-bottom: 0.5vh;
        font-size: large;
    }

    textarea{
        height: 15vh;
    }

    label{
        display: flex;
        flex-direction: column;
        color: #005082;
        font-size: large;
    }

    .error{
        color: #FFA41B;
        margin-top: .5vh;
    }

    button{
        border: none;
        background-color: #005082;
        color: white;
        font-size: x-large;
        padding: 1vh 2%;
        border-radius: 5px;
        cursor: pointer;
    }

    @media(min-width: 900px){
        form{
            border-bottom: none;
        }
    }
</style>