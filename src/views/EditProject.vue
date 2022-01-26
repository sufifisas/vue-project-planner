<template>
  <h1 class="home__title">Edit project</h1>
  <form @submit.prevent ="handleSubmit" class="project__form">
    <label>Title</label>
    <input type="text" v-model="project.title">
    <label>Description</label>
    <textarea cols="30" rows="5" v-model="project.desc"></textarea>
    <button>Update</button>
  </form>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            project: {
                title: '',
                desc: ''
            },
            url: 'http://localhost:3000/projects/' + this.id
        }
    },
    mounted() {
        fetch(this.url)
        .then(res => res = res.json())
        .then(data => {
            this.project.title = data.title
            this.project.desc = data.desc
        })
        .catch(err => console.log(err))
    },
    methods: {
        handleSubmit() {
            fetch(this.url, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(this.project)
            }).then(() => 
                this.$router.push('/')
            ).catch(err => console.log(err))
        }
    }
}
</script>

<style>

</style>