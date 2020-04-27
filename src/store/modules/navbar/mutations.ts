import NavbarState from "@/store/modules/navbar/NavbarState";
import {MutationTree} from "vuex";

export const mutations: MutationTree<NavbarState> = {
    showBackgroundColor(state: NavbarState) {
        state.showBackgroundColorState = true;
    },
    hideBackgroundColor(state: NavbarState){
        state.showBackgroundColorState = false;
    }
}