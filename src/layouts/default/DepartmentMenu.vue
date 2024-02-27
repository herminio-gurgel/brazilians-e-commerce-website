<script setup lang="ts">

const deparments = [
  {
    title: 'eletronicos',
    links: [
      {subtitle: 'celulares e smartphones', to: '',},
      {subtitle: 'tv e vídeo', to: '',},
      {subtitle: 'consoles e games', to: '',},
      {subtitle: 'áudio', to: '',},
      {subtitle: 'câmeras e drones', to: '',},
      {subtitle: 'telefonia fixa', to: '',},
    ]
  },
  {
    title: 'informática e acessórios',
    links: [
      {subtitle: 'informática', to: ''},
      {subtitle: 'acessórios e periféricos', to: ''},
      {subtitle: 'pc gamer', to: ''},
    ]
  },

  {
    title: 'comércio e segurança',
    links: [
      {subtitle: 'agro, indústria e comércio', to: ''},
      {subtitle: 'sinalização e segurança', to: ''},
    ]
  },

  {
    title: 'casa',
    links: [
      {subtitle: 'eletrodomésticos', to: ''},
      {subtitle: 'eletroportáteis', to: ''},
      {subtitle: 'ar e ventilação', to: ''},
      {subtitle: 'móveis e decoração', to: ''},
      {subtitle: 'casa e construção', to: ''},
      {subtitle: 'utilidades domésticas', to: ''},
      {subtitle: 'cama, mesa e banho', to: ''},
      {subtitle: 'informática', to: ''},
    ]
  },

  {
    title: 'lazer e entretenimento',
    links: [
      {subtitle: 'livros', to: ''},
      {subtitle: 'instrumentos musicais', to: ''},
      {subtitle: 'música', to: ''},
      {subtitle: 'filmes e séries', to: ''},
      {subtitle: 'artigos de festas', to: ''},
      {subtitle: 'artesanato', to: ''},
    ]
  },

  {
    title: 'pra você e sua família',
    links: [
      {subtitle: 'mercado', to: ''},
      {subtitle: 'automotivo', to: ''},
      {subtitle: 'brinquedos', to: ''},
      {subtitle: 'bebês', to: ''},
      {subtitle: 'gift cards', to: ''},
      {subtitle: 'pet shop', to: ''},
      {subtitle: 'malas, mochilas e acessórios', to: ''},
      {subtitle: 'papelaria', to: ''},
      {subtitle: 'vale presente', to: ''},
    ]
  },
  {
    title: 'esporte, saúde e bem-estar',
    links: [
      {subtitle: 'esporte, fitness e lazer', to: ''},
      {subtitle: 'saúde e bem-estar', to: ''},
      {subtitle: 'suplementos e vitaminas', to: ''},
      {subtitle: 'roupas e acessórios esportivos', to: ''},
      {subtitle: 'bem-estar sexual', to: ''},
    ]
  },
  {
    title: 'moda e beleza',
    links: [
      {subtitle: 'beleza e perfumaria', to: ''},
      {subtitle: 'moda', to: ''},
      {subtitle: 'relógios', to: ''},
    ]
  },
  {
    title: 'pra sua empresa',
    links: [
      {subtitle: 'Brazilians Empresas', to: ''},
      {subtitle: 'cotações online', to: ''},
      {subtitle: 'receba em 3 horas', to: ''},
    ]
  },
  {
    title: 'confira também',
    links: [
      {subtitle: 'serviços', to: ''},
      {subtitle: 'produtos internacionais', to: ''},
      {subtitle: 'sustentabilidade', to: ''},
      {subtitle: 'outlet americanas', to: ''},
    ]
  },

]

</script>

<template>
  <v-toolbar density="compact" color="white">
    <v-container>
      <v-menu
        open-on-hover
        close-delay="1"
        :close-on-content-click="false"
        height="450"
        width="85%"
        scrim
      >
        <template v-slot:activator="{props}">
          <v-btn
            v-bind="props"
            append-icon="mdi-chevron-down"
            class="font-weight-bold text-lowercase text-caption btn">
            <template v-slot:prepend>
              <v-icon size="30">mdi-menu</v-icon>
            </template>
            todos os departamentos
          </v-btn>
        </template>

        <v-card>
          <v-card-text class="pa-0 d-flex flex-column flex-wrap" style="height: 450px">
            <div v-for="(department) in deparments" :key="department.title">
              <v-list>
                <v-list-item>
                  <v-list-item-title class="text-caption">
                    {{ department.title }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="my-3 text-caption" v-for="link in department.links"
                                        :key="link.subtitle">
                    {{ link.subtitle }}
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
    </v-container>
  </v-toolbar>
</template>

<style scoped>

</style>
