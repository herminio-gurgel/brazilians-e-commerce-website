<script setup>

import {reactive, ref} from "vue";
import EmailInput from "./inputs/EmailInput";
import PasswordInput from "./inputs/PasswordInput";

const dialog = ref(false)

const user = reactive({
  name: "",
  email: "",
})
</script>

<template>
  <v-container style="width: 420px">
    <v-form>
      <div class="text-center mb-8">
        <div class="d-flex justify-center align-center">
          <v-icon icon="mdi-account-outline" class="text-h3"></v-icon>
          <span class="font-weight-bold text-h5">login do cliente</span>
        </div>
        <p class="font-weight-light">
          veja seus pedidos de forma fácil, compre mais rápido e tenha
          uma experiência personalizada :)
        </p>
      </div>

      <EmailInput
        class="mb-4"
        v-bind:login="true"
        v-on:validated="(n) =>  user.email = n"/>

      <v-dialog
        width="400"
        style="backdrop-filter: blur(2px);"
        v-model="dialog"
      >
        <template v-slot:activator="{props}">
          <div v-bind="props" class="d-flex justify-end">
            <v-btn v-bind:ripple="false" variant="plain" class="font-weight-light text-lowercase">esqueceu?</v-btn>
          </div>
        </template>

        <v-card>
          <div class="d-flex justify-end mt-2 mr-2">
            <v-icon icon="mdi-close" @click="dialog = false"/>
          </div>
          <v-card-title>trocar a senha</v-card-title>
          <v-card-text>
            <p class="text-caption">Identifique-se para receber um e-mail com as instruções e o link para criar uma nova
              senha.</p>
            <p class="text-caption mt-2">e-mail:</p>
            <v-text-field class="mt-4" placeholder="Ex. joaodasilva@gmail.com"></v-text-field>
          </v-card-text>
          <v-card-actions class="d-flex justify-space-around">
            <v-btn class="text-lowercase" color="green" @click="dialog=false">cancelar</v-btn>
            <v-btn class="text-lowercase" color="green" variant="flat">enviar senha</v-btn>
          </v-card-actions>
        </v-card>

      </v-dialog>

      <PasswordInput
        class="mb-4"
        v-bind:login="true"
        v-on:update:modelValue="(n)=> user.password = n"/>

      <v-btn type="submit" color="success" class="text-lowercase" block>continuar</v-btn>

      <div class="text-center font-weight-light">

        <div class="d-flex align-center justify-center">
          <p>não tem cadastro? </p>
          <v-btn v-bind:ripple="false" to="sign-up" variant="plain" class="text-decoration-none text-lowercase">
            cadastre-se
          </v-btn>
        </div>
        <p class="mb-6">
          Ao continuar com o acesso, você concorda com a nossa
          <span class="text-decoration-underline">política de privacidade</span>
        </p>

      </div>

    </v-form>
  </v-container>
</template>
