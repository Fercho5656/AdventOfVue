<template>
  <div class="w-full p-5 flex flex-col gap-5 justify-center items-center transition-all">
    <h1 class="text-4xl font-bold">Gift Search Bar</h1>
    <input :disabled="isSearching" type="text"
      class="p-2 rounded-md border-2 text-xl border-gray-dark dark:border-gray-50 dark:text-gray-800 disabled:opacity-80"
      v-model="searchTerm" placeholder="Start typing..." />
    <ui-spinner v-show="isSearching" />
    <ul class="list-disc text-xl p-5 min-h-fit">
      <li v-for="product in searchResults?.products" :key="product.id">
        {{ product.title }}
      </li>
    </ul>
    <div class="flex gap-x-3">
      <ui-button @click="onPrev" :disabled="(searchSkip <= 0)">Prev</ui-button>
      <ui-button @click="onNext" :disabled="!(searchSkip + searchLimit <= searchTotal - 1)">Next</ui-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import useDebounce from '~~/composables/useDebounce';
import findProducts from '~~/services/findProducts';
import IProducts from '~~/interfaces/IProducts';

const searchTerm = ref('')
const searchSkip = ref(0)
const searchLimit = 10
const searchTotal = ref(0)
const searchResults = ref<IProducts>()
const isSearching = ref(false)

const onSearchTermChange = useDebounce(async (term: string, skip: number, limit: number) => {
  isSearching.value = true
  searchResults.value = await findProducts(term, skip, limit)
  searchTotal.value = searchResults.value?.total ?? 0
  isSearching.value = false
}, 300)

const onPrev = () => searchSkip.value -= 10

const onNext = () => searchSkip.value += 10

watch([searchTerm, searchSkip], ([newTerm, newSkip]) => {
  if (newTerm === '') return searchResults.value = undefined
  onSearchTermChange(newTerm, newSkip, searchLimit)
})
</script>
