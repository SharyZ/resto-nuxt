<template>
  <div class="store">
    <div v-if="$auth.loggedIn">
      <h1>{{ $auth.user.email }}</h1>
      <button @click="logout">logout</button>
    </div>
    <div v-else>
      <h1>Hello, guest!</h1>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ["auth"],
  methods: {
    async logout() {
      await this.$auth.logout();
    },
  },
};
</script>
