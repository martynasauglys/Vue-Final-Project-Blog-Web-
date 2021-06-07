<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <img :src="post.image ? post.image : this.placeholder" alt="" />
        <div class="text">
          <p class="author-date">
            {{ post.timestamp | moment('MMMM D, YYYY') }} | by
            <span class="author-link" @click="userRedirect(post.username)">{{
              post.username
            }}</span>
          </p>
          <h3 class="title">{{ post.title | truncate(75, '...') }}</h3>
          <p class="description">
            {{ post.description | truncate(150, '...') }}
          </p>
          <button
            class="read-more-btn"
            @click="postRedirect(post.id, post.username)"
          >
            Read more
          </button>
        </div>
      </li>
    </ul>
    <p v-if="!isLoaded">Loading...</p>
  </div>
</template>

<script>
export default {
  name: 'AllPosts',
  components: {},
  data() {
    return {
      posts: [],
      placeholder:
        'https://www.geninstitute.lt/wp-content/uploads/2020/02/placeholder.png',
      isLoaded: false,
    };
  },
  beforeMount() {
    this.getAllPosts();
  },
  methods: {
    async getAllPosts() {
      const res = await fetch('http://167.99.138.67:1111/getallposts');
      const data = await res.json();
      this.posts = data.data.reverse();
      this.isLoaded = true;
    },
    postRedirect(id, username) {
      this.$router.push(`/post/${username}/${id}`);
    },
    userRedirect(user) {
      this.$router.push(`/user/${user}`);
    },
  },
};
</script>
<style scoped>
ul {
  margin: 0 auto;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

ul > li {
  width: 23%;
  height: 100%;
  margin-bottom: 15px;
  margin-right: 10px;
  overflow: hidden;
  flex-grow: 1;
  box-shadow: 9px 13px 28px -19px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 9px 13px 28px -19px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 9px 13px 28px -19px rgba(0, 0, 0, 0.75);
}

.text {
  padding: 15px;
}

.author-date {
  font-family: 'Montserrat';
  padding: 5px 0;
  font-size: 0.9em;
}

.title {
  font-family: 'Raleway';
  font-size: 1.3em;
  padding-bottom: 3px;
}

img {
  max-width: 100%;
}

.description {
  font-family: 'Montserrat';
  font-size: 0.9em;
  padding-bottom: 5px;
}

.read-more-btn {
  font-family: 'Raleway';
  color: white;
  background-color: blue;
  border: 0;
  padding: 5px 10px;
  font-size: 1em;
  font-weight: 700;
}

.read-more-btn:hover {
  cursor: pointer;
  opacity: 0.7;
}

.author-link {
  color: blue;
}

.author-link:hover {
  cursor: pointer;
}

@media screen and (max-width: 1080px) {
  ul > li {
    width: 45%;
  }
}

@media screen and (max-width: 768px) {
  ul > li {
    width: 100%;
  }
}
</style>
