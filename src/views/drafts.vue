<template>
  <v-container fluid>
    <v-card-title
      class="mb-n10"
      :class="
        $vuetify.breakpoint.mdAndUp ? 'text-h4 mt-n7' : 'text-h5 justify-center'
      "
    >
      <v-icon size="35" class="mr-2">mdi-file</v-icon>Draft
    </v-card-title>
    <dataTable
      :data="
        database.filter(function (mail) {
          return mail.isDraft;
        })
      "
      :tableTitle="'Draft'"
    />
  </v-container>
</template>
<script>
import dataTable from "../components/table/dataTable.vue";
import { database } from "../resources/mailDatabase";
export default {
  name: "inbox-component",
  data: () => ({ database }),
  components: {
    dataTable,
  },

  computed: {},
};
</script>
