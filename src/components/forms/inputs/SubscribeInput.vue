<script setup>
import {ref} from 'vue'

const props = defineProps(['data'])

const subscribe = ref(props.data === undefined ? true : props.data)

</script>

<template>
  <v-checkbox color="success" class="mb-4" v-model="subscribe">
    <template v-slot:label>
      <p>receber e-mails promocionais</p>
    </template>
  </v-checkbox>
</template>
