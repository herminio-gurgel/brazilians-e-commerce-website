<script setup>
import {ref} from 'vue';
import CEPField from "@/components/forms/inputs/CEPInput.vue";

const form = ref();
const address = ref();
const alert = ref(false);
const dialog = ref(false);
const loading = ref(false);

function updateAddress(n) {

  if (n.erro) {
    alert.value = true
    loading.value = false
    return false
  }

  address.value = n
  alert.value = false
  dialog.value = false
  loading.value = false

}

async function validate() {

  const {valid} = await form.value.validate()

}

</script>

<template>

  <v-menu
    v-if="!address"
    open-on-hover
    close-delay="650"
    :close-on-content-click="false"
    scrim
    width="300"
  >

    <template v-slot:activator="{props}">
      <v-btn
        v-bind="props"
        v-ripple="false"
        prepend-icon="mdi-map-marker-outline"
      >
        <span class="text-lowercase">informe seu&nbsp;</span>
        cep
      </v-btn>
    </template>

    <v-card>
      <v-card-text>
        <p class="mb-6">para ver os melhores fretes e prazos para sua região</p>

        <v-form
          class="d-flex"
          ref="form">

          <CEPField
            v-on:responseReceived="(n) => updateAddress(n)"/>

          <v-btn
            v-on:click="validate"
            text="ok"
            class="text-lowercase"
            variant="outlined"
            color="green"
            height="40"/>

        </v-form>

        <v-alert
          v-model="alert"
          density="compact"
          class="pa-0"
          height="30"
          type="warning"
          title="CEP não encontrado"
        />

        <p class="my-3">
          <span class="text-lowercase">
            acesse os endereços cadastrados
          </span>
        </p>
        <v-btn class="text-lowercase" block color="green" text="fazer login" to="/my-account/sign-in"/>
      </v-card-text>
    </v-card>
  </v-menu>

  <v-dialog
    width="350"
    v-model="dialog"
    transition="dialog-bottom-transition"
    v-else>

    <template v-slot:activator="{props}">

      <v-btn
        v-bind="props"
        v-ripple="false"
        prepend-icon="mdi-map-marker-outline"
        width="200"
        class="d-flex justify-start mr-4"
      >
        <span style="max-width: 160px" class="text-caption text-truncate">{{
            `${address.logradouro}, ${address.bairro}`
          }}</span>
      </v-btn>

    </template>
    <v-card>
      <div class="d-flex justify-end mt-2 mr-2">
        <v-icon icon="mdi-close" @click="dialog = false"/>
      </div>
      <v-card-text>

        <p class="mb-6">as melhores ofertas e condições de frete para a sua região :)</p>
        <p class="mb-6">digite um cep</p>

        <v-form
          class="d-flex"
          ref="form">

          <CEPField
            v-on:responseReceived="(n) => updateAddress(n)"
            v-on:requestSent="loading = true"
          />

          <v-btn
            v-on:click="validate"
            :loading="loading"
            text="ok"
            class="text-lowercase"
            variant="outlined"
            color="green"
            height="40"/>

        </v-form>

        <v-alert
          v-model="alert"
          density="compact"
          class="pa-0"
          height="30"
          type="warning"
          title="CEP não encontrado"
        />

        <p class="my-3">
          <span class="text-lowercase">
            acesse os endereços cadastrados
          </span>
        </p>
        <v-btn class="text-lowercase" block color="green" text="fazer login" to="/my-account/sign-in"/>
      </v-card-text>
    </v-card>
  </v-dialog>

</template>
