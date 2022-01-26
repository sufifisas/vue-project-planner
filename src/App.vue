<template>
  <Navbar />
  <router-view/>
</template>
<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: { Navbar },
}
</script>

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
.project__item.complete {
  border-left: 5px solid green;
}
.project__content {
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
}
.project__title {
  font-size: 20px;
  margin: 0;
  font-weight: 500;
}
.project__title:hover {
  cursor: pointer;
}
.project__icons {
  display: flex;
}
.project__icons span {
  margin-right: 10px;
  cursor: pointer;
  color: #888888;
}
.project__icons span:hover {
  color: #000000;
}
.project__icons span.complete {
  color: green;
}
.project__desc {
  padding: 0 24px 16px;
  text-align: left;
}
.project__form {
  border-radius: 10px;
  background-color: #FFFFFF;
  box-shadow: 0 5px 10px rgb(0 0 0 / 10%);
  padding: 24px;
  text-align: left;
}
.project__form label {
  font-size: 18px;
  display: block;
  font-weight: 600;
  color: #454545;
  margin-bottom: 10px;
}
.project__form button {
  height: 40px;
  padding: 0 20px;
  border-radius: 10px;
  font-weight: 600;
  background-color: green;
  color: #FFFFFF;
  cursor: pointer;
}
.project__form button:hover {
  background-color: #888888;
}
.project__form input, .project__form textarea {
  border-bottom: 1px solid #999999;
  width: 100%;
  margin-bottom: 15px;
  font-size: 16px;
}
.project__form input:focus-visible, .project__form textarea:focus-visible {
  outline: 0;
}
</style>
