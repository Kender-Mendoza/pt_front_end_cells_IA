<script setup lang="ts">
import { useForm } from 'vee-validate'
import { useI18n } from "vue-i18n";
import { recordSchema } from '@/validations/RecordSchema';

import InputTextComponent from '@/components/shared/InputTextComponent.vue';
import InputPasswordComponent from '@/components/shared/InputPasswordComponent.vue';
import InputDateComponent from '@/components/shared/InputDateComponent.vue';
import SelectComponent from '@/components/shared/SelectComponent.vue';
import InputEmailComponent from '@/components/shared/InputEmailComponent.vue';
import SwitchComponent from '@/components/shared/SwitchComponent.vue';

const { t } = useI18n();
const { handleSubmit } = useForm({
  validationSchema: recordSchema(t),
});
const submitForm = handleSubmit((values) => {
  console.log('Datos validos', values)
})
</script>

<template>
  <form @submit="submitForm" >
    <v-container class="pa-0">
      <v-row>
        <v-col cols="12" md="6">
          <InputTextComponent
            name="name"
            label="Nombre *"
          />
        </v-col>

        <v-col cols="12" md="6">
          <InputTextComponent
            name="last_name"
            label="Segundo Nombre *"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <InputPasswordComponent
            name="password"
            label="Contraseña *"
          />
        </v-col>

        <v-col cols="12" md="6">
          <InputPasswordComponent
            name="comfirm_password"
            label="Confirmar Contraseña *"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <InputDateComponent
            name="birth_date"
            label="Fecha de Cumpleaños *"
          />
        </v-col>

        <v-col cols="12" md="6">
          <SelectComponent
            name="intereses"
            label="Intereses"
            :values="['Leer', 'Escribir', 'Programar']"
          />
        </v-col>
      </v-row>

      <v-divider class="my-2"></v-divider>

      <v-row>
        <v-col cols="12" md="12">
          <SwitchComponent
            label="Desea recibir información"
            name="recibe_info"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="12">
          <InputEmailComponent
            name="email"
            label="E-mail"
          />
        </v-col>
      </v-row>

      <v-card-actions>
        <v-btn
          type="submit"
          color="primary"
          block
          size="large"
          :loading="false"
        >
          Enviar
        </v-btn>
      </v-card-actions>
    </v-container>
  </form>
</template>
