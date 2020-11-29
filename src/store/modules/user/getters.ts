import {GetterTree} from "vuex";
import UserState from "@/store/modules/user/UserState";
import StoreState from "@/store/StoreState";

export const getters: GetterTree<UserState, StoreState> = {
    isLoggedIn(state): boolean{
        return state.isConnected;
    },
    onlyOwner(state): boolean{
        return state.onlyOwner;
    },
    onlyAdmin(state): boolean{
        return state.onlyAdmin;
    },
    isDisconnected(state): boolean{
        return !state.isConnected;
    },
    isShowLoginModal(state): boolean{
        return state.isShowLoginModal;
    }
}