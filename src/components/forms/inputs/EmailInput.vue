<script setup>
import {ref} from 'vue'

const emit = defineEmits(['validated'])

const props = defineProps(['login', 'update', 'data'])
const email = ref(props.data)
const success = ref()

const emailRules = {
  required: (value) => !!value || "é necessário informar um e-mail",
  valid: (value) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || "e-mail incompleto";
  },
  validated: (value) => {
    const emailAddress = value
    success.value = 'success'
    emit('validated', emailAddress)
    return true;
  }
};
</script>

<template>
  <v-text-field
    v-bind:disabled="update"
    v-bind:hint="!login ? 'informe um e-mail válido. Você vai precisar ativar sua conta depois de criar seu cadastro' : ''"
    v-bind:rules="[emailRules.required, emailRules.valid, emailRules.validated]"
    v-bind:base-color="success"
    v-model="email"
    validate-on="blur"
    style="max-width: 400px"
  >
    <template v-slot:label>
      <p class="text-black"><span class="text-warning">*</span> e-mail</p>
    </template>
  </v-text-field>
</template>
