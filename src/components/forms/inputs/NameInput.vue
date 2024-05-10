<script setup lang="ts">
import {ref} from "vue";

const props = defineProps(['data'])
const emit = defineEmits(['validated'])

const name = ref(props.data);
const success = ref();

const nameRules = {
  required: value => !!value || "por favor, informe o nome e o sobrenome",
  fullName: value => {
    const pattern = /^[^\d\s]+([A-z])(\s+)([A-z]+)/;
    return pattern.test(value) || "nome deve ser completo";
  },
  validated: value => {
    success.value = 'success'
    emit('validated', value)
    return true
  }
};

</script>

<template>
  <v-text-field
    class="mb-4"
    v-bind:rules="[nameRules.required, nameRules.fullName, nameRules.validated]"
    v-bind:base-color="success"
    v-model="name"
    validate-on="blur"
    style="max-width: 400px"
  >
    <template v-slot:label>
      <p class="text-black"><span class="text-warning text-">*</span> nome completo</p>
    </template>
  </v-text-field>
</template>
