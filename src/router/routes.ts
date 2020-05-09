import Home from "@/views/Home.vue";
import CvLogin from "@/views/CvLogin.vue";
import CvGallery from "@/views/CvGallery.vue";
import CvAddGallery from "@/views/CvAddGallery.vue";
import CvDetailGallery from "@/views/CvDetailGallery.vue";
import CvAskingOriginal from "@/views/CvAskingOriginal.vue";

export default [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: CvLogin
    },
    {
        path: '/gallery',
        name: 'gallery',
        component: CvGallery
    },
    {
        path: '/addGallery',
        name: 'addGallery',
        component: CvAddGallery
    },
    {
        path: '/gallery/:galleryName',
        name: 'detailGallery',
        component: CvDetailGallery
    },
    {
        path: '/askingOriginal/:idPhoto',
        name: 'askingOriginal',
        component: CvAskingOriginal
    }
]
