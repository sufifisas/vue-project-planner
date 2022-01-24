<template>
  <h1 class="home__title">project planner</h1>
  <ul class="project__list">
    <li v-for="project in projects" :key="project.id"><SingleProject :project="project" /></li>
  </ul>
</template>

<script>
// @ is an alias to /src
import SingleProject from '@/components/SingleProject.vue'

export default {
  name: 'Home',
  data() {
    return {
      projects: []
    }
  },
  components: {
    SingleProject
  },
  mounted() {
    fetch('http://localhost:3000/projects')
    .then(res => res.json())
    .then(data => this.projects = data)
    .catch(err => console.log(err))
  }
}
</script>
