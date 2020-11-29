import {ActionTree} from "vuex";
import UserState from "@/store/modules/user/UserState";
import StoreState from "@/store/StoreState";
import Role from "@/enums/role";

export const actions: ActionTree<UserState, StoreState> = {
    showLoginModal(context): void{
        context.commit('showLoginModal');
    },
    hideLoginModal(context): void{
        context.commit('hideLoginModal');
    },
    loginUser(context, role: Role){
        context.commit('loginUser', role);
    },
    logoutUser(context){
        context.commit('logoutUser');
    }
}