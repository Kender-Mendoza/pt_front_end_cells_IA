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
  <Field :name="name" v-slot="{ field }">
    <v-switch
      v-bind="field"
      :label="label"
      color="primary"
      inset
    />
  </Field>
</template>
