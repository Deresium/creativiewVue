import {ActionTree} from "vuex";
import UserState from "@/store/modules/user/UserState";
import StoreState from "@/store/StoreState";

export const actions: ActionTree<UserState, StoreState> = {
    connectAsAdmin(context): void {
        context.commit('connectAsAdmin');
    },
    disconnect(context): void{
        context.commit('disconnect');
    },
    showLoginModal(context): void{
        context.commit('showLoginModal');
    },
    hideLoginModal(context): void{
        context.commit('hideLoginModal');
    }
}