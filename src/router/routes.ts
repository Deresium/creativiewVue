import Home from "@/views/Home.vue";
import CvLogin from "@/views/CvLogin.vue";
import CvGallery from "@/views/CvGallery.vue";
import CvAddGallery from "@/views/CvAddGallery.vue";
import CvDetailGallery from "@/views/CvDetailGallery.vue";
import CvAskingOriginal from "@/views/CvAskingOriginal.vue";
import CvContact from "@/views/CvContact.vue";
import CvTermsOfUse from "@/views/CvTermsOfUse.vue";
import CvAboutMe from "@/views/CvAboutMe.vue";
import CvCredits from "@/views/CvCredits.vue";
import CvPresentation from "@/components/CvPresentation.vue";
import CvSkills from "@/components/CvSkills.vue";
import CvTalk from "@/views/CvTalk.vue";
import CvProject from "@/views/CvProject.vue";

export default [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: 'Home Page - Creatiview',
        }
    },
    {
        path: '/login',
        name: 'login',
        component: CvLogin,
        meta: {
            title: 'Login - Creatiview'
        }
    },
    {
        path: '/gallery',
        name: 'gallery',
        component: CvGallery,
        meta: {
            title: 'Gallery - Creatiview'
        }
    },
    {
        path: '/addGallery',
        name: 'addGallery',
        component: CvAddGallery,
        meta: {
            title: 'Add Gallery - Creatiview'
        }
    },
    {
        path: '/gallery/:galleryName/:idPhoto?',
        name: 'detailGallery',
        component: CvDetailGallery,
        meta: {
            title: ':dynamic Gallery - Creatiview'
        }
    },
    {
        path: '/askingOriginal/:idPhoto',
        name: 'askingOriginal',
        component: CvAskingOriginal,
        meta: {
            title: 'Asking Original - Creatiview'
        }
    },
    {
        path: '/talk',
        name: 'talk',
        component: CvTalk,
        meta: {
            title: 'Let\'s talk - Creatiview'
        }
    },
    {
        path: '/project',
        name: 'project',
        component: CvProject,
        meta: {
            title: 'Projects - Creatiview'
        }
    },
    {
        path: '/contact',
        name: 'contact',
        component: CvContact,
        meta: {
            title: 'Contact - Creatiview'
        }
    },
    {
        path: '/termsOfUse',
        name: 'Terms of use',
        component: CvTermsOfUse,
        meta: {
            title: 'Terms of use - Creatiview'
        }
    },
    {
        path: '/aboutMe',
        component: CvAboutMe,
        meta: {
            title: 'About Me - Creatiview'
        },
        children: [
            {
                path: '',
                name: 'About Me',
                component: CvPresentation,
                meta: {
                    title: 'About Me - Creatiview'
                }
            },
            {
                path: 'presentation',
                name: 'Presentation',
                component: CvPresentation,
                meta: {
                    title: 'About Me - Creatiview'
                }
            },
            {
                path: 'skills',
                name: 'Skills',
                component: CvSkills,
                meta: {
                    title: 'About Me - Creatiview'
                }
            }
        ]
    },
    {
        path: '/credits',
        name: 'Credits',
        component: CvCredits,
        meta: {
            title: 'Credits - Creatiview'
        }
    },
    {
        path: '/pictures/:galleryName/:idPhoto',
        redirect: (to: any) => {
            const galleryName = to.params.galleryName;
            const idPhoto = to.params.idPhoto;
            return `/gallery/${ galleryName }/${ idPhoto }`;
            //http://localhost:8080/pictures/Theme.parks/5ef2239da32707418cb3adc2
        }
    }
]
