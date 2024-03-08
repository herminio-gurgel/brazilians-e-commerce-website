<script setup lang="ts">
import {vMaska} from "maska";
import {ref, reactive} from "vue";

const cpf = ref();
const emit = defineEmits(['validated']);
const success = ref();

const options = reactive({
  mask: "###-###-###.##",
})

const cpfRules = {
  required: (value) => !!value || "é necessário informar um CPF",
  complete: (value) =>
    value.length === 14 ||
    "o CPF precisa ter 11 dígitos, por exemplo: 123.456.789-10",
  validated: (value) => {
    const regex = /\D+/g
    const cpf = value.replaceAll(regex, '')
    emit('validated', cpf)
    success.value = 'success'
    return true
  }
};
</script>

<template>
  <v-text-field
    hint="necessário pra emissão das Notas Fiscais"
    placeholder="___.___.___-__"
    v-bind:rules="[cpfRules.required, cpfRules.complete, cpfRules.validated]"
    v-bind:base-color="success"
    v-maska:[options]
    v-model="cpf"
    validate-on="blur"
    maxlength=14
    style="width: 150px"
    class="a"
  >
    <template v-slot:label>
      <p class="text-black"><span class="text-warning">*</span> CPF</p>
    </template>
  </v-text-field>
</template>
