<template>
  <div class="hero">
    <h1>The best blog in the entire internet. Probably.</h1>
    <h3 v-if="!isLoggedIn" @click="signupRedirect" class="signup-btn">
      Sign up and start posting!
    </h3>
    <h3 v-if="isLoggedIn" @click="createPostRedirect" class="signup-btn">
      Welcome! Click here to create post!
    </h3>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      isLoggedIn: false,
    };
  },
  methods: {
    signupRedirect() {
      this.$router.push('/signup');
    },
    createPostRedirect() {
      this.$router.push('/create');
    },
  },
  beforeMount() {
    if (localStorage.getItem('secretKey')) {
      this.isLoggedIn = true;
    }
  },
};
</script>

<style scoped>
.hero {
  width: 100%;
  height: 50vh;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('../assets/images/hero.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.hero > h1 {
  color: white;
  background: black;
  font-family: 'Raleway';
  font-size: 3em;
  padding: 15px 20px;
}

.hero > h3 {
  font-family: 'Raleway';
  font-size: 1.2em;
  padding: 15px 20px;
  margin-top: 40px;
  background-color: blue;
  color: white;
}

.signup-btn {
  transition: 0.3s;
}

.signup-btn:hover {
  cursor: pointer;
  background-color: black;
  color: blue;
}
</style>
