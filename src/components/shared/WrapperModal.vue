<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  modelValue: Boolean,
  title: {
    type: String,
    require: true
  },
  buttonText: {
    type: String,
    require: true
  }
})

const emits = defineEmits<{
  (event: "update:modelValue", value: boolean): void;
  (event: "buttonEvent"): void
}>();

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emits('update:modelValue', value)
})

const closeModal = () => {
  emits("update:modelValue", false)
}

const onClickButton = () => {
  emits("buttonEvent")

  //! esto solo se ejecutara si el formulario es correcto
  // emits("update:modelValue", false)
  // agregar el close event
}

</script>

<template>
  <v-dialog v-model="showModal" max-width="700">
    <template v-slot:default="{ isActive }">
      <v-card rounded="lg">

        <v-card-title class="d-flex justify-space-between align-center">
          <div class="text-h5 text-medium-emphasis ps-2">
            {{ title }}
          </div>

          <v-btn
            icon="mdi-close"
            variant="text"
            @click="isActive.value = false"
          ></v-btn>
        </v-card-title>

        <v-card-text>
          <slot></slot>
        </v-card-text>

        <v-divider class="mt-2"></v-divider>

        <v-card-actions class="my-2 d-flex justify-end">
          <v-btn
            class="text-none"
            text="Cancel"
            @click="closeModal"
          ></v-btn>

          <v-btn
            class="text-none"
            variant="tonal"
            color="primary"
            :text="buttonText"
            @click="onClickButton"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
