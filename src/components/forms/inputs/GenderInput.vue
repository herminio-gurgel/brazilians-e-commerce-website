<script setup>

import {ref} from "vue";

const emit = defineEmits(['validated']);

const gender = ref()

const genderRules = {
  required: (value) => !!value || "é necessário informar um gênero",
  validated: value => {
    emit('validated', value)
    return true
  }
};
</script>

<template>
  <v-radio-group
    class="mb-3"
    color="success"
    density="compact"
    inline
    v-bind:rules="[genderRules.required, genderRules.validated]"
    v-model="gender"
    validate-on="input"
  >
    <template v-slot:label>
      <p><span class="text-warning">*</span> gênero</p>
    </template>
    <v-radio class="mr-4" label="feminino" value="f"></v-radio>
    <v-radio class="mr-4" label="masculino" value="m"></v-radio>
    <v-radio label="não informar" value="n"></v-radio>
  </v-radio-group>
</template>
