<script setup>
import zxcvbn from "zxcvbn";

const props = defineProps(['password'])

const passwordStrength = computed(() => {
  const result = zxcvbn(props.password);
  switch (result.score) {
    case 4: {
      return {
        color: "blue",
        value: 100,
        frase: "ótima",
      };
    }
    case 3: {
      return {
        color: "green",
        value: 75,
        frase: "forte",
      };
    }
    case 2: {
      return {
        color: "yellow",
        value: 50,
        frase: "média",
      };
    }
    case 1: {
      return {
        color: "orange",
        value: 25,
        frase: "fraca",
      };
    }
    case 0: {
      return {
        color: "red",
        value: 1,
        frase: "muito fraca",
      };
    }
  }
  return {};
});

</script>

<template>
  <div class="d-flex align-center" style="width: 280px">
    <div class="w-75">
      <v-progress-linear
        :color="passwordStrength.color"
        :model-value="passwordStrength.value"
      />
    </div>

    <div class="w-25 d-flex justify-space-around align-center">

      <span class="text-caption">{{ passwordStrength.frase }}</span>
      <v-menu
        max-width="300"
        open-on-hover
        close-delay="0"
        open-delay="0"
      >
        <template v-slot:activator="{ props }">
          <v-icon
            v-bind="props"
            icon="mdi-information-outline"
          ></v-icon>
        </template>
        <v-card>
          <v-card-text class="text-caption">
            dicas para uma senha forte:
            <ul>
              <li>
                combine letras maiúsculas, minúsculas,
                números e caracteres especiais
              </li>
              <li>
                não use informações pessoais, como data
                de nascimento ou CPF
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-menu>
    </div>
  </div>
</template>
