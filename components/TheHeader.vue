<template>
  <header class="header">
    <div class="container">
      <nav class="items-center lg:flex lg:justify-between">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="logo"> Logos </NuxtLink>
          <div class="flex items-center space-x-3 lg:hidden">
            <div v-if="$auth.loggedIn" class="flex items-center space-x-2">
              <NuxtLink
                to="/cart"
                class="btn btn-primary hidden lg:inline-flex"
              >
                <span class="material-icons"> shopping_cart </span>
                <span
                  class="absolute -top-2 -right-2 rounded-full bg-white px-1 text-sm font-bold text-primary-500"
                >
                  9+
                </span>
              </NuxtLink>
              <div class="group relative">
                <button class="btn btn-outline">
                  <span> @{{ $auth.user.username }} </span>
                  <span
                    class="material-icons transition-all duration-500 group-hover:rotate-180"
                  >
                    expand_more
                  </span>
                </button>
                <div
                  class="absolute right-2 hidden w-full flex-col space-y-4 rounded-lg bg-slate-600 p-2 text-right group-hover:flex"
                >
                  <NuxtLink to="/profile" class="block text-slate-200">
                    Profile
                  </NuxtLink>
                  <NuxtLink
                    @click.native="logout"
                    to=""
                    class="block text-slate-200"
                  >
                    Logout
                  </NuxtLink>
                </div>
              </div>
            </div>
            <NuxtLink to="/cart" class="btn btn-primary lg:hidden">
              <span class="material-icons"> shopping_cart </span>
              <span
                class="absolute -top-2 -right-2 rounded-full bg-white px-1 text-sm font-bold text-primary-500"
              >
                9+
              </span>
            </NuxtLink>
            <button id="menu-btn" class="lg:hidden" @click="toggleMenu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
        <ul
          v-if="categories.length"
          :class="menuIsOpen ? 'block' : 'hidden'"
          class="flex-col space-y-2 p-2 lg:flex lg:flex-row lg:items-center lg:space-y-0 lg:space-x-6"
          id="menu"
        >
          <li v-for="category in categories" :key="category.slug">
            <NuxtLink
              :to="'/category/' + category.slug"
              class="block rounded-lg px-2 py-1 text-slate-200 hover:bg-slate-600 hover:text-slate-50 lg:mt-0"
            >
              {{ category.name }}
            </NuxtLink>
          </li>
        </ul>
        <div
          v-if="$auth.loggedIn"
          class="hidden items-center space-x-2 lg:flex"
        >
          <NuxtLink to="/cart" class="btn btn-primary hidden lg:inline-flex">
            <span class="material-icons"> shopping_cart </span>
            <span
              class="absolute -top-2 -right-2 rounded-full bg-white px-1 text-sm font-bold text-primary-500"
            >
              9+
            </span>
          </NuxtLink>
          <div class="group relative">
            <button class="btn btn-outline">
              <span> @{{ $auth.user.username }} </span>
              <span
                class="material-icons transition-all duration-300 group-hover:rotate-180"
              >
                expand_more
              </span>
            </button>
            <div
              class="absolute right-2 hidden w-full flex-col space-y-4 rounded-lg bg-slate-600 p-2 text-right group-hover:flex"
            >
              <NuxtLink to="/profile" class="block text-slate-200">
                Profile
              </NuxtLink>
              <NuxtLink
                @click.native="logout"
                to=""
                class="block text-slate-200"
              >
                Logout
              </NuxtLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuIsOpen: false,
    };
  },
  async mounted() {
    await this.$axios.$get("categories/").then((response) => {
      this.$store.commit("category/setCategoriesList", response);
    });
  },
  methods: {
    async logout() {
      await this.$auth.logout();
    },
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    },
  },
  computed: {
    categories() {
      return this.$store.state.category.categoryList;
    },
  },
};
</script>

<style>
.header {
  @apply py-4;
}
.logo {
  @apply text-2xl font-bold uppercase;
}
</style>
