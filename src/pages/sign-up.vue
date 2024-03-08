<script setup>
import {reactive, ref} from "vue";
import NameInput from "../components/forms/inputs/NameInput";
import GenderInput from "../components/forms/inputs/GenderInput";
import BirthdateInput from "../components/forms/inputs/BirthdateInput";
import CPFInput from "../components/forms/inputs/CPFInput";
import PhoneInput from "../components/forms/inputs/PhoneInput";
import EmailInput from "../components/forms/inputs/EmailInput";
import SubscribeInput from "../components/forms/inputs/SubscribeInput";
import PasswordInput from "../components/forms/inputs/PasswordInput";
import PassWordStrength from "../components/forms/inputs/PassWordStrength";
import ShareDataInput from "../components/forms/inputs/ShareDataInput";

const user = reactive({
  name: "",
  gender: "",
  birthdate: "",
  cpf: "",
  phoneNumber: "",
  email: "",
  subscribe: true,
  password: "",
  shareData: true
})

</script>

<template>
  <v-container style="width: 550px">
    <v-form>
      <div class="text-center mb-6">
        <span class="font-weight-bold text-h5">criar seu cadastro</span>
        <p>
          veja seus pedidos de forma fácil, compre mais rápido e tenha
          uma experiência personalizada :)
        </p>
        <p class="text-caption">
          <span class="text-warning">*</span> campos obrigatórios
        </p>
      </div>

      <NameInput v-on:validated="(n) => user.name = n"/>
      <GenderInput v-on:validated="(n) => user.gender = n"/>
      <BirthdateInput v-on:validated="(n) => user.birthdate = n"/>
      <CPFInput v-on:validated="(n) =>  user.cpf = n"/>
      <p class="mb-8 font-weight-bold text-caption text-decoration-underline">é pessoa jurídica? conheça a brasileiros
        empresas
      </p>
      <PhoneInput v-on:validated="(n) =>  user.phoneNumber = n"/>
      <EmailInput v-on:validated="(n) =>  user.email = n"/>
      <SubscribeInput v-on:update:modelValue="(n) =>  user.subscribe = n"/>
      <PasswordInput v-on:update:modelValue="(n)=> user.password = n"/>
      <PassWordStrength v-bind:password="user.password"/>
      <ShareDataInput v-on:update:modelValue="(n) =>  user.shareData = n"/>

      <v-btn type="submit" color="success" class="mt-2 mb-6" block>
        criar seu cadastro
      </v-btn>

      <div class="text-center text-caption">
        <p class="mb-6"> Não se preocupe, nosso site é seguro! Ao criar o seu cadastro, você concorda com a nossa
          <span class="font-weight-bold text-decoration-underline">política de privacidade</span>
        </p>
        <p> já tem cadastro? <span class="font-weight-bold text-decoration-underline">entrar</span>
        </p>
      </div>
    </v-form>
  </v-container>

</template>

//@formatter:off
<route lang="yaml">
meta:
  layout: simple
</route>
//@formatter:on
