<script lang="ts" setup>
import DefaultTitle from './AppBarTitle.vue'
import SearchBar from "@/components/forms/inputs/SearchInput.vue";
import LoginWrapper from "@/layouts/default/LoginWrapper.vue";
import IconMenu from "@/layouts/default/IconMenu.vue";
import AppBarExtension from "@/layouts/default/AppBarExtension.vue";
</script>

<template>
  <v-app-bar>
    <v-container class="d-flex align-center">
      <DefaultTitle/>
      <SearchBar/>
      <LoginWrapper/>
      <IconMenu/>
    </v-container>
    <template v-slot:extension>
      <AppBarExtension/>
    </template>
  </v-app-bar>
</template>
