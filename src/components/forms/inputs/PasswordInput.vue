<script setup>
import {ref} from 'vue'
import zxcvbn from "zxcvbn";

const props = defineProps(['login', 'update'])

const password = ref()
const visible = ref(false)
const success = ref()

if (props.update){
  password.value = '********'
}

const passwordRules = {
  required: (value) => !!value || "preencha esse campo",
  min: (value) => value.length >= 8 || `Aumente este texto para 8 ou mais. No momento você está usando ${value.length}`,
  strength: (value) => {
    const score = zxcvbn(value).score;
    return score >= 2 || `senha fraca. combine letras maiúsculas, minúsculas, números e caracteres especiais`
  },
  validated: () => {
    success.value = 'success'
    return true;
  }

};

</script>

<template>
  <v-text-field
    v-bind:disabled="update"
    v-bind:hint="!login ? 'precisa ter entre 8 e 20 caracteres': ''"
    v-bind:style="!login ? 'width: 250px' : ''"
    maxlength="20"
    v-bind:append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
    v-bind:base-color="success"
    v-bind:rules="[
      passwordRules.required,
      !login ? passwordRules.min : ()=>{return true},
      !login ? passwordRules.strength : ()=>{return true},
      passwordRules.validated]"
    v-bind:type="visible ? 'text' : 'password'"
    v-model="password"
    v-on:click:append-inner="visible = !visible"
    validate-on="blur"
  >
    <template v-slot:label>
      <p class="text-black"><span class="text-warning">*</span> senha</p>
    </template>
  </v-text-field>

</template>
