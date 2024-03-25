<script setup>
import DefaultTitle from '../default/AppBarTitle.vue'
import SearchInput from "../../components/forms/inputs/SearchInput";
import LoginWrapper from "../default/LoginWrapper";
</script>

<template>

  <v-app-bar>
    <v-container class="d-flex align-center">
      <DefaultTitle/>
      <SearchInput/>
      <LoginWrapper/>
    </v-container>
  </v-app-bar>

</template>

