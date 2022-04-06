<template>
  <div class="signup w-full">
    <div class="mx-auto max-w-md p-4">
      <div class="mb-6">
        <h1>Signup<span class="text-primary-500">.</span></h1>
      </div>
      <form @submit.prevent="userSignup">
        <div class="grid grid-rows-3 gap-4 sm:grid-cols-2">
          <div class="mb-2">
            <label for="firstname">Firstname</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="John"
              required
              v-model="signupData.first_name"
            />
          </div>
          <div class="mb-2">
            <label for="firstname">Lastname</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Doe"
              required
              v-model="signupData.last_name"
            />
          </div>
          <div class="col-span-2 mb-2">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="john_doe"
              required
              v-model="signupData.username"
            />
          </div>
          <div class="col-span-2 mb-2">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john_doe@example.com"
              required
              v-model="signupData.email"
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
              v-model="signupData.password"
            />
          </div>
          <div class="col-span-2 mb-2">
            <div class="flex items-center">
              <input
                id="terms-and-privacy"
                name="terms-and-privacy"
                type="checkbox"
              />
              <label for="terms-and-privacy" class="ml-2 mb-0 block">
                I agree to the
                <a href="#"> Terms </a>
                and
                <a href="#"> Privacy Policy </a>
              </label>
            </div>
          </div>
          <div class="col-span-2 mb-2 text-center">
            <button type="submit">Signup</button>
          </div>
          <div class="col-span-2 mb-2 text-center">
            <p>
              Already have an account? <NuxtLink to="/login">Login</NuxtLink>
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
  middleware: "isAuthenticated",
  data() {
    return {
      signupData: {
        firt_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        error: null,
      },
    };
  },
  methods: {
    async userSignup() {
      const { first_name, last_name, username, email, password } =
        this.signupData;

      try {
        await this.$axios.post("users/", {
          first_name,
          last_name,
          username,
          email,
          password,
        });

        await this.$auth.loginWith("local", {
          data: {
            username,
            password,
          },
        });

        this.$router.push("/");
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
  },
};
</script>
