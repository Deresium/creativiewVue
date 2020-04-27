import Vue from 'vue'
import Vuex, {StoreOptions} from 'vuex'
import {navbar} from "@/store/modules/navbar/navbar";
import StoreState from "@/store/StoreState";
import {user} from "@/store/modules/user/user";

Vue.use(Vuex)

const store: StoreOptions<StoreState> = {
  modules: {
    navbar,
    user
  }
}

export default new Vuex.Store<StoreState>(store);