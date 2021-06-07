<template>
  <main>
    <div class="index-container">
      <div class="hero-container">
        <Hero />
      </div>
      <div class="posts-container">
        <AllPosts />
      </div>
    </div>
  </main>
</template>

<script>
import AllPosts from '../components/AllPosts';
import Hero from '../components/Hero';

export default {
  name: 'Index',
  components: {
    AllPosts,
    Hero,
  },
};
</script>

<style scoped>
.posts-container {
  max-width: 1280px;
  margin: 0 auto;
}
</style>
