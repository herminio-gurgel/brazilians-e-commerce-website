<script lang="ts" setup>
//
import DepartmentMenu from "@/layouts/default/DepartmentMenu.vue";
</script>

<template>
  <v-main>
    <DepartmentMenu/>
    <router-view/>
  </v-main>
</template>

<route lang="json">
{
"meta": {
"layout": "normal"
}
}
</route>
