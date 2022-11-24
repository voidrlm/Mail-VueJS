<template>
  <v-container fluid>
    <v-card-title
      class="mb-5"
      :class="
        $vuetify.breakpoint.mdAndUp ? 'text-h4 mt-n7' : 'text-h5 justify-center'
      "
      >Important
    </v-card-title>
  </v-container>
</template>
<script>
export default {
  name: "important-component",
  data: () => ({}),
  methods: {},
};
</script>
