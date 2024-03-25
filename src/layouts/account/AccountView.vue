<script setup>
import AccountDrawer from "../../components/AccountDrawer";
</script>
<template>
  <v-main>
    <v-container class="d-flex">
      <AccountDrawer/>
      <router-view/>
    </v-container>
  </v-main>
</template>

<route lang="json">
{
"meta": {
"layout": "account"
}
}
</route>
