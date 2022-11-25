<template>
  <nav>
    <v-navigation-drawer app class="accent" width="245" permanent>
      <v-list nav rounded class="pa-5">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          class="rounded-xl mb-3"
          single-line
          solo
          hide-details
          flat
          @change="setSearchValue"
        ></v-text-field>
        <v-list-item
          class="mb-3"
          link
          v-model="showNewMail"
          @click="showNewMail = true"
        >
          <v-list-item-icon class="mx-5">
            <v-icon size="30">mdi-pencil</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="body-2 font-weight-bold"
              >Create</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          router
          :to="item.route"
          class="mb-3"
        >
          <v-list-item-icon class="mx-5">
            <v-icon size="30">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="body-2 font-weight-bold">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <app-bar /><newMailBottom
      :show="showNewMail"
      @closeDialog="showNewMail = false"
    />
  </nav>
</template>

<script>
import newMailBottom from "../newMail/newMailBottom.vue";
import appBar from "./appBar.vue";
export default {
  components: {
    appBar,
    newMailBottom,
  },

  data: () => ({
    search: "",
    items: [
      { title: "Inbox", icon: "mdi-inbox", route: "/inbox" },
      { title: "Important", icon: "mdi-star", route: "/important" },
      { title: "Sent", icon: "mdi-send", route: "/sent" },
      { title: "Draft", icon: "mdi-file", route: "/draft" },
      { title: "Spam", icon: "mdi-alert-octagon-outline", route: "/spam" },
      { title: "Thrash", icon: "mdi-delete", route: "/thrash" },
    ],
    showNewMail: false,
  }),
  watch: {
    search() {
      this.setSearchValue();
    },
  },
  methods: {
    setSearchValue() {
      this.$store.dispatch("setSearchValue", this.search);
    },
  },
};
</script>
