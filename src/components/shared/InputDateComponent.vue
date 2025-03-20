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
</script>

<template>
  <Field :name="name" v-slot="{ value, handleChange, errorMessage }">
    <v-date-input :model-value="value" @update:model-value="handleChange" :label="label" :error-messages="errorMessage"
      prepend-icon="" prepend-inner-icon="$calendar" />
  </Field>
</template>