<template>
  <h1 class="home__title">project planner</h1>
  <ul class="project__list">
    <li v-for="project in projects" :key="project.id"><SingleProject :project="project" @delete="handleDelete" @complete="handleComplete" /></li>
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
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter(project => {
        return project.id != id
      })
    },
    handleComplete(id) {
      let p = this.projects.find(project => {
        return project.id === id
      })
      p.complete = !p.complete
    }
  },
  mounted() {
    fetch('http://localhost:3000/projects')
    .then(res => res.json())
    .then(data => this.projects = data)
    .catch(err => console.log(err))
  }
}
</script>
