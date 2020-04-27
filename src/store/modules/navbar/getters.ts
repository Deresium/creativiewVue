import NavbarState from "@/store/modules/navbar/NavbarState";
import {GetterTree} from "vuex";
import StoreState from "@/store/StoreState";

export const getters: GetterTree<NavbarState, StoreState> = {
    showBackgroundColor(state): boolean{
        return state.showBackgroundColorState;
    }
}