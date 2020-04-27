import {GetterTree} from "vuex";
import UserState from "@/store/modules/user/UserState";
import StoreState from "@/store/StoreState";

export const getters: GetterTree<UserState, StoreState> = {
    isConnectedAsAdmin(state): boolean{
        return state.isAdmin && state.isConnected;
    },
    isDisconnected(state): boolean{
        return !state.isConnected;
    },
    isShowLoginModal(state): boolean{
        return state.isShowLoginModal;
    }
}