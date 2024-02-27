<script setup lang="ts">

</script>

<template>

  <v-overlay
    z-index="905"
  >
    <template v-slot:activator="{props}">
      <v-responsive min-width="50">
        <v-text-field
          append-inner-icon="mdi-magnify"
          bg-color="#FFFFFF"
          class="mr-4"
          density="compact"
          hide-details
          placeholder="busque aqui seu produto"
          variant="outlined"
          v-bind="props"
        />
      </v-responsive>
    </template>
  </v-overlay>

</template>
