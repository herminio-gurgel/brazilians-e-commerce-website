<script setup>
import {ref} from 'vue'

const shareData = ref(true)

</script>

<template>
  <v-checkbox color="success" class="mb-4" v-model="shareData">
    <template v-slot:label>
      <p>
        compartilhar meus dados com parceiros para ter conteúdos personalizados, veja
        <span class="font-weight-bold text-decoration-underline">como funciona.</span>
      </p>
    </template>
  </v-checkbox>
</template>
