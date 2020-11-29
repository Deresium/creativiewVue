import {MutationTree} from "vuex";
import UserState from "@/store/modules/user/UserState";
import Role from "@/enums/role";

export const mutations: MutationTree<UserState> = {
    loginUser(state: UserState, role: Role){
        state.loginUser(role);
    },
    logoutUser(state: UserState){
        state.logoutUser();
    },
    showLoginModal(state: UserState){
        state.isShowLoginModal = true;
    },
    hideLoginModal(state: UserState){
        state.isShowLoginModal = false;
    }
}