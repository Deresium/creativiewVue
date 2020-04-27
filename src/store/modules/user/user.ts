import UserState from "@/store/modules/user/UserState";
import {Module} from "vuex";
import {mutations} from "@/store/modules/user/mutations";
import {actions} from "@/store/modules/user/actions";
import {getters} from "@/store/modules/user/getters";
import StoreState from "@/store/StoreState";

const state: UserState = new UserState();

export const user: Module<UserState, StoreState> = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};