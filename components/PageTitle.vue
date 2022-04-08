<template>
  <div class="wrapper">
    <h2 class="title">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default() {
        return "";
      },
    },
  },
  computed: {
    normalizedTitles() {
      return this.title.trim().toLowerCase();
    },
  },
};
</script>

<style scoped>
.wrapper {
  @apply border-l-4 border-primary-500 px-4;
}
.title {
  @apply text-3xl capitalize text-slate-50;
}
</style>
