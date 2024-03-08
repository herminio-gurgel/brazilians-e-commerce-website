<script setup>
import {ref} from "vue";
import {vMaska} from "maska";
import moment from 'moment'

const emit = defineEmits(['validated']);

const birthdate = ref();
const success = ref();


const options = reactive({mask: "##/##/####"})

const dateRules = {
  required: (value) => !!value || "é necessário informar a data de nascimento",
  complete: (value) => value.replaceAll('/', '').length === 8 || "preencha esse campo",
  validated: value => {
    const date = moment(value, "DD-MM-YYYY").format("YYYY-MM-DD")
    emit('validated', date)
    success.value = 'success'
    return true
  }
};
</script>

<template>
  <v-text-field
    center-affix
    class="mb-6"
    hint="necessário pra identificar a maioridade, no formato DD/MM/AAAA"
    placeholder="__/__/____"
    v-bind:rules="[dateRules.required, dateRules.complete, dateRules.validated]"
    v-bind:base-color="success"
    v-maska:[options]
    v-model="birthdate"
    validate-on="blur"
    style="width: 130px"
    maxlength="10"
  >
    <template v-slot:label>
      <p class="text-black"><span class="text-warning">*</span> nascimento</p>
    </template>

  </v-text-field>
</template>
