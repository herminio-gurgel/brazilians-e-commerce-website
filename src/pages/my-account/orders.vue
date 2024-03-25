<script setup>
import OrderPanel from "../../components/OrderPanel";
import BestSellers from "../../components/BestSellers";
</script>

<template>
  <v-sheet class="w-100 px-6">

    <div>
      <p class="text-h5 my-8">pedidos</p>
      <v-text-field
        rounded
        placeholder="psiu, procure por aqui o seu pedido ou produto :)"
      >
        <template v-slot:append-inner>
          <v-icon color="green" size="40">mdi-magnify</v-icon>
        </template>
      </v-text-field>
    </div>

    <OrderPanel class="my-8" />
    <OrderPanel class="my-8" />
    <OrderPanel class="my-8" />

    <BestSellers />

  </v-sheet>
</template>

<route lang="json">
{
"meta": {
"layout": "account"
}
}
</route>
