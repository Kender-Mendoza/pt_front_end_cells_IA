<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  content: {
    type: String,
    require: true,
    default: '',
  },
})

const snackbar = ref<boolean>(true)
</script>

<template>
  <v-snackbar v-model="snackbar" :timeout="2000" color="success">
    <div class="text-center">{{ content }}</div>
  </v-snackbar>
</template>
