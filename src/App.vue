<template>
  <nav ref="modal" class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style="background-color: rgb(7 6 6 / 82%) !important;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img :src="require('@/assets/icon.png')" alt="" width="30" class="d-inline-block align-text-top">
        {{ SERVER_CONFIG.title }}
      </a>
      <button class="navbar-toggler" type="button"
        data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup" >

        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
          <li class="nav-item" v-for="(item, key) in data" :key="key" :class="item.children? 'dropdown':''">
            <div v-if="item.outside">
              <a class="nav-link" :href="item.url" target="_blank">{{ item.name }}</a>
            </div>
            <div v-else>
              <div v-if="item.children">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <font-awesome-icon :icon="item.icon" class="icon alt" style="color: #ffffff;" />
                    {{ item.name }}
                </a>
                <ul class="dropdown-menu" style="background-color: rgb(7 6 6 / 82%) !important;" aria-labelledby="navbarDropdown">
                  <li v-for="(child, key2) in item.children" :key="key2">
                    <router-link :to="child.path" class="dropdown-item" href="#">
                      <font-awesome-icon :icon="child.icon" class="icon alt" style="color: #ffffff;" />
                      <span style="color: #ffffff;">&nbsp;{{ child.name }}</span>
                    </router-link>
                  </li>
                  <!-- <li><hr class="dropdown-divider"></li> -->
                </ul>
              </div>
              <div v-else>
                <router-link class="nav-link" :to="item.url">
                  <font-awesome-icon :icon="item.icon" class="icon alt" style="color: #ffffff;" />
                  {{ item.name }}
                </router-link>
              </div>
            </div>
          </li>
        </ul>

        <form class="d-flex me-2">
          <input class="form-control" type="search" placeholder="??????????????????(????????????)" aria-label="Search" v-model="navCacheSearch">
        </form>
        <div class="d-flex justify-content-start">
          <button type="button" class="btn btn-outline-success me-2" @click="checkContent()">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="icon alt" />
            ??????
          </button>
          <button type="button" class="d-flex btn btn-outline-success me-2" @click="$refs.LoginModal.showModal()">
            ??????
          </button>

          <button class="d-flex btn btn-outline-info" @click="$refs.SignupModal.showModal()">
            ??????
          </button>
        </div>
      </div>
    </div>
  </nav>
  <div class="container">
    <router-view/>
  </div>
  <footer>
    <p class="copyright">&copy; Copyright 2022. ????????????: <a :href="cr1_url">{{ cr1 }}</a></p>
  </footer>
  <LoginModal ref="LoginModal"></LoginModal>
  <SignupModal ref="SignupModal"></SignupModal>
  <Notification
    ref="Notification"
    :title="searchNotification.title"
    :msg="searchNotification.msg"
    :time="searchNotification.time"
    :icon="searchNotification.icon"></Notification>
  <!-- <router-link to="/newPage/routerNavigation">/newPage/routerNavigation</router-link> -->
</template>

<style lang="scss">
// @import "./assets/all";
body {
  padding-top: 80px;
  background-image:
    linear-gradient(to top,
      rgba(19, 21, 25, 0.5),
      rgba(19, 21, 25, 0.5)),
    url("assets/bg.jpg");
  color: white;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
footer {
  height: 300px;
  width: 100%;
}
p.copyright {
  width: 100%;
  line-height: 10px;
  text-align: center;
  bottom:0;
  position: fixed;
}
</style>

<script>
import LoginModal from './components/LoginModal.vue'
import SignupModal from './components/SignupModal.vue'
import Notification from './components/ToastNotification.vue'
import config from './assets/data/server.json'
export default {
  components: {
    LoginModal,
    SignupModal,
    Notification
  },
  data() {
    return {
      cr1: '????????????',
      cr1_url: 'https://team.tershi.com',
      navCacheSearch: '',
      SERVER_CONFIG: config,
      searchNotification: {
        title: '???????????????',
        msg: '????????????',
        time: '??????'
      },
      data: [
        {
          name: '??????',
          url: '/',
          icon: ['fas', 'house'],
          outside: false
        },
        {
          name: '??????',
          url: '/post',
          icon: ['fas', 'receipt'],
          outside: false
        },
        {
          name: '????????????',
          url: '/project',
          icon: ['fas', 'code'],
          outside: false
        },
        {
          name: '????????????',
          url: '/about',
          icon: ['fas', 'address-card'],
          children: [
            {
              name: '????????????',
              icon: ['fas', 'chalkboard-user'],
              path: '/about/team'
            },
            {
              name: '????????????',
              icon: ['fas', 'clock-rotate-left'],
              path: '/about/history'
            },
            {
              name: '????????????',
              icon: ['fas', 'user-group'],
              path: '/about/member'
            },
            {
              name: '????????????',
              icon: ['fas', 'circle-info'],
              path: '/about/info'
            },
            {
              name: '????????????',
              icon: ['fas', 'handshake'],
              path: '/about/collaborate'
            },
            {
              name: '????????????????????????',
              icon: ['fas', 'link'],
              path: '/about/link'
            }
          ],
          outside: false
        },
        {
          name: '????????????',
          url: '/joinus',
          icon: ['fas', 'user-plus'],
          outside: false
        },
        // {
        //   name: 'DC?????????',
        //   url: 'https://dcbot.tershi.com',
        //   outside: true
        // },
        {
          name: '????????????',
          url: '/webchangelog',
          icon: ['fas', 'file-invoice'],
          outside: false
        },
        {
          name: '?????????',
          url: '/developer',
          icon: ['fas', 'terminal'],
          outside: false
        }
      ]
    }
  },
  methods: {
    searchPost() {
      // this.$router.push({ name: 'SearchPost', params: { search: this.navCacheSearch } })
    },
    checkContent() {
      if (this.navCacheSearch === '') {
        this.searchNotification = {
          title: '???????????????',
          msg: '????????????',
          icon: 'xmark',
          time: '??????'
        }
        this.$refs.Notification.showToast()
      } else {
        this.searchNotification = {
          title: '???????????????',
          msg: '?????????????????????~??????',
          icon: 'triangle-exclamation',
          time: '??????'
        }
        this.$refs.Notification.showToast()
        // this.searchPost()
      }
    }
  }
}
console.log('%c ?????????!!???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????&?????????', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
</script>
