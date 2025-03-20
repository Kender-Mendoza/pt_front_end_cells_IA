<script setup lang="ts">
import { Field } from 'vee-validate'

defineProps({
  name: {
    type: String,
    required: true,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
})
const emit = defineEmits<{
  (e: 'checked', value: boolean): void
}>()

const onClick = (value: boolean) => {
  emit('checked', !value)
}
</script>

<template>
  <Field :name="name" v-slot="{ value, handleChange }">
    <v-switch :model-value="value" @update:model-value="handleChange" :label="label" color="primary" inset
      @click="onClick(value)" />
  </Field>
</template>