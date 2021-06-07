<template>
  <div class="post">
    <h1>{{ post.title }}</h1>
    <div class="image" :style="{ backgroundImage: 'url(' + post.image + ')' }">
      <h2 @click="userRedirect(post.username)" class="userlink">
        by {{ post.username }}
      </h2>
    </div>
    <p>{{ post.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'Post',
  data() {
    return {
      post: {},
    };
  },
  beforeMount() {
    this.getPost();
  },
  methods: {
    async getPost() {
      const res = await fetch(
        `http://167.99.138.67:1111/getsinglepost/${this.$route.params.username}/${this.$route.params.id}`
      );
      const data = await res.json();
      this.post = data.data;
      console.log('ho?');
    },
    userRedirect(username) {
      this.$router.push(`/user/${username}`);
    },
  },
};
</script>

<style scoped>
h1 {
  font-family: 'raleway';
  font-size: 2em;
  background-color: black;
  color: white;
  padding: 15px 20px;
}

h2 {
  display: inline-block;
  font-family: 'raleway';
  font-size: 1em;
  background-color: blue;
  color: white;
  padding: 15px 20px;
  transition: 0.2s;
}

h2:hover {
  cursor: pointer;
  background-color: white;
  color: blue;
}

.author {
  color: white;
}

.image {
  width: 100%;
  height: 60vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
}

p {
  font-family: 'Montserrat';
  font-size: 1.3em;
  padding: 15px 20px;
  background-color: black;
  color: white;
  margin-bottom: 30px;
}
</style>
