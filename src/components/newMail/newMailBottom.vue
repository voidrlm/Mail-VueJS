<template>
  <v-bottom-sheet v-model="showDialog">
    <v-list min-height="800" class="pa-0"
      ><v-toolbar flat class="transparent"
        ><v-card-title class="pa-5">New message</v-card-title><v-spacer /><v-btn
          class="accent rounded-xl mr-3"
          elevation="1"
          @click="sendMail"
          >Send<v-icon class="ml-2">mdi-send</v-icon></v-btn
        ><v-btn icon @click="showDialog = false" class="accent mr-1" small
          ><v-icon>mdi-chevron-down</v-icon></v-btn
        ></v-toolbar
      >
      <v-card-text class="pa-8">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            rounded
            solo-inverted
            autocomplete="email"
            label="Email"
            v-model="email"
            :rules="emailRules"
          ></v-text-field>
          <v-text-field
            rounded
            solo-inverted
            label="Subject"
            v-model="subject"
            :rules="requiredRules"
          ></v-text-field>
          <v-textarea
            rounded
            solo-inverted
            no-resize
            rows="15"
            v-model="body"
          ></v-textarea></v-form
      ></v-card-text>
    </v-list>
  </v-bottom-sheet>
</template>
<script>
export default {
  props: { show: Boolean },
  data: () => ({
    valid: true,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    requiredRules: [(v) => !!v || "The field is required"],
    subject: "",
    body: "",
    tiles: [
      { img: "keep.png", title: "Keep" },
      { img: "inbox.png", title: "Inbox" },
      { img: "hangouts.png", title: "Hangouts" },
      { img: "messenger.png", title: "Messenger" },
      { img: "google.png", title: "Google+" },
    ],
  }),
  computed: {
    showDialog: {
      get() {
        return this.show;
      },
      set() {
        this.$emit("closeDialog");
      },
    },
  },
  methods: {
    sendMail() {
      if (this.$refs.form.validate()) {
        this.showDialog = false;
      }
    },
  },
};
</script>
