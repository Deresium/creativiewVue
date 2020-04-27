
import {mutations} from "@/store/modules/navbar/mutations";
import {actions} from "@/store/modules/navbar/actions";
import {getters}from "@/store/modules/navbar/getters";
import {Module} from "vuex";
import NavbarState from "@/store/modules/navbar/NavbarState";
import StoreState from "@/store/StoreState";

const state: NavbarState = new NavbarState();

export const navbar: Module<NavbarState, StoreState> = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};