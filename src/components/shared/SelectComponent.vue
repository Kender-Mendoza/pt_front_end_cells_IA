<script setup lang="ts">
import { Field } from 'vee-validate'

defineProps({
  name: {
    type: String,
    require: true,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  values: {
    type: Array,
    default: () => []
  }
})

</script>

<template>
  <Field :name="name" v-slot="{ field, errorMessage }">
    <v-autocomplete
      v-bind="field"
      :label="label"
      :error-messages="errorMessage"
      :items="values"
      chips
      full-width
      hide-details
      hide-no-data
      hide-selected
      multiple
      single-line
    ></v-autocomplete>
  </Field>
</template>
