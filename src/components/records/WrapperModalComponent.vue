<script setup lang="ts">
import { computed } from 'vue'
import NewRecordComponent from '@/components/records/NewRecordComponent.vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const showModal = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emits('update:modelValue', value),
})

const closeModal = () => {
  emits('update:modelValue', false)
}
</script>

<template>
  <v-dialog v-model="showModal" max-width="700">
    <template v-slot:default="">
      <v-card rounded="lg">
        <v-card-title class="d-flex justify-space-between align-center">
          <div class="text-h5 text-medium-emphasis ps-2">
            {{ title }}
          </div>
          <v-btn icon="$close" variant="text" @click="closeModal"></v-btn>
        </v-card-title>

        <div class="px-6">
          <NewRecordComponent @close-modal="closeModal" />
        </div>
      </v-card>
    </template>
  </v-dialog>
</template>