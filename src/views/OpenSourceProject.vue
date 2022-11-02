<template>
  <input class="form-control mb-3" type="search" placeholder="搜尋專案吧" aria-label="Search" v-model="cacheSearch">
  <div v-if="!searchData[0]">
    <div class="alert alert-danger" role="alert">
      找不到專案喔QQ
    </div>
  </div>
  <ProjectCard :data="searchData" :row="row"></ProjectCard>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'
export default {
  components: {
    ProjectCard
  },
  data () {
    return {
      row: '4',
      cacheSearch: '',
      searchData: [],
      data: [
        {
          name: 'Cutespirit Discord Bot',
          description: '用Python編寫功能強大的Discord機器人',
          link: 'https://dcbot.tershi.com',
          github: 'https://github.com/Cutespirit-Team/CutespiritDiscordBot/'
        },
        {
          name: 'Cutespirit Telegram Bot',
          description: '用Python編寫功能強大的Telegram Bot',
          github: 'https://github.com/Cutespirit-Team/CutespiritTelegramBot'
        },
        {
          name: 'Cutespirit Taiwan Stock',
          description: '用Python編寫功能強大的股票資訊軟體',
          github: 'https://github.com/Cutespirit-Team/taiwan-stock'
        },
        {
          name: 'qian-yue',
          description: '淺月物語官方網站，一個使用 vue cli 框架建構的網站。',
          link: 'https://qian-yue.tk',
          github: 'https://github.com/Vuage/qian-yue'
        },
        {
          name: 'NutcDiscordBot',
          description: 'A Discord Bot with lots of powerful',
          link: '',
          github: 'https://github.com/Cutespirit-Team/NutcDiscordBot'
        },
        {
          name: 'FreeGameNotiDiscordBot',
          description: '限免遊戲通知',
          link: '',
          github: 'https://github.com/Cutespirit-Team/FreeGameNotiDiscordBot'
        },
        {
          name: '',
          description: '',
          link: '',
          github: ''
        }
      ]
    }
  },
  watch: {
    cacheSearch: function (val) {
      this.searchData = this.data.filter((item) => {
        if (!item.name.toUpperCase().includes(val.toUpperCase())) {
          // 如果找不到名稱，就找描述
          return item.description.toUpperCase().includes(val.toUpperCase())
        } else {
          // 如果找到名稱，就回傳true
          return item.name.toUpperCase().includes(val.toUpperCase())
        }
      })
    }
  },
  created () {
    this.searchData = this.data
  }
}
</script>
