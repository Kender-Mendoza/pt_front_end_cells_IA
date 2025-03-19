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
  }
})

</script>

<template>
  <Field :name="name" v-slot="{ field, errorMessage }">
    <v-date-input
      v-bind="field"
      :label="label"
      :error-messages="errorMessage"
      prepend-icon=""
      prepend-inner-icon="$calendar"
    />
  </Field>
</template>
