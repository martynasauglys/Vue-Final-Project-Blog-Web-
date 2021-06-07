<template>
  <div class="container">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm';
export default {
  name: 'Login',
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
.container {
  max-width: 1280px;
  min-height: calc(100vh - 148px);
  margin: 0 auto;
  display: flex;
}
</style>
