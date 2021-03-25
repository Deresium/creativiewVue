import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "@/router/routes";

Vue.use(VueRouter);

const router =  new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition){
        if(to.name === 'Presentation' || to.name === 'Skills')
            return;
        
        if (savedPosition)
            return savedPosition
        else if (to.hash)
            return { selector: to.hash}
        else
            return { x: 0, y: 0 }
    }
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    if(to.name === 'detailGallery')
        document.title = document.title.replace(':dynamic', to.params.galleryName.replace('.', ' '));
    next();
});

export default router;
