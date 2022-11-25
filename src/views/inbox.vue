<template>
  <v-container fluid>
    <v-card-title
      class="mb-n10"
      :class="
        $vuetify.breakpoint.mdAndUp ? 'text-h4 mt-n7' : 'text-h5 justify-center'
      "
    >
      <v-icon size="35" class="mr-2">mdi-inbox</v-icon>Inbox
    </v-card-title>
    <dataTable
      :data="
        database.filter(function (mail) {
          return (
            !mail.isSent && !mail.isThrash && !mail.isDraft && !mail.isSpam
          );
        })
      "
      :tableTitle="'Inbox'"
    /><newMailButton />
  </v-container>
</template>
<script>
import newMailButton from "../components/button/newMailButton.vue";
import dataTable from "../components/table/dataTable.vue";
import { database } from "../resources/mailDatabase";
export default {
  name: "inbox-component",
  data: () => ({ database }),
  components: {
    dataTable,
    newMailButton,
  },

  computed: {},
};
</script>
