<script setup lang="ts">
import { useForm } from 'vee-validate'
import { useI18n } from 'vue-i18n'
import { ref, inject, type Ref } from 'vue'

import { recordSchema } from '@/validations/RecordSchema'

import InputTextComponent from '@/components/shared/InputTextComponent.vue'
import InputPasswordComponent from '@/components/shared/InputPasswordComponent.vue'
import InputDateComponent from '@/components/shared/InputDateComponent.vue'
import SelectComponent from '@/components/shared/SelectComponent.vue'
import InputEmailComponent from '@/components/shared/InputEmailComponent.vue'
import SwitchComponent from '@/components/shared/SwitchComponent.vue'

const { t } = useI18n()
const notification = inject<Ref<boolean>>('notification')
const showEmailInput = ref<boolean>(true)

const { handleSubmit } = useForm({
  validationSchema: recordSchema(t),
  initialValues: { receive_info: true },
})

const emits = defineEmits<{
  (event: 'closeModal'): void
}>()


const submitForm = handleSubmit((values) => {
  console.log('Datos validos', values)

  if (notification) notification.value = true
  emits('closeModal')
})

const onCancelCreation = () => {
  emits('closeModal')
}

const onClickSwitch = (value: boolean) => {
  showEmailInput.value = value
}
</script>

<template>
  <form @submit="submitForm">
    <v-container class="pa-0">
      <v-row>
        <v-col cols="12" md="6">
          <InputTextComponent name="name" :label="t('components.records.new_record_component.name')" />
        </v-col>

        <v-col cols="12" md="6">
          <InputTextComponent name="last_name" :label="t('components.records.new_record_component.last_name')" />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <InputPasswordComponent name="password" :label="t('components.records.new_record_component.password')" />
        </v-col>

        <v-col cols="12" md="6">
          <InputPasswordComponent name="comfirm_password"
            :label="t('components.records.new_record_component.confirm_password')" />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <InputDateComponent name="birth_date" :label="t('components.records.new_record_component.birth_date')" />
        </v-col>

        <v-col cols="12" md="6">
          <SelectComponent name="intereses" :label="t('components.records.new_record_component.interests')"
            :values="['Leer', 'Escribir', 'Programar']" />
        </v-col>
      </v-row>

      <v-divider class="my-2"></v-divider>

      <v-row>
        <v-col cols="12" md="6">
          <SwitchComponent name="receive_info" :label="t('components.records.new_record_component.receive_info')"
            @checked="onClickSwitch" />
        </v-col>
      </v-row>

      <v-row v-show="showEmailInput">
        <v-col cols="12" md="12">
          <InputEmailComponent name="email" :label="t('components.records.new_record_component.email')" />
        </v-col>
      </v-row>

      <p class="text-medium-emphasis ps-2 text-caption">
        {{ t('components.records.new_record_component.required_fields') }}
      </p>

      <v-divider class="mt-2"></v-divider>

      <div class="my-2 d-flex justify-end">
        <v-btn class="text-button" :text="t('components.records.new_record_component.cancel')" variant="text"
          @click="onCancelCreation"></v-btn>

        <v-btn type="submit" class="text-button ml-3" variant="tonal" color="primary"
          :text="t('components.records.new_record_component.create')"></v-btn>
      </div>
    </v-container>
  </form>
</template>
