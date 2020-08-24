import Home from "@/views/Home.vue";
import CvLogin from "@/views/CvLogin.vue";
import CvGallery from "@/views/CvGallery.vue";
import CvAddGallery from "@/views/CvAddGallery.vue";
import CvDetailGallery from "@/views/CvDetailGallery.vue";
import CvAskingOriginal from "@/views/CvAskingOriginal.vue";
import CvNeedWebsite from "@/views/CvNeedWebsite.vue";
import CvContact from "@/views/CvContact.vue";
import CvTermsOfUse from "@/views/CvTermsOfUse.vue";
import CvAboutMe from "@/views/CvAboutMe.vue";
import CvBenefits from "@/views/needwebsite/CvBenefits.vue";
import CvTechnologies from "@/views/needwebsite/CvTechnologies.vue";
import CvProjects from "@/views/needwebsite/CvProjects.vue";
import CvRoadmap from "@/views/needwebsite/CvRoadmap.vue";

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
        path: '/needWebsite',
        name: 'needWebsite',
        component: CvNeedWebsite,
        meta: {
            title: 'Need a website - Creatiview'
        },
        children: [
            {
                path: '',
                name: 'empty',
                redirect: 'benefits'
            },
            {
                path: 'benefits',
                name:'benefits',
                component: CvBenefits,
                meta: {
                    title: 'Need a website - Creatiview'
                }
            },
            {
                path: 'roadmap',
                component: CvRoadmap,
                meta: {
                    title: 'Need a website - Creatiview'
                }
            },
            {
                path: 'technology',
                component: CvTechnologies,
                meta: {
                    title: 'Need a website - Creatiview'
                }
            },
            {
                path: 'projects',
                component: CvProjects,
                meta: {
                    title: 'Need a website - Creatiview'
                }
            }
        ]
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
        name: 'About Me',
        component: CvAboutMe,
        meta: {
            title: 'About Me - Creatiview'
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
