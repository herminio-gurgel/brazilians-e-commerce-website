<script setup>
import AccountBar from './account/AppBar';
import AccountView from './account/AccountView'
</script>

<template>
  <v-app>
    <AccountBar/>
    <AccountView/>
  </v-app>

</template>



<route lang="json">
{
"meta": {
"layout": false
}
}
</route>
