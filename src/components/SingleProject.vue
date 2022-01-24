<template>
  <div class="project__item">
    <div class="project__content">
        <p class="project__title" @click="showDesc = !showDesc">{{ project.title }}</p>
        <div class="project__icons">
            <span class="material-icons">edit</span>
            <span class="material-icons">delete</span>
            <span class="material-icons">done</span>
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
            showDesc: false
        }
    },
    props: ['project']
}
</script>

<style>

</style>