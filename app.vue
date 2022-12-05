<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
useToggle(isDark)
</script>