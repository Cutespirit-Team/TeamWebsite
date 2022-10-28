<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>一群由台灣學生組成的團隊
共同為了未來與夢想而打拼，為台灣的資訊安全而奮鬥。</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
