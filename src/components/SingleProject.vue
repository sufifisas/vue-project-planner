<template>
  <div class="project__item" @click="showDesc = !showDesc">
    <div class="project__content">
        <p class="project__title">Project 1</p>
        <div class="project__icons">
            <span>Edit</span>
            <span>Delete</span>
            <span>Complete</span>
        </div>
    </div>
    <div class="project__desc" v-if="showDesc">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas est cum consequuntur hic amet fugiat, suscipit veniam sunt soluta unde.</p>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            showDesc: false
        }
    }
}
</script>

<style>

</style>