<template>
  <div class="post-box">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'PostBox',
  props: ['username', 'title', 'description', 'image', 'timestamp', 'id'],
};
</script>

<style scoped>
.post-box {
  max-width: 25%;
  overflow: hidden;
}

.post-box > p {
  line-height: 1.3em;
}
</style>
