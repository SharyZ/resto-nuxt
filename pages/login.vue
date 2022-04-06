<template>
  <div class="login w-full">
    <div class="mx-auto max-w-md p-4">
      <div class="mb-6">
        <h1>Login<span class="text-primary-500">.</span></h1>
      </div>
      <form @submit.prevent="userLogin">
        <div class="grid grid-rows-3 gap-4 sm:grid-cols-2">
          <div class="col-span-2 mb-2">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="john___doe"
              required
              v-model="loginData.username"
            />
          </div>
          <div class="col-span-2 mb-2">
            <label for="passowrd">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              required
              v-model="loginData.password"
            />
          </div>
          <div class="col-span-2 mb-2 text-center">
            <button type="submit">Login</button>
          </div>
          <div class="col-span-2 mb-2 text-center">
            <p>
              Don't have an account? <NuxtLink to="/signup">Signup</NuxtLink>
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: "fullscreen",
  data() {
    return {
      loginData: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async userLogin() {
      const { username, password } = this.loginData;

      try {
        let response = await this.$auth.loginWith("local", {
          data: {
            username,
            password,
          },
        });
        const token = response.data.auth_token;

        console.log(response);

        this.$auth.setUserToken(token);

        console.log(this.$auth);

        this.$router.push("/");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
