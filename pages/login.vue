<template>
  <div class="login w-full">
    <div class="mx-auto max-w-md p-4">
      <div class="mb-6">
        <h1>Login<span class="text-primary-500">.</span></h1>
      </div>
      <form>
        <div class="grid grid-rows-3 gap-4 sm:grid-cols-2">
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
};
</script>
