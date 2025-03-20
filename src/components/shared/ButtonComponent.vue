<script setup lang="ts">
defineProps({
  content: {
    type: String,
    require: true,
  },
})

const emit = defineEmits<{
  (event: 'onClickButton'): void
}>()

const onClick = () => {
  emit('onClickButton')
}
</script>

<template>
  <v-btn color="primary" elevation="4" large @click="onClick"> {{ content }} </v-btn>
</template>
