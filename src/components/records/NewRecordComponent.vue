<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import TextInputComponent from '../shared/TextInputComponent.vue';

const valid = ref(false)
const password = ref<string>('')
const repeatPassword = ref<string>('')
const selected = ref<string[]>([])
const email = ref<string>('')
const model = shallowRef(null)

const onSubmit = () => {
  // primero verificar si los datos
}

</script>

<template>
  <h2> Nuevo registro </h2>
  <v-form v-model="valid" ref="form" @submit.prevent="onSubmit">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <TextInputComponent
            :label="'Nombre'"
            :model="'name'"
            :rules="[
              (value: string) => !!value || 'Campo obligatorio',
              (value: string) => (value && value.length >= 3) || 'Min 3 characters'
            ]
          "/>
        </v-col>

        <v-col cols="12" md="6" >
          <TextInputComponent
            :label="'Apellidos'"
            :model="'lastName'"
            :rules="[
              (value: string) => !!value || 'Campo obligatorio',
              (value: string) => (value && value.length >= 3) || 'Min 3 characters'
            ]
          "/>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            type="password"
            v-model="password"
            :label="'Password'"
            :rules="[
              (value: string) => !!value || 'Campo obligatorio',
            ]"
            hide-details="auto"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6" >
          <v-text-field
            type="password"
            v-model="repeatPassword"
            :label="'Confirmar Contraseña'"
            :rules="[
              (value: string) => !!value || 'Campo obligatorio',
            ]"
            hide-details="auto"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-date-input
            prepend-icon=""
            prepend-inner-icon="$calendar"
            label="Date input">
          </v-date-input>
        </v-col>

        <v-col cols="12" md="6" >
          <v-autocomplete
            v-model="selected"
            :items="['Trevor Handsen', 'Alex Nelson']"
            chips
            label="To"
            full-width
            hide-details
            hide-no-data
            hide-selected
            multiple
            single-line
          ></v-autocomplete>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="12">
          <v-switch label="Desea recibir información" color="primary" inset></v-switch>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="12">
          <v-text-field
            type="email"
            v-model="password"
            :label="'Email'"
            :rules="[
              (value: string) => !!value || 'Campo obligatorio',
            ]"
            hide-details="auto"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-btn type='submit' color="primary" elevation="4" large > Crear </v-btn>

    </v-container>
  </v-form>

</template>
