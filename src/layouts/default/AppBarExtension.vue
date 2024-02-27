<script setup lang="ts">

import CEPWrapper from "@/layouts/default/CEPWrapper.vue";

const topics = [
  {name: 'pra sua empresa'},
  {name: 'baixe o app'},
  {name: 'entrega rápida'},
  {name: 'serviços'},
  {name: 'nossas lojas'},
  {name: 'pix parcelado'},
  {name: 'lojas oficiais'},
  {name: 'outlet'},
  {name: 'oferta do dia'},
]

</script>

<template>
  <v-toolbar density="compact" color="green">
    <v-container class="d-flex">
      <CEPWrapper/>
      <v-spacer />
      <v-toolbar-items>
        <v-btn class="px-2" v-for="topic in topics" :key="topic.name">
          <span class="text-lowercase font-weight-bold text-caption">{{ topic.name }}</span>
        </v-btn>
      </v-toolbar-items>
    </v-container>
  </v-toolbar>
</template>

<style scoped>

</style>
