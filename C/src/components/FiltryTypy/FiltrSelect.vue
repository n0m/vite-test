<script setup lang="ts">
import { useFiltersStore } from '@/stores/FiltersStore';
import { toRefs } from 'vue'
const props = defineProps(['dane'])
const { Filtr, Opis, Obiekt, Aktywny } = toRefs(props.dane)

const FiltryPozycje = useFiltersStore().getDane(Obiekt.value)


</script>
<template>
	<template v-if="FiltryPozycje.length > 0">
		<div class="selects__container">
			<label :for="Filtr">{{ Opis }}:
				<div class="switch__box">
					<label class="filter__switch">
						<input class="filter__checkbox" :name="Filtr + '_checkbox'" :checked="Aktywny == 1"
							:id="Filtr + '_checkbox'" value="1" type="checkbox" />
						<span class="slider round"></span>
					</label>
				</div>
			</label>
			<select class="selectpicker filterSelect" :aria-label="Opis" :name="Filtr" multiple>
				<template v-for="Pozycja in FiltryPozycje" :key="Pozycja.Wart">
					<option v-if="Pozycja.Wybrany == 1" :value="Pozycja.Wart" selected>{{ Pozycja.Opis }}</option>
					<option v-else :value="Pozycja.Wart">{{ Pozycja.Opis }}</option>
				</template>
			</select>
		</div>
	</template>
</template>
<style lang="">
	
</style>