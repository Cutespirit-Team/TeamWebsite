<template>
  <div class="row d-flex" v-if="name">
    <div class="col col-md-9">
      <div class="card" style="border-radius: 15px;">
        <div class="card-body p-4">
          <div class="d-flex text-black">
            <div class="flex-shrink-0">
              <img :src="img"
                alt="找不到圖片" class="img-fluid text-dark"
                style="width: 180px; border-radius: 10px;">
              <ul>
                <div v-for="(item, key) in experience" :key="key">
                  <li
                  v-if="item"
                  class="text-dark"
                  >
                    {{ item }}
                  </li>
                </div>
              </ul>
            </div>
            <div class="flex-grow-1 ms-3">
              <h5 class="mb-1 text-dark">{{ name }}</h5>
              <p class="mb-2 pb-1" style="color: #2b2a2a;">{{ role }}</p>
              <p class="text-dark">{{ short_text }}</p>
              <div class="d-flex justify-content-start rounded-3 p-2 mb-2"
                style="background-color: #efefef;" v-if="description">
                <p class="text-dark">{{ description }}</p>
                <!-- <div>
                  <p class="small text-muted mb-1">Articles</p>
                  <p class="mb-0 text-dark">41</p>
                </div>
                <div class="px-3">
                  <p class="small text-muted mb-1">Followers</p>
                  <p class="mb-0 text-dark">976</p>
                </div>
                <div>
                  <p class="small text-muted mb-1">Rating</p>
                  <p class="mb-0 text-dark">8.5</p>
                </div> -->
              </div>
              <!-- d-flex -->
              <div class="btn-group pt-1 d-grid gap-2">
                <!-- <button type="button" class="btn btn-outline-primary me-1 flex-grow-1">Chat</button>
                <button type="button" class="btn btn-primary flex-grow-1">Follow</button> -->
                <a type="button" v-if="link.youtube" :href="link.youtube" class="btn btn-danger me-1 flex-grow-1">YouTube</a>
                <a type="button" v-if="link.github" :href="link.github" class="btn btn-dark me-1 flex-grow-1">Github</a>
                <a type="button" v-if="link.website" :href="link.website" class="btn btn-primary me-1 flex-grow-1">個人網站</a>
                <a type="button" v-if="link.facebook" :href="link.facebook" class="btn btn-primary me-1 flex-grow-1">Facebook</a>
                <a type="button" v-if="link.instagram" :href="link.instagram" class="btn btn-primary me-1 flex-grow-1">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
