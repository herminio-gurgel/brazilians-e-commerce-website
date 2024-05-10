<script setup>
const items = [
  {
    title: 'olá, aqui é sua conta',
    props: {
      prependIcon: "mdi-account-outline",
      class: 'mb-6 bg-white'
    }
  },
  {
    title: 'pedidos',
    props: {
      subtitle: 'acompanhar envio, ver Nota Fiscal',
      prependIcon: 'mdi-package-variant-closed',
      // activeClass: 'border-s-lg',
      appendIcon: 'mdi-chevron-right',
      class: 'bg-white mb-2',
      to: {name: 'orders'}
    },
  },
  // {
  //   title: 'favoritos',
  //   props: {
  //     subtitle: 'ver os Produtos que você favoritou',
  //     prependIcon: 'mdi-heart-outline',
  //     appendIcon: 'mdi-chevron-right',
  //     class: 'bg-white mb-2'
  //   },
  //
  // },
  // {
  //   title: 'vales',
  //   props: {
  //     subtitle: 'ver e desbloquear seus vales',
  //     prependIcon: 'mdi-ticket-percent-outline',
  //     appendIcon: 'mdi-chevron-right',
  //     class: 'bg-white mb-2'
  //   },
  // },
  // {
  //   title: 'gift cards',
  //   props: {
  //     subtitle: 'ver seus gift cards',
  //     prependIcon: 'mdi-wallet-giftcard',
  //     appendIcon: 'mdi-chevron-right',
  //     class: 'bg-white mb-2'
  //   },
  // },
  {
    title: 'cadastro',
    props: {
      subtitle: 'ver e alterar sues dados, seu e-mail e sua senha',
      prependIcon: 'mdi-account-outline',
      appendIcon: 'mdi-chevron-right',
      class: 'bg-white mb-2',
      to: {name: 'user'}
    },
  },
  {
    title: 'endereços',
    props: {
      subtitle: 'ver e alterar seus endereços',
      prependIcon: 'mdi-map-marker-outline',
      appendIcon: 'mdi-chevron-right',
      to: {name: 'address'},
      class: 'bg-white mb-2'
    },
  },
  // {
  //   title: 'cartões',
  //   props: {
  //     subtitle: 'ver seus cartões cadastrados',
  //     appendIcon: 'mdi-chevron-right',
  //     prependIcon: 'mdi-credit-card-outline',
  //     class: 'bg-white mb-2'
  //   },
  // },
  // {
  //   title: 'perguntas frequentes',
  //   props: {
  //     subtitle: 'consultar perguntas e respostas frequentes',
  //     appendIcon: 'mdi-chevron-right',
  //     prependIcon: 'mdi-help-circle-outline',
  //     class: 'bg-white mb-2'
  //   },
  // },
  // {
  //   title: 'privacidade',
  //   props: {
  //     subtitle: 'ver políticas de privacidade, relatório de dados e gerenciar as notificações',
  //     appendIcon: 'mdi-chevron-right',
  //     prependIcon: 'mdi-shield-check-outline',
  //     class: 'bg-white mb-2'
  //   },
  // },
  // {
  //   title: 'preferência de e-mail e mensagens',
  //   props: {
  //     subtitle: 'escolher receber notificações por e-mail e SMS',
  //     appendIcon: 'mdi-chevron-right',
  //     prependIcon: 'mdi-chat-processing-outline',
  //     class: 'bg-white mb-2'
  //   }
  // },
]
</script>

<template>

  <v-list
    :items="items"
    bg-color="transparent"
    class="mr-4 pt-0"
    density="compact"
    lines="two"
    min-width="355"
    nav
    width="350"
  />

</template>

<style scoped>
.border-s-lg {
  border-color: black !important;
}
</style>
