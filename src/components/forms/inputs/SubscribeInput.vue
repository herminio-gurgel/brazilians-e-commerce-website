<script setup>
import {ref} from 'vue'

const subscribe = ref(true)

</script>

<template>
  <v-checkbox color="success" class="mb-4" v-model="subscribe">
    <template v-slot:label>
      <p>receber e-mails promocionais</p>
    </template>
  </v-checkbox>
</template>
