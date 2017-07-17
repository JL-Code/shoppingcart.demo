<template>
  <div id="app">
    <c-header></c-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Heander'
export default {
  name: 'app',
  components: { 'c-header': Header }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.clearfix {
  overflow: hidden
}

a {
  text-decoration: none;
  color: #2c3e50;
}

.pull-left {
  float: left;
}

.pull-right {
  float: right;
}

.text-left {
  text-align: left
}

.text-right {
  text-align: right;
}

.btn {
  padding: 10px;
  text-align: center;
  color: #fff;
  font-size: 18px;
  width: 260px;
  background-color: #ff6700;
  border: 1px solid #ff6700;
}

.totalPrice,
.price {
  font-weight: normal;
  color: #ff6700;
}
</style>
