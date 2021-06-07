<template>
  <div>
    <header key="componentKey">
      <div class="nav">
        <div class="logo" @click="redirectHome"><span>The Blog</span>.</div>
        <nav>
          <router-link v-if="!isLogged" class="login" to="/login"
            >Login</router-link
          >
          <a v-if="isLogged" class="profile" @click="myPostsRedirect">{{
            username
          }}</a>
          <a v-if="isLogged" class="logout" @click="handleLogout">Log Out</a>
        </nav>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isLogged: false,
      username: '',
    };
  },
  created() {
    this.username = localStorage.getItem('username');
    if (localStorage.getItem('secretKey')) {
      this.isLogged = true;
    }
  },
  methods: {
    redirectHome() {
      this.$router.push('/');
    },
    handleLogout() {
      localStorage.removeItem('secretKey');
      localStorage.removeItem('username');
      this.$router.push('/login');
      this.$router.go();
    },
    myPostsRedirect() {
      this.$router.push(`/user/${this.username}`);
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
header {
  padding: 30px 0;
}

.nav {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
}

nav > a {
  font-family: 'Raleway';
  text-decoration: none;
  font-weight: 700;
  color: black;
  font-size: 1.2em;
  margin-left: 15px;
}

.login {
  color: white;
  font-weight: 600;
  padding: 5px 10px;
  background-color: blue;
}

.logout {
  color: white;
  font-weight: 600;
  padding: 5px 10px;
  background-color: red;
}

.logout,
.profile:hover {
  cursor: pointer;
}

.profile {
  color: white;
  font-weight: 600;
  padding: 5px 10px;
  background-color: blue;
}

.logo {
  font-family: 'Raleway';
  font-size: 1.5em;
  font-weight: bold;
  background-color: black;
  color: white;
  padding: 5px 10px;
  transition: 0.3s;
}

.logo:hover {
  cursor: pointer;
  color: blue;
}
</style>
