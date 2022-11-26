<template>
  <v-container fluid>
    <v-layout :row="selectedMails.length !== 0">
      <v-card-title
        class="mb-n10"
        :class="
          $vuetify.breakpoint.mdAndUp
            ? 'text-h4 mt-n7'
            : 'text-h5 justify-center'
        "
      >
        <v-icon size="35" class="mr-2">mdi-inbox</v-icon>Inbox
      </v-card-title>
      <v-btn v-if="selectedMails.length !== 0" icon class="mt-2"
        ><v-icon>mdi-delete</v-icon></v-btn
      ><v-btn v-if="selectedMails.length !== 0" icon class="mt-2"
        ><v-icon>mdi-star</v-icon></v-btn
      >
      <v-spacer
    /></v-layout>
    <dataTable
      :data="
        database.filter(function (mail) {
          return (
            !mail.isSent && !mail.isThrash && !mail.isDraft && !mail.isSpam
          );
        })
      "
      :tableTitle="'Inbox'"
      @updateSelected="selectedMails = $event"
    />
  </v-container>
</template>
<script>
import dataTable from "../components/table/dataTable.vue";
import { database } from "../resources/mailDatabase";
export default {
  name: "inbox-component",
  data: () => ({ database, selectedMails: [] }),
  components: {
    dataTable,
  },
  computed: {},
};
</script>
