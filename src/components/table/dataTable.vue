<template>
  <div>
    <v-data-table
      class="transparent mx-1"
      :headers="headers"
      :items="data"
      :search="this.$store.getters.searchValue || ''"
      hide-default-footer
      :no-data-text="'No Mail Found'"
    >
      <template v-slot:item="{ item }">
        <tr>
          <td class="text-start">
            <v-checkbox
              v-model="selectedMails"
              return-object
              :value="item"
              color="accent"
              @change="updateSelected"
            ></v-checkbox>
          </td>
          <td class="text-start">{{ item.sender }}</td>
          <td class="text-start truncate">{{ item.body }}</td>
        </tr>
      </template></v-data-table
    >
  </div>
</template>
<script>
export default {
  name: "datatable-component",
  data: () => ({
    selectedMails: [],
    headers: [
      {
        text: "",
        sortable: false,
        value: "sender",
        width: "2%",
      },
      {
        text: "",
        sortable: false,
        value: "sender",
        width: "15%",
      },
      {
        text: "",
        sortable: false,
        value: "body",
        width: "83%",
      },
      //   { sortable: false, align: "start", value: "body", width: "80%" },
      //   { text: "", value: "" },
    ],
  }),
  props: { data: Array, tableTitle: String },
  computed: {},
  methods: {
    updateSelected() {
      this.$emit("updateSelected", this.selectedMails);
    },
  },
};
</script>
<style>
.truncate {
  max-width: 1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
