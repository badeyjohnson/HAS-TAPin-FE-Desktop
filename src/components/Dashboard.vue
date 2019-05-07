<template>
  <div class="Dashboard">
    <h1>{{ msg }}</h1>
    <p>
      Your one stop location for on-site H&amp;S
    </p>
    <h3>Projects</h3>
    <ul>
      <li><a href="https://www.arup.com/offices/united-kingdom/leeds" target="_blank" rel="noopener">Leeds</a></li>
      <li><a href="https://www.arup.com/offices/united-kingdom/manchester" target="_blank" rel="noopener">Manchester</a></li>
    </ul>
    <h3>Create</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">New project</a></li>
    </ul>
    <h3>Export</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">Project</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">H&amp;S sheet</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
