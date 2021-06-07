<template>
  <div class="container">
    <Post />
  </div>
</template>

<script>
import Post from '../components/Post';

export default {
  name: 'SinglePost',
  components: {
    Post,
  },
};
</script>

<style scoped>
.container {
  max-width: 1280px;
  min-height: calc(100vh - 148px);
  margin: 0 auto;
}
</style>
