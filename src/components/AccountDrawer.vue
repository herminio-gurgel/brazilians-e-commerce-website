<script setup>
const items = [
  {
    title: 'pedidos',
    subtitle: 'acompanhar envio, ver Nota Fiscal',
    icon: 'mdi-package-variant-closed',
    to: '/my-account/orders'
  },
  {
    title: 'favoritos',
    subtitle: 'ver os Produtos que você favoritou',
    icon: 'mdi-heart-outline',
  },
  {
    title: 'vales',
    subtitle: 'ver e desbloquear seus vales',
    icon: 'mdi-ticket-percent-outline',
  },
  {title: 'gift cards', subtitle: 'ver seus gift cards', icon: 'mdi-wallet-giftcard', link: '', method: ''},
  {
    title: 'cadastro',
    subtitle: 'ver e alterar sues dados, seu e-mail e sua senha',
    icon: 'mdi-account-outline',
  },
  {
    title: 'endereços',
    subtitle: 'ver e alterar seus endereços',
    icon: 'mdi-map-marker-outline',
  },
  {title: 'cartões', subtitle: 'ver seus cartões cadastrados', icon: 'mdi-credit-card-outline', link: '', method: ''},
  {
    title: 'perguntas frequentes',
    subtitle: 'consultar perguntas e respostas frequentes',
    icon: 'mdi-help-circle-outline',
  },
  {
    title: 'privacidade',
    subtitle: 'ver políticas de privacidade, relatório de dados e gerenciar as notificações',
    icon: 'mdi-shield-check-outline',
  },
  {
    title: 'preferência de e-mail e mensagens',
    subtitle: 'escolher receber notificações por e-mail e SMS',
    icon: 'mdi-chat-processing-outline',
  },
]
</script>

<template>

    <v-list class="pt-0" bg-color="transparent" lines="two" nav min-width="350" width="350">

      <v-list-item
        class="mb-4"
        rounded="lg"
        style="background: white"
      >
        <v-list-item-title class="d-flex align-center">
          <v-avatar style="background-color: lightgray" class="mr-3">H</v-avatar>
          olá, aqui é sua conta
        </v-list-item-title>
      </v-list-item>

      <v-list-item
        v-bind:to="item.to"
        class="mb-2"
        rounded="lg"
        style="background-color: white;"
        v-for="(item) in items"
        :key="item">

        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title>{{ item.title }}</v-list-item-title>
        <v-list-item-subtitle class="text-break">{{ item.subtitle }}</v-list-item-subtitle>

        <template v-slot:append>
          <v-icon>mdi-chevron-right</v-icon>
        </template>

      </v-list-item>

    </v-list>
</template>

<style>
.background {
  background-color: #FFFFFF;
}
</style>
