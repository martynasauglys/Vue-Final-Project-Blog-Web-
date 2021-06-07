<template>
  <div>
    <form v-on:submit.prevent>
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
}

form > textarea {
  width: 40%;
}

form > input {
  width: 40%;
}
</style>
