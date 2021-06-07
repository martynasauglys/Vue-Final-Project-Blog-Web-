<template>
  <div>
    <h2>Create new post</h2>
    <form v-on:submit.prevent>
      <div
        class="image-preview"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      ></div>
      <input type="text" placeholder="title" v-model="post.title" />
      <textarea
        name="description"
        id=""
        cols="30"
        rows="10"
        v-model="post.description"
        placeholder="description"
      ></textarea>
      <input type="text" placeholder="image" v-model="post.image" />
      <button @click="handlePost">Post!</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Create',
  data() {
    return {
      post: {
        secretKey: '',
        title: '',
        image: '',
        description: '',
      },
    };
  },
  beforeMount() {
    this.post.secretKey = localStorage.getItem('secretKey');
  },
  methods: {
    handlePost() {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.post),
      };
      fetch('http://167.99.138.67:1111/createpost', requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(this.post);
          console.log(data);
          this.$router.push('/');
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

.image-preview {
  width: 50%;
  height: 200px;
}
</style>
