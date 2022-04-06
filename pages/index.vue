<template>
  <div class="home">
    <div v-if="$auth.loggedIn">
      <h1>{{ $auth.user.email }}</h1>
      <h2>{{ $store.state.auth.loggedIn }}</h2>
      <button @click="logout">logout</button>
    </div>
    <div v-else>
      <h1>Hello, guest!</h1>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout();
    },
  },
};
</script>
