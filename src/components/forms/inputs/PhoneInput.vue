<script setup>
import {vMaska} from "maska";
import {reactive, ref} from "vue";

const emit = defineEmits(['validated'])
const props = defineProps(['data'])

const phoneNumber = ref(props.data)
const success = ref()
const options = reactive({
  mask: "(##)#####-####"
})

const phoneRules = {
  required: (value) =>
    !!value || "é necessário informar o número do telefone principal",
  valid: (value) => {
    const pattern = /^\([1-9]{2}\)(?:[2-8]|9[0-9])[0-9]{3}-[0-9]{4}$/;
    return pattern.test(value) || "número do telefone principal incompleto";
  },
  validated: (value) => {
    const regex = /\D+/g
    success.value = 'success'
    const phone = value.replaceAll(regex, '')
    emit('validated', phone)

    return true
  }
};
</script>

<template>
  <v-text-field
    class="mb-6"
    hint="caso a gente precise entrar em contato sobre seus pedidos"
    maxlength="14"
    placeholder="(__)_____-____"
    v-bind:rules="[phoneRules.required, phoneRules.valid, phoneRules.validated]"
    v-bind:base-color="success"
    v-maska:[options]
    v-model="phoneNumber"
    validate-on="blur"
    style="width: 180px"
  >
    <template v-slot:label>
      <p class="text-black"><span class="text-warning">*</span> telefone</p>
    </template>
  </v-text-field>
</template>
