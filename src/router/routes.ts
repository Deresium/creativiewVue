import Home from "@/views/Home.vue";
import CvLogin from "@/views/CvLogin.vue";
import CvGallery from "@/views/CvGallery.vue";

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
    }
]
