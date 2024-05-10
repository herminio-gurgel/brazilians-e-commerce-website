<script setup>
const props = defineProps(['data'])
const nickname = ref(props.data)
</script>

<template>
  <v-text-field
    class="mb-4"
    style="max-width: 400px"
    v-model="nickname"
  >
    <template v-slot:label>
      <p class="text-black">como gostaria que a gente te chamasse? <span class="text-caption">(opcional)</span></p>
    </template>
  </v-text-field>
</template>

<style scoped>

</style>
