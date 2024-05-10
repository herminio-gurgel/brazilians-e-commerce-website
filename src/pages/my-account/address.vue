<script setup>
import {useAddressStore} from "../../store/address";

const store = useAddressStore();

defineProps({
  tasks: Array
})

</script>

<template>
  <div class="d-flex flex-column w-100">
    <div class="d-flex align-center justify-space-between">
      <div>
        <p class="text-h5 font-weight-bold">endereços</p>
        <p>aqui você pode castrar, alterar ou excluir um dos seus endereços</p>
      </div>
      <v-btn class="text-lowercase" prepend-icon="mdi-plus" variant="text">cadastrar novo endereço</v-btn>
    </div>

    <v-card class="align-self-center" width="400">
      <v-card-title>herminio carlos</v-card-title>
      <v-divider/>
      <v-card-text>
        <p>Avenida Henrique Galúcio, 3128</p>
        <p>Santa Rita, Macapá, AP</p>
        <p>CEP: 68901255</p>
        <v-radio label="endereço principal"></v-radio>
      </v-card-text>
    </v-card>
  </div>
</template>

<route lang="json">
{
  "name": "address",
  "meta": {
    "layout": "account",
    "auth": true
  }
}
</route>
