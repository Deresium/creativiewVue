import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "@/router/routes";

Vue.use(VueRouter);

const router =  new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(){
        return{x: 0, y: 0};
    }
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    if(to.name === 'detailGallery') {
        document.title = document.title.replace(':dynamic', to.params.galleryName.replace('.', ' '));
        const node: any = document.querySelector('[property="og:url"]');
        node.setAttribute('content', `${process.env.VUE_APP_URL_CREATIVIEW_VUE}/gallery/${to.params.galleryName}`);
    }else{
        const node: any = document.querySelector('[property="og:url"]');
        node.setAttribute('content', `${process.env.VUE_APP_URL_CREATIVIEW_VUE}`);
    }
    next();
});

export default router;
