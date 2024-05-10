<script setup>
import SignIn from "../../components/forms/SignIn";
</script>

<template>

  <SignIn/>

</template>

<route lang="json">
{
  "name": "sign-in",
  "meta": {
    "layout": "simple",
    "guest": true
  }
}
</route>
