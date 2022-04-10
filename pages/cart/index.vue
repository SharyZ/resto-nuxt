<template>
  <div class="cart">
    <div class="flex justify-center space-x-12">
      <div class="w-2/3">
        <div class="mb-8 flex flex-col items-center justify-center space-y-3">
          <h2 class="text-3xl font-bold">Your Cart</h2>
        </div>
        <div class="overflow-x-auto shadow-md sm:rounded-lg">
          <div class="inline-block min-w-full align-middle">
            <table class="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in cartItems" :key="item.quantity">
                  <td>
                    <div class="flex items-center space-x-2">
                      <img class="w-20" :src="item.image" alt="" />
                      <h3>{{ item.name }}</h3>
                    </div>
                  </td>
                  <td>
                    <h3>{{ item.price }} UZS</h3>
                  </td>
                  <td>
                    <div class="flex items-center justify-center space-x-4">
                      <button
                        class="rounded-full bg-primary-500 px-3 py-1 font-medium text-white"
                      >
                        -
                      </button>
                      <span class="text-lg font-medium">
                        {{ item.quantity }}
                      </span>
                      <button
                        class="rounded-full bg-primary-500 px-3 py-1 font-medium text-white"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>
                    <span class="text-lg font-bold text-primary-500">$238</span>
                  </td>
                  <td>
                    <button>
                      <span class="material-icons"> delete_outline </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
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
  computed: {
    ...mapState({
      cartItems: (state) => state.cart.items,
    }),
  },
};
</script>
