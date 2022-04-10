<template>
  <div>
    <div class="mx-auto mt-10 max-w-4xl rounded-lg bg-slate-600 p-10">
      <div v-if="productLoading">
        <p>Loading...</p>
      </div>
      <div class="flex flex-col items-center justify-around lg:flex-row">
        <img
          :src="product.image"
          :alt="product.name"
          width="386"
          class="rounded-lg object-cover"
        />
        <div class="flex flex-col items-start space-y-4">
          <h2 class="text-4xl">{{ product.name }}</h2>
          <h3 class="text-2xl">
            Price: <span class="text-primary-500">{{ product.price }} UZS</span>
          </h3>
          <h4>Category: {{ product.category.name }}</h4>
          <div v-html="product.small_description"></div>
          <div class="flex space-x-2">
            <input
              type="number"
              min="1"
              max="10"
              placeholder="1"
              required
              v-model="quantity"
              class="w-16"
            />
            <button @click="addToCart(product.id)">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  middleware: ["auth", "initializeLocaleCart"],
  data() {
    return {
      quantity: 1,
    };
  },
  async asyncData({ params }) {
    const id = params.id;
    return { id };
  },
  async mounted() {
    await this.$store.dispatch("products/getProductById", this.id);
  },
  computed: {
    ...mapState({
      product: (state) => state.products.product,
      productLoading: (state) => state.products.productLoading,
    }),
  },
  methods: {
    addToCart() {
      const item = {
        ...this.product,
        quantity: this.quantity,
      };
      this.$store.commit("cart/addToCart", item);
    },
  },
};
</script>
