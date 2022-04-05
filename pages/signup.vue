<template>
  <div class="signup w-full">
    <div class="mx-auto max-w-md p-4">
      <div class="mb-6">
        <h1>Signup<span class="text-primary-500">.</span></h1>
      </div>
      <form>
        <div class="grid grid-rows-3 gap-4 sm:grid-cols-2">
          <div class="mb-2">
            <label for="firstname">Firstname</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="John"
              required
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
};
</script>
