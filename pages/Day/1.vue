<template>
  <div class="w-full h-full p-5 flex flex-col gap-5 justify-center items-center transition-all">
    <h1 class="text-4xl font-bold">Gift Search Bar</h1>
    <input :disabled="isSearching" type="text"
      class="p-2 rounded-md border-2 text-xl border-gray-dark dark:border-gray-50 dark:text-gray-dark disabled:opacity-80"
      v-model="searchTerm" placeholder="Start typing..." />
    <ui-spinner v-show="isSearching" />
    <ul class="list-disc text-xl">
      <li v-for="product in searchResults?.products" :key="product.id">
        {{ product.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import useDebounce from '~~/composables/useDebounce';
import findProducts from '~~/services/findProducts';
import IProducts from '~~/interfaces/IProducts';

const searchTerm = ref('')
const searchResults = ref<IProducts>()
const isSearching = ref(false)

const onSearchTermChange = useDebounce(async (term: string) => {
  isSearching.value = true
  searchResults.value = await findProducts(term)
  isSearching.value = false
}, 300)

watch(searchTerm, (newTerm: string) => {
  if (newTerm === '') return searchResults.value = undefined
  onSearchTermChange(newTerm)
})
</script>
