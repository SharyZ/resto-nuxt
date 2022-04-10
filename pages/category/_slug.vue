<template>
  <div>
    <PageTitle :title="slug" />
    <ul class="products-grid my-5">
      <li
        v-for="product in currentCategory.products"
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
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  middleware: ["auth", "initializeLocaleCart"],
  data() {
    return {
      slug: this.$route.params.slug,
    };
  },
  async mounted() {
    await this.$store.dispatch("category/getCurrentCategoryBySlug", this.slug);
  },
  computed: {
    ...mapState({
      currentCategory: (state) => state.category.currentCategory,
    }),
  },
  methods: {
    addToCart(productId) {
      alert(`${productId} added to cart`);
    },
  },
};
</script>
