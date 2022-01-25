<template>
  <h1 class="home__title">Create new project</h1>
  <form @submit.prevent ="handleSubmit" class="project__form">
    <label>Title</label>
    <input type="text" v-model="project.title">
    <label>Description</label>
    <textarea cols="30" rows="5" v-model="project.desc"></textarea>
    <button>Create</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      project: {
        title: '',
        desc: '',
        complete: false
      }
    }
  },
  methods: {
    handleSubmit() {
      fetch('http://localhost:3000/projects', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(this.project)
      }).then(()=> {
        this.$router.push({name: 'Home'})
      }).catch(err => console.log(err))
    }
  }
}
</script>

<style>

</style>