<template>
  <div class="container">
    <Edit />
  </div>
</template>

<script>
import Edit from '../components/Edit.vue';
export default {
  name: 'EditPost',
  components: {
    Edit,
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
