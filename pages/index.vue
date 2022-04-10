<template>
  <div class="home">
    <div class="py-5">
      <h1>Last products</h1>
    </div>
    <ul class="products-grid">
      <li
        v-for="product in lastProducts"
        :key="product.id"
        class="rounded-lg p-5 transition hover:bg-slate-600"
      >
        <NuxtLink
          :to="`/products/${product.id}`"
          class="text-center text-slate-200 hover:text-slate-200"
        >
          <figure class="mb-4">
            <img :src="product.image" :alt="product.name" />
            <figcaption class="text-2xl font-bold">
              {{ product.name }}
            </figcaption>
          </figure>
          <div v-html="product.small_description" class="py-2"></div>
          <div class="flex items-center justify-between">
            <h3>{{ product.price }} UZS</h3>
            <button @click.prevent="addToCart(product.id)">Add to Cart</button>
          </div>
        </NuxtLink>
      </li>
    </ul>
    <div class="my-10 flex justify-center">
      <NuxtLink to="/products" class="btn btn-primary">
        See all products
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  middleware: ["auth", "initializeLocaleCart"],
  async mounted() {
    await this.$store.dispatch("getLastProducts");
  },
  computed: {
    ...mapState({
      lastProducts: (state) => state.lastProducts,
    }),
  },
  methods: {
    addToCart(productId) {
      alert(`${productId} added to cart`);
    },
  },
};
</script>

<style>
.products-grid {
  @apply grid grid-cols-4 gap-5;
}
</style>
