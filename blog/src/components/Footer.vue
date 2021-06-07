<template>
  <footer>
    <p>The Blog. @ 2021 baby</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
footer {
  width: 100%;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer > p {
  font-family: 'Raleway';
  color: white;
  padding: 15px 0;
}
</style>
