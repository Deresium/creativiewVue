import {MutationTree} from "vuex";
import UserState from "@/store/modules/user/UserState";

export const mutations: MutationTree<UserState> = {
    connectAsAdmin(state: UserState) {
        state.isAdmin = true;
        state.isConnected = true;
    },
    disconnect(state: UserState){
        state.isAdmin = false;
        state.isConnected = false;
    },
    showLoginModal(state: UserState){
        state.isShowLoginModal = true;
    },
    hideLoginModal(state: UserState){
        state.isShowLoginModal = false;
    }
}