import galleryMessages from "@/i18n/messages/galleryMessages";
import needWebsiteMessages from "@/i18n/messages/needWebsiteMessages";
import contactMessages from "@/i18n/messages/contactMessages";
import aboutMeMessages from "@/i18n/messages/aboutMeMessages";
import homeMessages from "@/i18n/messages/homeMessages";
import termsOfUseMessages from "@/i18n/messages/termsOfUseMessages";
export default{
    fr: {
        ...homeMessages.fr,
        ...galleryMessages.fr,
        ...needWebsiteMessages.fr,
        ...contactMessages.fr,
        ...aboutMeMessages.fr,
        ...termsOfUseMessages.fr

    },
    en: {
        ...homeMessages.en,
        ...galleryMessages.en,
        ...needWebsiteMessages.en,
        ...contactMessages.en,
        ...aboutMeMessages.en,
        ...termsOfUseMessages.en
    }
}