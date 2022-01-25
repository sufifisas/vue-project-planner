<template>
  <div class="project__item" :class="{ 'complete': project.complete }">
    <div class="project__content">
        <p class="project__title" @click="showDesc = !showDesc">{{ project.title }}</p>
        <div class="project__icons">
            <span class="material-icons">edit</span>
            <span class="material-icons">delete</span>
            <span class="material-icons" @click="toggleComplete" :class="{ 'complete': project.complete }">done</span>
        </div>
    </div>
    <div class="project__desc" v-if="showDesc">
        <p>{{ project.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            showDesc: false,
            url: 'http://localhost:3000/projects/' + this.project.id
        }
    },
    props: ['project'],
    methods: {
        toggleComplete() {
            fetch(this.url,{
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({complete: !this.project.complete})
            }).then(() => {
                this.$emit('complete', this.project.id)
            }).catch(err => console.log(err))
        }
    }
}
</script>

<style>

</style>