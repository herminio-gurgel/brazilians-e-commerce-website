<script setup>

</script>

<template>

  <v-sheet max-width="800">
    <p class="text-h5 font-weight-bold mt-8">os itens mais vendidos</p>
    <v-slide-group
      disabled
      class="mt-6"
      show-arrows
    >
      <v-slide-group-item
        v-for="n in 15"
        :key="n"
        v-slot="{ isSelected, toggle,}"
      >
        <v-card
          class="ma-4"
          color="grey-lighten-1"
          width="142"
          height="200"
          @click="toggle"
        >
          <v-card-title>{{ n }}</v-card-title>
          <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
              <v-icon
                v-if="isSelected"
                color="white"
                icon="mdi-close-circle-outline"
                size="48"
              ></v-icon>
            </v-scale-transition>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>

    <div class="d-flex justify-space-around">
      <v-btn color="green" class="text-lowercase">ver mais vendidos</v-btn>
    </div>

  </v-sheet>

</template>
