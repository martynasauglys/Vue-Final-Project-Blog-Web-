<template>
  <div class="posts-container">
    <UserPosts />
  </div>
</template>

<script>
import UserPosts from '../components/UserPosts';
export default {
  name: 'User',
  components: {
    UserPosts,
  },
};
</script>

<style scoped>
.posts-container {
  max-width: 1280px;
  margin: 0 auto;
  min-height: calc(100vh - 148px);
}
</style>
