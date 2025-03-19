<script setup lang="ts">
import NewRecordComponent from '@/components/records/NewRecordComponent.vue';
import ButtonComponent from '@/components/shared/ButtonComponent.vue'
import WrapperModal from '@/components/shared/WrapperModal.vue';
import { ref } from 'vue';

const showModal = ref<boolean>(true)
const childForm = ref(null)

const tonggleModal = () => {
  showModal.value = showModal.value ? false : true
}

const submitForm = () => {
  // console.log('funciona el evento')
  // childForm.value?.$refs.recordForm.submit();
  // childForm.value?.$refs.recordForm.submit()
  // childForm.value?.onSubmit
}
</script>

<template>
  <div class="pa-4 text-center">
    <ButtonComponent
      content="Crear Registro"
      @on-click-button="tonggleModal"
    />

    <WrapperModal
      title="Nuevo Registro"
      button-text="Crear"
      v-model="showModal"
      @button-event="submitForm"
    >
      <NewRecordComponent ref="childForm"/>
    </WrapperModal>
  </div>

  <RouterView/>
</template>
