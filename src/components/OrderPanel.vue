<script setup>
</script>

<template>

  <v-expansion-panels>

    <v-expansion-panel>

      <v-expansion-panel-title class="d-flex flex-column">

        <div class="d-flex w-100 justify-space-between mr-4">
          <p class="text-blue font-weight-bold">seu pedido tá a caminho</p>
          <p>chega até <span class="text-blue font-weight-bold">18/abr</span></p>
        </div>

        <div class="align-self-start mt-4 w-100">
          <v-divider length="100%"/>
          <p class="mt-2 text-caption">kit gancho rede silencioso c/ rolamentos - (branco)<br><span
            class="font-weight-bold">1 unidade</span></p>
        </div>

      </v-expansion-panel-title>

      <v-expansion-panel-text>

        <v-timeline
          line-color="blue"
          side="end"
          direction="horizontal"
          truncate-line="both"
        >
          <v-timeline-item dot-color="blue" size="15">
            pedido<br/>recebido
            <p class="text-caption">07/mar 07:02</p>
          </v-timeline-item>

          <v-timeline-item dot-color="blue" size="15">
            pagamento<br/>aprovado
            <p class="text-caption">07/mar 07:06</p>
          </v-timeline-item>

          <v-timeline-item dot-color="blue" size="15">
            nota fiscal<br/>disponível
            <p class="text-caption">08/mar 08:18</p>
          </v-timeline-item>

          <v-timeline-item size="default" dot-color="blue" icon="mdi-truck-fast">
            em transporte
            <p class="text-caption">08/mar 14:34</p>
          </v-timeline-item>

          <v-timeline-item dot-color="blue" size="15">
            pedido<br/>entregue
            <p>&nbsp;</p>
          </v-timeline-item>
        </v-timeline>

        <div class="mt-10 d-flex justify-space-around">
          <v-btn color="green" prepend-icon="mdi-swap-horizontal">trocar ou devolver</v-btn>
          <v-btn color="green" prepend-icon="mdi-map-marker-outline">acompanhar envio</v-btn>
          <v-btn variant="outlined" color="green" prepend-icon="mdi-message-text-outline">preciso de ajuda</v-btn>
        </div>

      </v-expansion-panel-text>

    </v-expansion-panel>

  </v-expansion-panels>

</template>
