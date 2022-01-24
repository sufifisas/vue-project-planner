<template>
  <h1 class="home__title">project planner</h1>
  <ul class="project__list">
    <li><SingleProject /></li>
    <li><SingleProject /></li>
    <li><SingleProject /></li>
  </ul>
</template>

<script>
// @ is an alias to /src
import SingleProject from '@/components/SingleProject.vue'

export default {
  name: 'Home',
  components: {
    SingleProject
  }
}
</script>
