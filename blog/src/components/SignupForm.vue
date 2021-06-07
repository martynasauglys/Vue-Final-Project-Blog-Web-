<template>
  <div class="form-container">
    <h2>Register a new account</h2>
    <form v-on:submit.prevent>
      <input type="text" placeholder="Username" v-model="user.name" />
      <input
        type="password"
        placeholder="Password"
        v-model="user.passwordOne"
      />
      <input
        type="password"
        placeholder="Repeat Password"
        v-model="user.passwordTwo"
      />
      <button @click="handleSubmit">Register</button>
    </form>
    {{ this.server.message }}
    <p>
      Already have an account?
      <span class="login" @click="loginRedirect">Login!</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'SingupForm',
  data() {
    return {
      user: {
        name: '',
        passwordOne: '',
        passwordTwo: '',
      },
      server: {
        success: null,
        message: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.user),
      };
      fetch('http://167.99.138.67:1111/createaccount', requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.server.success = data.success;
          this.server.message = data.message;
          if (this.server.success) {
            this.$router.push('/login');
          }
        });
    },
    loginRedirect() {
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
form {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h2 {
  font-family: 'Raleway';
  margin-bottom: 30px;
}

.login {
  color: blue;
  transition: 0.2s;
}

.login:hover {
  cursor: pointer;
  color: black;
}

p {
  font-family: 'Raleway';
  font-size: 0.9em;
}

form > input {
  margin-bottom: 15px;
  font-family: 'Montserrat';
  font-size: 1em;
  border: 0;
  padding: 5px 10px;
}

form > button {
  margin-bottom: 15px;
  padding: 10px 10px;
  background-color: blue;
  color: white;
  font-family: 'raleway';
  font-size: 1em;
  font-weight: 700;
  border: 0;
}

form > button:hover {
  cursor: pointer;
}
</style>
