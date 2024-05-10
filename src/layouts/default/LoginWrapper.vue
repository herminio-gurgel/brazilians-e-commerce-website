<script setup>
import {useAuthStore} from "@/store/auth";
import {useRouter} from "vue-router";

const router = useRouter()
const store = useAuthStore()

const logout = async () => {
  await store.handleLogout()
  router.push({name: 'home'})
}

const items = [
  {title: "minha conta", props: {prependIcon: 'mdi-account-outline', to: {name: 'my-account'}}},
  {type: "divider", props: {class: "my-2"}},
  {title: "pedidos", props: {prependIcon: "mdi-package-variant-closed", to: {name: 'orders'}}},
  // {title: "favoritos", props: {prependIcon: "mdi-heart-outline", link: true}},
  // {title: "vales", props: {prependIcon: "mdi-ticket-percent-outline", link: true}},
  {title: "cadastro", props: {prependIcon: "mdi-account-cog-outline", to: {name: 'user'}}},
  {title: "endereço", props: {prependIcon: "mdi-map-marker-outline", to: {name: 'address'}}},
  {title: "sair da conta", props: {prependIcon: "mdi-logout", link: true, onclick: logout}},
];

</script>

<template>

  <v-menu
    :close-on-content-click="false"
    max-width="230"
    open-delay="0"
    open-on-hover
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
          <p>olá,
            <span v-if="!store.isLoggedIn">faça seu login</span>
            <span v-else>{{ store.user.name }}</span>
          </p>
          <p>
            <span v-if="!store.isLoggedIn">ou cadastre-se</span>
            <span v-else>minha conta</span>
            <v-icon>mdi-chevron-down</v-icon>
          </p>
        </div>

      </v-btn>
    </template>

    <v-card v-if="!store.isLoggedIn" class="px-4 rounded-xl">

      <v-card-text>
        para ver seus pedidos e ter uma experiência
        personalizada, acesse sua conta :)
      </v-card-text>
      <v-card-actions class="d-flex flex-column">
        <v-btn
          :to="{name: 'sign-in'}"
          block
          class="text-lowercase"
          color="green"
          variant="flat"
        >
          entrar
        </v-btn>
        <v-btn
          :to="{name: 'sign-up'}"
          block
          class="text-lowercase ml-0 mt-2"
          color="green"
          variant="outlined"
        >
          cadastrar
        </v-btn>
      </v-card-actions>
      <v-card-text class="text-caption pt-0">comprou na loja física ou no app da Ame? Acompanhar o pedido</v-card-text>

    </v-card>

    <v-card v-else class="px-4 rounded-xl">
      <v-list :items="items" density="compact" nav/>
    </v-card>

  </v-menu>

</template>
