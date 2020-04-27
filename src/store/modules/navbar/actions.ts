import NavbarState from "@/store/modules/navbar/NavbarState";
import {ActionTree} from "vuex";
import StoreState from "@/store/StoreState";

export const actions: ActionTree<NavbarState, StoreState> = {
    showBackgroundColor(context): void {
        context.commit('showBackgroundColor');
    },
    hideBackgroundColor(context): void{
        context.commit('hideBackgroundColor');
    }
}