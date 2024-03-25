<script setup>
import OrderPanel from "../../components/OrderPanel";
import BestSellers from "../../components/BestSellers";
</script>

<template>

  <v-sheet class="ml-4 pa-4" rounded="lg">

    <div>
      <p class="text-h5">último pedido</p>
      <p class="mb-6">
        aqui tá seu pedido mais recente, acompanhe todos pelo menu lateral <span class="font-weight-bold">pedidos</span>
      </p>
    </div>

    <OrderPanel/>

    <BestSellers/>

  </v-sheet>

</template>

<route lang="json">
{
"meta": {
"layout": "account"
}
}
</route>
