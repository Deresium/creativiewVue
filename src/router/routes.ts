import Home from "@/views/Home.vue";
import CvLogin from "@/views/CvLogin.vue";
import CvGallery from "@/views/CvGallery.vue";
import CvAddGallery from "@/views/CvAddGallery.vue";
import CvDetailGallery from "@/views/CvDetailGallery.vue";
import CvAskingOriginal from "@/views/CvAskingOriginal.vue";
import CvNeedWebsite from "@/views/CvNeedWebsite.vue";
import CvContact from "@/views/CvContact.vue";

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
        path: '/gallery/:galleryName',
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
        }
    },
    {
        path: '/contact',
        name: 'contact',
        component: CvContact,
        meta: {
            title: 'Contact - Creatiview'
        }
    }
]
