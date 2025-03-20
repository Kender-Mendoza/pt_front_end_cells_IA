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
  values: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <Field :name="name" v-slot="{ field, errorMessage }">
    <v-select v-bind="field" :error-messages="errorMessage" :items="values" :label="label" chips multiple></v-select>
  </Field>
</template>