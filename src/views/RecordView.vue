<script setup lang="ts">
import NewRecordComponent from '@/components/records/NewRecordComponent.vue';
import ButtonComponent from '@/components/shared/ButtonComponent.vue'
</script>

<template>
  <ButtonComponent/>

  <NewRecordComponent/>
  <RouterView/>
</template>
