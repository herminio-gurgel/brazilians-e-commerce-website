<script setup>
import EmailInput from "./inputs/EmailInput";
import SubscribeInput from "./inputs/SubscribeInput";
import PasswordInput from "./inputs/PasswordInput";
import NameInput from "./inputs/NameInput";
import NicknameInput from "./inputs/NicknameInput";
import GenderInput from "./inputs/GenderInput";
import BirthdateInput from "./inputs/BirthdateInput";
import CPFInput from "./inputs/CPFInput";
import PhoneInput from "./inputs/PhoneInput";
import {useAuthStore} from "../../store/auth";
import {reactive} from "vue";

const store = useAuthStore()

const form = reactive({
  name: "",
  gender: "",
  birthdate: "",
  cpf: "",
  phoneNumber: "",
  subscribe: "",
  shareData: ""
})
</script>

<template>
  <v-form>
    <p class="mb-6 text-h5">dados da conta</p>
    <div class="cursor-not-allowed">
      <EmailInput
        v-bind:data="store.user.email"
        v-bind:update="true"
      />
    </div>
    <SubscribeInput v-bind:data="store.user.subscribe"/>
    <div class="cursor-not-allowed">
      <PasswordInput v-bind:update="true"/>
    </div>
    <p class="my-3 text-h5">dados pessoais</p>
    <NameInput v-bind:data="store.user.name"/>
    <NicknameInput v-bind:data="store.user.nickname"/>
    <GenderInput v-bind:data="store.user.gender"/>
    <BirthdateInput v-bind:data="store.user.birthdate"/>
    <CPFInput v-bind:data="store.user.cpf"/>
    <PhoneInput v-bind:data="store.user.phone"/>

    <div class="cursor-not-allowed">
      <v-btn class="mt-2 mb-6 text-lowercase" color="success" disabled type="submit">
        salvar alterações
      </v-btn>
    </div>
  </v-form>
</template>

