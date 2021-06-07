<template>
  <div class="edit-container">
    <form v-on:submit.prevent>
      <label for="title">Title</label>
      <input id="title" type="text" v-model="title" />
      <label for="description">Description</label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        v-model="description"
      ></textarea>
      <label for="image">Image</label>
      <input id="image" type="text" v-model="image" />
      <button @click="handleUpdate">Update</button>
    </form>
    <p class="server-message">{{ serverMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'Edit',
  data() {
    return {
      title: '',
      description: '',
      image: '',
      username: this.$route.params.username,
      secretKey: localStorage.getItem('secretKey'),
      id: this.$route.params.id,
      serverMessage: '',
    };
  },
  beforeMount() {
    this.getPost();
    console.log('before mouun');
  },
  methods: {
    async getPost() {
      const res = await fetch(
        `http://167.99.138.67:1111/getsinglepost/${this.$route.params.username}/${this.$route.params.id}`
      );
      const data = await res.json();
      console.log(data.data.title);
      this.title = data.data.title;
      this.description = data.data.description;
      this.image = data.data.image;
    },
    handleUpdate() {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: this.title,
          description: this.description,
          image: this.image,
          username: this.username,
          id: this.id,
          secretKey: this.secretKey,
        }),
      };
      fetch('http://167.99.138.67:1111/updatepost', requestOptions)
        .then((response) => response.json())
        .then((data) => {
          this.serverMessage = data.message;
          if (data.success === true) {
            this.$router.push(`/post/${this.username}/${this.id}`);
          }
        });
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
}

form > textarea {
  width: 70%;
  margin-bottom: 15px;
  font-family: 'Montserrat';
  font-size: 1em;
  padding: 5px 10px;
}

form > input {
  width: 70%;
  margin-bottom: 15px;
  font-family: 'Montserrat';
  font-size: 1em;
  padding: 5px 10px;
}

form > label {
  font-family: 'Montserrat';
  font-size: 1em;
  padding-bottom: 10px;
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

h2 {
  font-family: 'raleway';
  font-size: 2em;
}

.server-message {
  text-align: center;
  font-family: 'Montserrat';
  font-size: 1em;
  background-color: black;
  color: white;
  padding: 15px 10px;
}
</style>
