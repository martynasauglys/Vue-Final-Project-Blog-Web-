<template>
  <div class="container">
    <SignupForm />
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm';
export default {
  name: 'Signup',
  components: {
    SignupForm,
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
