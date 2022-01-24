<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view/>
</template>

<style>
* {
  box-sizing: border-box;
  margin:0;
  padding:0;
  border: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: auto;
  max-width: 600px;
  min-height: 100vh;
}
h1 {
  font-size: 32px;
  text-transform: uppercase;
}
.home__title {
  margin-top: 64px;
  margin-bottom: 32px;
}
.project__list {
  list-style: outside none none;
  padding-left: 0;
  margin: 0;
}
.project__item {
  border-radius: 10px;
  background-color: #FFFFFF;
  box-shadow: 0 5px 10px rgb(0 0 0 / 10%);
  margin-bottom: 24px;
  border-left: 5px solid red;
}
.project__content {
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
}
.project__title {
  font-size: 24px;
  margin: 0;
}
.project__icons {
  display: flex;
}
.project__icons span {
  margin-right: 10px;
}
.project__desc {
  padding-bottom: 24px;
}
</style>
