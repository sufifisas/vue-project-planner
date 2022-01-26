<template>
  <nav class="nav__header--filter">
      <button @click="showFilteredNav('all')" :class="{ 'active': current === 'all' }">View all</button>
      <button @click="showFilteredNav('completed')" :class="{ 'active': current === 'completed' }">Completed</button>
      <button @click="showFilteredNav('ongoing')" :class="{ 'active': current === 'ongoing' }">On Going</button>
  </nav>
</template>

<script>
export default {
    props: ['current'],
    methods: {
        showFilteredNav(by) {
            this.$emit('filteredNav', by)
        }
    }
}
</script>

<style>
.nav__header--filter {
    display: flex;
    justify-content: center;
}
.nav__header--filter button {
    background-color: transparent;
    font-size: 16px;
    margin-right: 24px;
    color: #888888;
    text-transform: uppercase;
    padding-bottom: 5px;
    cursor: pointer;
}
.nav__header--filter button:hover {
    color: green;
    font-weight: 600;
    opacity: 0.8;
}
.nav__header--filter button.active {
    color: green;
    font-weight: 600;
}
</style>