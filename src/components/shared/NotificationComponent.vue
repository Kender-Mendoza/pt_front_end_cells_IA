<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  content: {
    type: String,
    required: true,
    default: '',
  },
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const showNotification = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emits('update:modelValue', value),
})
</script>

<template>
  <v-snackbar v-model="showNotification" :timeout="2000" color="success">
    <div class="text-center">{{ content }}</div>
  </v-snackbar>
</template>