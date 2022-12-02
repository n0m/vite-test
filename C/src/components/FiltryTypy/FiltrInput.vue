<script setup lang="ts">
import { useFiltersStore } from '@/stores/FiltersStore';
import { toRefs } from 'vue'
const props = defineProps(['dane'])
const { Filtr, Opis, Obiekt } = toRefs(props.dane)

const FiltryWartosc = useFiltersStore().getWartosci(Obiekt.value)
console.log(FiltryWartosc)

</script>
<template>
	<div class="form-group">
		<input type="text" class="form-control" :name="Filtr" :value="FiltryWartosc" :placeholder="Opis" />
	</div>
</template>
<style lang="">
	
</style>