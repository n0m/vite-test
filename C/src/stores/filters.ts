import { defineStore } from "pinia";
//import Filtry from "../../data/FiltrySz.json";
import axios from "axios";
export const useFiltersStore = defineStore({
  id: "ListaFiltrow",
  state: () => ({
    FiltryDane: [],
  }),
  getters: {},
  actions: {
    async fill() {
      //this.FiltryDane = Filtry;
      this.FiltryDane = await (await axios.get("__A__/Api.asp ")).data;
      console.log(this.FiltryDane);
    },
  },
});
/* import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
export default{
  async setup(){
    const ListaFiltrow = ref({
      Wynik:{}
    })
    await (await axios.get("/api")).data
    .then(data=>{
      const {Wynik}=data
      ListaFiltrow.value.Wynik=data.Wynik;
    })

  }
} */
