import Vue from "vue"
import VueI18n from "vue-i18n";
import messages from "@/i18n/messages/messages";

Vue.use(VueI18n);
export default new VueI18n({
    locale: 'fr',
    messages
});
