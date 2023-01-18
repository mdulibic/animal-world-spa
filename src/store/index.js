import { createStore } from "vuex";

export default createStore({
  state: {
    encyclopedias: [],
  },
  mutations: {
    setEncyclopedias(store, encyclopedias) {
      console.log(
        "changing recipes from to",
        store.encyclopedias,
        encyclopedias
      );
      store.encyclopedias = encyclopedias;
    },
  },
  getters: {
    allEncyclopedias(store) {
      return store.encyclopedias || [];
    },
    getEncyclopediaById: (state, getters) => (id) => {
      return getters.encyclopedias.find((e) => e.id === id);
    },
  },
  actions: {
    async refreshEncyclopedias(context) {
      console.log("fetching encyclopedias...");
      try {
        let response = await fetch("http://127.0.0.1:8888/encyclopedias");
        if (response.ok) {
          let encyclopedias = await response.json();
          console.log("fetched encyclopedias");
          context.commit("encyclopedias", encyclopedias);
        } else {
          throw new Error("HTTP-Error: " + response.status);
        }
      } catch (error) {
        console.error(error);
      }
    },
    deleteEncyclopedia(context, { id }) {
      console.log("deleting encyclopedia ", id);
      context.commit(
        "setEncyclopedias",
        context.getters.encyclopedias.filter((x) => x.id !== id)
      );
    },
    updateEncyclopedia(context, encyclopedia) {
      console.log("updating recipe (actions)", encyclopedia);
      // pitanje je kako ovo napraviti, ucinkovitije bi bilo in-place ažurirati samo jedan element polja
      // ali ako gledamo polje kao jednu varijablu stanja onda ćemo napraviti novo polje s izmijenjenim tim jednim elementom:
      let newArray = context.getters.encyclopedias.map((x) =>
        x.id === encyclopedia.id ? encyclopedia : x
      );
      context.commit("setEncyclopedias", newArray);
    },
  },
  modules: {},
});
