<script setup lang="ts">
// const items = [
//   {text: "ver minha conta", icon: "mdi-account-outline", link: '/account/home', method: 'get'},
//   {text: "pedidos", icon: "mdi-package-variant-closed", link: '', method: ''},
//   {text: "favoritos", icon: "mdi-heart-outline", link: '', method: ''},
//   {text: "vales", icon: "mdi-ticket-percent-outline", link: '', method: ''},
//   {text: "cadastro", icon: "mdi-account-cog-outline", link: '/account/user', method: 'get'},
//   {text: "endereço", icon: "mdi-map-marker-outline", link: '/account/address', method: 'get'},
//   {text: "sair da conta", icon: "mdi-logout", link: '/logout', method: 'post'},
// ];
</script>

<template>
  <v-menu
    max-width="230"
    open-delay="0"
    open-on-hover
    :close-on-content-click="false"
    scrim
  >
    <template v-slot:activator="{props}">
      <v-btn
        class="text-lowercase"
        v-bind="props"
      >
        <template v-slot:prepend>
          <v-icon size="35">mdi-account-circle-outline</v-icon>
        </template>
        <div class="text-left">
          <p>olá, faça seu login</p>
          <p>
            ou cadastre-se
            <v-icon>mdi-chevron-down</v-icon>
          </p>
        </div>

      </v-btn>
    </template>
    <v-card class="px-4 rounded-xl">
      <v-card-text>
        para ver seus pedidos e ter uma experiência
        personalizada, acesse sua conta :)
      </v-card-text>

      <v-card-actions class="d-flex flex-column">
        <v-btn color="green" class="text-lowercase" variant="flat" block to="/my-account/sign-in">entrar</v-btn>
        <v-btn color="green" class="text-lowercase ml-0 mt-2" variant="outlined" block to="/my-account/sign-up">cadastrar</v-btn>
      </v-card-actions>
      <v-card-text class="text-caption pt-0">comprou na loja física ou no app da Ame? Acompanhar o pedido</v-card-text>
    </v-card>
  </v-menu>
</template>
