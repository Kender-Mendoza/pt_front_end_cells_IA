<script setup lang="ts">
import NewRecordComponent from '@/components/records/NewRecordComponent.vue';
import ButtonComponent from '@/components/shared/ButtonComponent.vue'
import NotificationComponent from '@/components/shared/NotificationComponent.vue';
import WrapperModalLayout from '@/layouts/WrapperModalLayout.vue';
import { ref } from 'vue';

const showModal = ref<boolean>(false)
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
  <NotificationComponent content="Hola como estas?" />

  <div class="pa-4 text-center">
    <ButtonComponent
      content="Crear Registro"
      @on-click-button="tonggleModal"
    />

    <WrapperModalLayout
      title="Nuevo Registro"
      button-text="Crear"
      v-model="showModal"
      @button-event="submitForm"
    >
      <NewRecordComponent ref="childForm"/>
    </WrapperModalLayout>
  </div>

  <RouterView/>
</template>
