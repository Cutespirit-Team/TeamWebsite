<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>一群由台灣學生組成的團隊<br>
    共同為了未來與夢想而打拼，為台灣的資訊安全而奮鬥。</p>
  </div>

  <hr>

  <footer id="footer">
    <ul class="icons home-icon">
      <li v-for="(item, key) in data" :key="key">
        <a target="_blank" :href="item.link">
          <font-awesome-icon :icon="item.icon" class="icon alt" style="color: #ffffff;">
            <span class="label">{{ item.name }}</span>
          </font-awesome-icon>
        </a>
      </li>
    </ul>
</footer>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      data: [
        {
          name: 'Facebook',
          icon: ['fab', 'facebook'],
          link: 'https://www.facebook.com/cutespirit05428',
        },
        {
          name: 'Instagram',
          icon: ['fab', 'instagram'],
          link: 'https://www.instagram.com/cutespirit05428/',
        },
        {
          name: 'GitHub',
          icon: ['fab', 'github'],
          link: 'https://github.com/Cutespirit-Team'
        },
        {
          name: 'YouTube',
          icon: ['fab', 'youtube'],
          link: 'https://www.youtube.com/channel/UCUieRdpiGE22tbbFlcqN-rQ'
        },
        {
          name: 'Telegram',
          icon: ['fab', 'telegram'],
          link: 'https://t.me/+hSJlmB7kQMczMWJl'
        },
        {
          name: 'Discord',
          icon: ['fab', 'discord'],
          link: 'https://discord.gg/zTxBAc4zsQ'
        },
      ]
    }
  }
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
home-icon {
  cursor: default;
  list-style: none;
  padding-left: 0;
}
.home-icon li {
  border-radius: 100%;
  box-shadow: inset 0 0 0 1px #ffffff;
  display: inline-block;
  height: 3.25rem;
  line-height: 3.25rem;
  text-align: center;
  width: 3.25rem;
  font-size: 16pt;
}
#footer {
    -moz-transition: -moz-transform 0.325s ease-in-out, -moz-filter 0.325s ease-in-out, opacity 0.325s ease-in-out;
    -webkit-transition: -webkit-transform 0.325s ease-in-out, -webkit-filter 0.325s ease-in-out, opacity 0.325s ease-in-out;
    -ms-transition: -ms-transform 0.325s ease-in-out, -ms-filter 0.325s ease-in-out, opacity 0.325s ease-in-out;
    transition: transform 0.325s ease-in-out, filter 0.325s ease-in-out, opacity 0.325s ease-in-out;
    width: 100%;
    max-width: 100%;
    margin-top: 2rem;
    text-align: center;
}
</style>
