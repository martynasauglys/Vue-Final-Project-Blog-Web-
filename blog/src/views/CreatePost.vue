<template>
  <main>
    <div class="container">
      <Create />
    </div>
  </main>
</template>

<script>
import Create from '../components/Create';
export default {
  name: 'CreatePost',
  components: {
    Create,
  },
};
</script>

<style scoped>
.container {
  max-width: 1280px;
  margin: 0 auto;
  min-height: calc(100vh - 148px);
}
</style>
