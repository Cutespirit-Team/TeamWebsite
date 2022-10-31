<template>
  <!-- TODO: 把Card都放在 Component 用 Props 去呼叫，就不用每個都新增一個card元件 -->
  <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark" style="background-color: rgb(21 21 21 / 82%) !important;">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">菜單</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item" v-for="(item, key) in data" :key="key">
                      <router-link :to="item.path" @click="click=1" class="nav-link align-middle px-0 text-white">
                        <font-awesome-icon :icon="item.icon" class="icon alt" style="color: #ffffff;" />
                        {{ item.name }}
                      </router-link>
                    </li>
                    <!-- <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Orders</span></a>
                    </li> -->
                </ul>
                <hr>
            </div>
        </div>
        <div class="col py-3">
          <div v-if="click==0">
            <h2>這是關於頁面</h2>
            <p>請點擊左邊菜單呦(◍•ᴗ•◍)</p>
          </div>
          <router-view></router-view>
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      click: 0,
      data: [
        {
          name: '團隊介紹',
          icon: ['fas', 'chalkboard-user'],
          path: '/about/team'
        },
        {
          name: '團隊歷史',
          icon: ['fas', 'clock-rotate-left'],
          path: '/about/history'
        },
        {
          name: '團隊成員',
          icon: ['fas', 'user-group'],
          path: '/about/member'
        },
        {
          name: '團隊資訊',
          icon: ['fas', 'circle-info'],
          path: '/about/info'
        },
        {
          name: '洽談合作',
          icon: ['fas', 'handshake'],
          path: '/about/collaborate'
        },
        {
          name: '團隊連結和友情站',
          icon: ['fas', 'link'],
          path: '/about/link'
        }
      ]
    }
  }
}
</script>
