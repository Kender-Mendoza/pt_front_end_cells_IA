<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { defineAsyncComponent, ref, provide, type Ref } from 'vue';
import ButtonComponent from '@/components/shared/ButtonComponent.vue'

const NotificationComponent = defineAsyncComponent(() => import('@/components/shared/NotificationComponent.vue'))
const WrapperModalLayout = defineAsyncComponent(() => import('@/layouts/WrapperModalLayout.vue'))

const { t } = useI18n()
const showModal = ref<boolean>(false)
const notification = ref<boolean>(false)

provide<Ref<boolean>>('notification', notification)

const toggleModal = (openModal: boolean) => {
  showModal.value = openModal
}
</script>

<template>
  <NotificationComponent v-model="notification" :content="t('views.record_view.record_created')" />

  <div class="pa-4 text-center">
    <ButtonComponent :content="t('views.record_view.create_record')" @on-click-button="toggleModal(true)" />
    <WrapperModalLayout :title="t('views.record_view.new_record')" v-model="showModal"/>
  </div>

  <RouterView />
</template>