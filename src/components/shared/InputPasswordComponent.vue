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
  <Field :name="name" v-slot="{ field, errorMessage }">
    <v-text-field type="password" v-bind="field" :label="label" :error-messages="errorMessage" />
  </Field>
</template>
