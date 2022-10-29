<template>
  <!-- TODO: 把Card都放在 Component 用 Props 去呼叫，就不用每個都新增一個card元件 -->
  <div class="row">
    <div class="col-4">
      <div class="list-group">
        <router-link v-for="(item, key) in data" :key="key" :to="item.path" class="list-group-item list-group-item-act">
          {{ item.name }}
        </router-link>
      </div>
    </div>

    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          name: '團隊介紹',
          path: '/about/team'
        },
        {
          name: '團隊歷史',
          path: '/about/history'
        },
        {
          name: '團隊成員',
          path: '/about/member'
        }
      ]
    }
  }
}
</script>
