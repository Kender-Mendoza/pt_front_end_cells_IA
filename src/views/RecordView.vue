<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { defineAsyncComponent, ref } from 'vue';
import ButtonComponent from '@/components/shared/ButtonComponent.vue'

const NewRecordComponent = defineAsyncComponent(() => import('@/components/records/NewRecordComponent.vue'))
const NotificationComponent = defineAsyncComponent(() => import('@/components/shared/NotificationComponent.vue'))
const WrapperModalLayout = defineAsyncComponent(() => import('@/layouts/WrapperModalLayout.vue'))

const { t } = useI18n()
const showModal = ref<boolean>(false)
const notification = ref<boolean>(false)

const toggleModal = (openModal: boolean, showNotification: boolean) => {
  showModal.value = openModal
  notification.value = showNotification
}
</script>

<template>
  <NotificationComponent v-if="notification" :content="t('views.record_view.record_created')" />

  <div class="pa-4 text-center">
    <ButtonComponent :content="t('views.record_view.create_record')" @on-click-button="toggleModal(true, false)" />
    <WrapperModalLayout :title="t('views.record_view.new_record')" v-model="showModal">
      <NewRecordComponent @close-modal="toggleModal" />
    </WrapperModalLayout>
  </div>

  <RouterView />
</template>