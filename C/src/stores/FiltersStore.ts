import { defineStore } from "pinia";
import Filtry from "../../data/FiltrySz.json";
import axios from "axios";

export const useFiltersStore = defineStore({
  id: "ListaFiltrow",
  state: () => {
    return Filtry.Wynik;
  },
  getters: {
    daneF: (e) => {
      return Filtry.Wynik[e];
    },
  },
  actions: {
    async fill() {
      //this.FiltryDane = Filtry;
      this.FiltryDane = await (await axios.get("/api")).data.Wynik;
      console.log(this.FiltryDane);
    },
    getDane(nazwa = "") {
      return Filtry.Wynik[nazwa] != undefined ? Filtry.Wynik[nazwa] : [];
    },
    getWartosci(nazwa) {
      return Filtry.Wynik.FiltryWartosci[nazwa] != undefined
        ? Filtry.Wynik.FiltryWartosci[nazwa]
        : "";
    },
  },
});
