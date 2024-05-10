<script setup>
import SignUp from "../../components/forms/SignUp"</script>

<template>

  <SignUp/>

</template>

<route lang="json">
{
  "name": "sign-up",
  "meta": {
    "layout": "simple",
    "guest": true
  }
}
</route>
