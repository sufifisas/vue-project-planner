<template>
  <nav class="nav__header">
      <router-link :to="{ name: 'Home'}"><span>Home</span></router-link>
      <router-link :to="{ name: 'CreateProject' }"><span>Create New Project</span></router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
.nav__header {
    padding: 24px 0;
    font-size: 20px;
}
.nav__header a {
    text-decoration: none;
    padding-bottom: 5px;
    display: inline-block;
    color: #888888;
}
.nav__header .router-link-active {
    border-bottom: 2px solid green;
    color: #000000;
}
.nav__header a:not(:last-child) {
    margin-right: 16px;
}
</style>