<template>
  <div>
    <v-data-table
      class="secondary rounded-xl"
      :headers="headers"
      :items="data"
      :search="this.$store.getters.searchValue || ''"
      hide-default-footer
    >
      <template v-slot:item="{ item }">
        <tr>
          <td class="text-center">{{ item.sender }}</td>
          <td class="truncate">{{ item.body }}</td>
        </tr>
      </template></v-data-table
    >
  </div>
</template>
<script>
export default {
  name: "datatable-component",
  data: () => ({
    headers: [
      {
        text: "",
        sortable: false,
        value: "sender",
        width: "20%",
      },
      {
        text: "",
        sortable: false,
        value: "body",
        width: "60%",
      },
      //   { sortable: false, align: "start", value: "body", width: "80%" },
      //   { text: "", value: "" },
    ],
  }),
  props: { data: Array, tableTitle: String },
  computed: {},
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
