<template>
  <div>
    <PageTitle :title="slug" />
  </div>
</template>

<script>
export default {
  middleware: ["auth"],
  async asyncData({ params }) {
    const slug = params.slug;
    return { slug };
  },
};
</script>
