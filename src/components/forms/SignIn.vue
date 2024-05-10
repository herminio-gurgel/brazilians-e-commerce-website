<script setup>
import {reactive, ref} from "vue";
import {useAuthStore} from "../../store/auth";
import {storeToRefs} from "pinia"
import {useRouter} from "vue-router";
import EmailInput from "./inputs/EmailInput";
import PasswordInput from "./inputs/PasswordInput";

const router = useRouter()
const store = useAuthStore()
const {isLoggedIn, errors} = storeToRefs(store)
const {handleLogin} = store
const dialog = ref(false)

const user = reactive({
  email: "",
  password: "",
})

const handleSubmit = async () => {
  await handleLogin(user)
  if(isLoggedIn.value){
    router.push({name: 'home'})
  }
}
</script>

<template>
  <v-container style="width: 420px">
    <v-form @submit.prevent="handleSubmit">
      <div class="text-center mb-8">
        <div class="d-flex justify-center align-center">
          <v-icon class="text-h3" icon="mdi-account-outline"></v-icon>
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
        v-on:validated="(n) =>  user.email = n"
      />

      <v-dialog
        v-model="dialog"
        style="backdrop-filter: blur(2px);"
        width="400"
      >
        <template v-slot:activator="{props}">
          <div class="d-flex justify-end" v-bind="props">
            <v-btn class="font-weight-light text-lowercase" v-bind:ripple="false" variant="plain">esqueceu?</v-btn>
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
        v-on:update:modelValue="(n)=> user.password = n"
      />

      <v-btn block class="text-lowercase" color="success" type="submit">continuar</v-btn>

      <div class="text-center font-weight-light">

        <div class="d-flex align-center justify-center">
          <p>não tem cadastro? </p>
          <v-btn class="text-decoration-none text-lowercase" to="sign-up" v-bind:ripple="false" variant="plain">
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
