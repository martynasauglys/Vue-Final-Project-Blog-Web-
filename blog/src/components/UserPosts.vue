<template>
  <div>
    <div v-if="noPosts" class="noPostsContainer">
      <h2>Welcome, {{ loggedUser }}</h2>
      <p>
        You have no posts! Click
        <span class="link" @click="createRedirect">here</span> to add your first
        post!
      </p>
    </div>
    <div v-if="!noPosts">
      <h3 class="posts-by">Posts by {{ posts[0].username }}</h3>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <div
            class="image"
            :style="{ backgroundImage: 'url(' + post.image + ')' }"
          ></div>
          <div class="text">
            <p class="author-date">
              {{ post.timestamp | moment('MMMM D, YYYY') }}
            </p>
            <h3 class="title">{{ post.title | truncate(75, '...') }}</h3>
            <p class="description">
              {{ post.description | truncate(150, '...') }}
            </p>
            <button
              @click="postRedirect(post.id, post.username)"
              class="btn read-more"
            >
              Read more
            </button>
            <button
              @click="editRedirect(post.id)"
              v-if="post.username === loggedUser"
              class="btn green"
            >
              Edit
            </button>
            <button
              @click="showModal = true"
              v-if="post.username === loggedUser"
              class="btn red"
            >
              Delete
            </button>
          </div>
          <div>
            <vue-final-modal
              v-model="showModal"
              classes="modal-container"
              content-class="modal-content"
            >
              <button class="modal__close" @click="showModal = false"></button>
              <span class="modal__title"
                >Are you sure you want to delete this post?</span
              >
              <div class="modal__content">
                <button @click="handleDelete(post.id)">
                  Delete
                </button>
                <button @click="showModal = false">Cancel</button>
              </div>
            </vue-final-modal>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserPosts',
  data() {
    return {
      posts: [],
      loggedUser: '',
      secretKey: '',
      showModal: false,
      noPosts: null,
    };
  },
  beforeMount() {
    this.getAllUserPosts();
    this.loggedUser = localStorage.getItem('username');
    this.secretKey = localStorage.getItem('secretKey');

    console.log(this.noPosts);
  },
  methods: {
    async getAllUserPosts() {
      const res = await fetch(
        `http://167.99.138.67:1111/getuserposts/${this.$route.params.username}`
      );
      const data = await res.json();
      this.posts = data.data;
      console.log(this.$route.params.username);
      console.log(this.posts.length);

      if (this.posts.length === 0) {
        this.noPosts = true;
      } else {
        this.noPosts = false;
      }
    },
    editRedirect(id) {
      this.$router.push(`/edit/${this.loggedUser}/${id}`);
    },
    postRedirect(id, username) {
      this.$router.push(`/post/${username}/${id}`);
    },
    createRedirect() {
      this.$router.push('/create');
    },
    handleDelete(id) {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id, secretKey: this.secretKey }),
      };
      fetch('http://167.99.138.67:1111/deletepost', requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.$router.go();
        });
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
}

ul > li {
  width: 23%;
  min-height: 100%;
  margin-bottom: 15px;
  margin-right: 10px;
  overflow: hidden;
  box-shadow: 0px 2px 13px 0px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 2px 13px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 2px 13px 0px rgba(0, 0, 0, 0.25);
}

.text {
  padding: 15px;
}

.btn {
  font-family: 'Raleway';
  color: white;
  border: 0;
  padding: 5px 10px;
  font-size: 1em;
  font-weight: 700;
  margin-right: 5px;
}

.read-more {
  background-color: blue;
}

.green {
  background-color: green;
  color: white;
}

.red {
  background-color: red;
  color: white;
}

.btn:hover {
  cursor: pointer;
  opacity: 0.7;
}

.image {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.link {
  color: blue;
}

.link:hover {
  cursor: pointer;
}

.posts-by {
  font-family: 'Raleway';
  padding: 30px 0;
  font-size: 2em;
}

.noPostsContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
}

.noPostsContainer > h2 {
  font-family: 'Raleway';
  padding-bottom: 15px;
}

.noPostsContainer > p {
  font-family: 'Montserrat';
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

/* Modal */
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
.modal__title {
  font-family: 'raleway';
  margin: 0 2rem 0 0;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
}

.modal__content {
  text-align: center;
}

.modal__content > button {
  font-family: 'Raleway';
  color: white;
  background-color: blue;
  border: 0;
  padding: 5px 10px;
  font-size: 1em;
  margin: 15px 15px 0 0;
}

.modal__content > button:hover {
  cursor: pointer;
  opacity: 0.7;
}

.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
</style>
