import galleryMessages from "@/i18n/messages/galleryMessages";
import contactMessages from "@/i18n/messages/contactMessages";
import aboutMeMessages from "@/i18n/messages/aboutMeMessages";
import homeMessages from "@/i18n/messages/homeMessages";
import termsOfUseMessages from "@/i18n/messages/termsOfUseMessages";
import talk from "@/i18n/messages/talk";
export default{
    fr: {
        ...homeMessages.fr,
        ...galleryMessages.fr,
        ...contactMessages.fr,
        ...aboutMeMessages.fr,
        ...termsOfUseMessages.fr,
        ...talk.fr

    },
    en: {
        ...homeMessages.en,
        ...galleryMessages.en,
        ...contactMessages.en,
        ...aboutMeMessages.en,
        ...termsOfUseMessages.en,
        ...talk.en
    }
}