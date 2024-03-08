<script setup lang="ts">
import {reactive, ref} from "vue";
import axios from "axios";
import {vMaska} from "maska";

const emit = defineEmits(['responseReceived', 'requestSent'])

const cep = ref();
let address = reactive({})

const options = reactive({
  mask: "#####-###",
})

const cepRules = {
  required: value => !!value || 'campo obrigatório',
  complete: value => value.replace('-', '').length === 8 || 'campo incompleto',
  request: value => {
    address = findAddress(value.replace('-', ''))
    return true
  }
}

async function findAddress(cep) {

  emit('requestSent')

  axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    .then(function (response) {

      address = response.data
      return emit('responseReceived', address)

    })
    .catch(function (error) {

      console.log(error)

    })
}

</script>

<template>
  <v-text-field
    bg-color="#FFFFFF"
    class="mr-4"
    density="compact"
    label="digite seu CEP"
    maxlength="9"
    placeholder="_____-___"
    v-bind:rules="[cepRules.required, cepRules.complete, cepRules.request]"
    v-maska:[options]
    v-model="cep"
    validate-on="submit"
    variant="outlined"
  >
  </v-text-field>
</template>
