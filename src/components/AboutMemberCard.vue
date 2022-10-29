<template>
  <div class="card" v-if="name">
    <div class="card-header text-dark">
      {{ role }} - {{ name }}
    </div>
    <div class="card-body">
      <h5 class="card-title text-dark">{{ role }} - {{ name }}</h5>
      <div class="row">
        <div class="col-6 col-12-small">
          <li v-for="(item, key) in experience" :key="key" class="text-dark">{{ item }}</li>
        </div>
        <p class="card-text text-dark col-6 col-12-small">{{ description }}</p>
        <!-- <div class="row">
      </div> -->
      </div>
      <ul>
      </ul>
      <hr class="text-dark">
      <p class="text-dark">{{ short_text }}</p>
      <div class="btn-group" role="group" aria-label="Basic mixed styles example">
        <div class="d-grid gap-2 d-md-block">
          <a v-if="link.website" :href="link.website" class="btn btn-primary" target="_blank">Website</a>
          <a v-if="link.github" :href="link.github" class="btn btn-dark" target="_blank">Github</a>
          <a v-if="link.youtube" :href="link.youtube" type="button" class="btn btn-danger" target="_blank">YouTube</a>
          <a v-if="link.facebook" :href="link.facebook" type="button" class="btn btn-primary" target="_blank">Facebook</a>
          <a v-if="link.instagram" :href="link.instagram" type="button" class="btn" style="background-color: #de5c9d;border-color: #de5c9d;" target="_blank">Instagram</a>
          <a v-if="link.twitter" :href="link.twitter" type="button" class="btn btn-info" target="_blank">Twitter</a>
          <a v-if="link.twitch" :href="link.twitch" type="button" class="btn btn-success" style="background-color: #8540f5;border-color: #8540f5;" target="_blank">Twitch</a>
          <a v-if="link.discord" :href="'https://discord.com/users/' + link.discord" type="button" class="btn btn-secondary" target="_blank">Discord</a>
        </div>
      </div>
    </div>
  </div>
  <br>
</template>

<script>
export default {
  name: 'AboutMemberCard',
  data() {
    return {
      msg: 'hi'
    }
  },
  props: {
    name: String,
    role: String,
    img: String,
    description: String,
    short_text: String,
    link: Object,
    experience: Array
  }
}
</script>
