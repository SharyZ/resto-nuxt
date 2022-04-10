<template>
  <div class="products">
    <div class="py-5">
      <h1>Available products</h1>
    </div>
    <ul class="products-grid">
      <li
        v-for="product in products"
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
            <button @click.prevent="addToCart(product)">Add to Cart</button>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  middleware: ["auth", "initializeLocaleCart"],
  async mounted() {
    await this.$store.dispatch("products/getProductsList");
  },
  computed: {
    ...mapState({
      products: (state) => state.products.productsList,
    }),
  },
  methods: {
    addToCart(product) {
      const item = {
        ...product,
        quantity: 1,
      };
      this.$store.commit("cart/addToCart", item);
    },
  },
};
</script>
