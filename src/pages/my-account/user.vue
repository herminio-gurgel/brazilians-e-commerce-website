<template>
  <v-sheet class="w-100 px-6">
    <p class=" text-h5">cadastro</p>
    <p class="text-caption">
      <span class="text-warning">*</span> campos obrigatórios
    </p>
    <UpdateUser/>
  </v-sheet>
</template>

<script setup>
import UpdateUser from "../../components/forms/UpdateUser";
</script>

<route lang="json">
{
  "name": "user",
  "meta": {
    "layout": "account"
  }
}
</route>
