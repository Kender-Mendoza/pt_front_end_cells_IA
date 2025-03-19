<script setup lang="ts">
import { ref } from 'vue';

const value = ref<string>('');
const errors = ref<string[]>([]); // Opino que se debe utilizar reactive en su lugar, no se para que r

defineProps(
  {
    label: {
      type: String,
      require: true
    },
    model: {
      type: String,
      require: true
    },
    rules: {
      type: Array,
      default: () => []
    }
  }
)

</script>

<template>
  <div>
    <v-text-field
      v-model="value"
      :label="label"
      :rules="rules"
      :error-messages="errors"
      hide-details="auto"
    ></v-text-field>
  </div>
</template>
