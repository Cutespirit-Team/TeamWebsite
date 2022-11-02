<template>
  <!-- 把圖片都放在靜態資產(static assets)裡面，以便 vue-use-webp 載入 -->
  <h1>歡迎來到靈萌團隊團員區</h1>
  <p>這裡是靈萌團隊團員的一些資訊。</p>
  <hr>
  <div class="form-floating text-dark mb-3">
    <textarea class="form-control" placeholder="搜尋成員" id="searchDeveloper" v-model="cacheSearch"></textarea>
    <label for="searchDeveloper">搜尋成員</label>
  </div>
  <div class="btn-group" role="group" aria-label="Basic radio toggle button group mb-3">
    <div class="mb-3">
      <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" @click="change('')" checked>
      <label class="btn btn-outline-info text-white" for="btnradio2">全部</label>
    </div>
    <div v-for="(item, key) in data" :key="key" class="mb-3">
      <input :href="`#`+item.name" type="radio" class="btn-check" name="btnradio" :id="item.name" autocomplete="off" @click="change(item.name)">
      <label class="btn btn-outline-info text-white" :for="item.name">{{ item.name }}</label>
    </div>
  </div>
  <!-- <div class="mb-3"> -->
    <Card
      v-for="(item, key) in searchData"
      :key="key"
      :id="item.name"
      :name="item.name"
      :role="item.role"
      :img="item.img"
      :description="item.description"
      :short_text="item.short_text"
      :link="item.link"
      :experience="item.experience"
      class="mb-3"
      ></Card>
  <!-- </div> -->
  <div v-if="!searchData[0]">
    <div class="alert alert-danger" role="alert">
      找不到結果喔
    </div>
  </div>
</template>

<script>
import Card from '@/components/AboutMemberCard.vue'
export default {
  name: 'AboutTeamMember',
  components: {
    Card
  },
  data() {
    return {
      cacheSearch: '',
      searchData: [],
      data: [
        {
          name: '夏特稀',
          role: '靈萌團隊 團長',
          img: require('@' + '/assets/images/tershi_circle.png'),
          link: {
            website: 'https://tershi.com',
            github: 'https://github.com/mmm25002500',
            youtube: 'https://youtube.com/@TershiXia',
            facebook: 'https://facebook.com/TershiXia',
            instagram: 'https://instagram.com/TershiXia',
            discord: '夏特稀#1219'
          },
          experience: [
            '國二考到OCPJP',
            '資訊月競賽中區第二',
            'Google Study Jam',
            'Linux 6年經驗',
            '111年特殊選才正取一'
          ],
          short_text: '一個想跳脫教育體制卻跳不出去，正在朝著自己夢想而前進的一個台灣高中生。',
          description: '大家好，我叫做夏特稀，我從國小就喜歡寫程式，我是一個非常有好奇心的人，從小就非常喜歡電腦科學，我是一個喜歡交朋友的人，從小我就非常有好奇心。'
        },
        {
          name: '哈密瓜',
          role: '開發部長兼商店店長',
          img: require('@' + '/assets/images/hamigua_circle.png'),
          link: {
            website: '',
            github: 'https://github.com/y1220asdf',
            youtube: 'https://www.youtube.com/c/%E5%93%88%E5%AF%86%E7%93%9C',
            facebook: 'https://www.facebook.com/profile.php?id=100074169711147',
            instagram: 'https://www.instagram.com/hamigua_2005/',
            discord: ''
          },
          experience: [
            '全民英檢初級通過',
            '開發嘴人產生器',
            '開發全國高中生告白網',
            '靈萌商店',
            '開發Discord機器人'
          ],
          short_text: '',
          description: ''
        },
        {
          name: 'ASTINBOB',
          role: '工程師',
          img: require('@' + '/assets/images/astinbob_circle.png'),
          link: {
            website: '',
            github: '',
            youtube: '',
            facebook: '',
            instagram: '',
            discord: ''
          },
          experience: [
            '',
            '',
            '',
            '',
            ''
          ],
          short_text: '',
          description: 'Hi, 我是游走在刪庫跑路邊緣的 IT 人員， 最喜歡網路喜歡琢磨其背後的原理，曾擔任 CISCO 課程講師， IT 技術什麼都略懂都可以問但什麼都不精，也歡迎一起學習交流。'
        },
        {
          name: '頭腦',
          role: '',
          img: require('@' + '/assets/images/brain.png'),
          link: {
            website: '',
            github: '',
            youtube: '',
            facebook: '',
            instagram: '',
            discord: ''
          },
          experience: [
            '',
            '',
            '',
            '',
            ''
          ],
          short_text: '',
          description: '聽說資工很好玩，而且比較輕鬆，所以誤打誤撞進了資工系。期待每個新知識，學習探索未來科技，並且創造樂趣。希望認識更多大佬。'
        },
      ]
    }
  },
  watch: {
    cacheSearch: function (val) {
      this.searchData = this.data.filter((item) => {
        // 如果沒有搜尋到 name
        if (item.name.includes(this.cacheSearch)){
          return item.name.includes(this.cacheSearch)
        } else if (item.role.includes(this.cacheSearch)) {
          return item.role.includes(this.cacheSearch)
        } else if (item.description.includes(this.cacheSearch)) {
          return item.description.includes(this.cacheSearch)
        } else if (item.short_text.includes(this.cacheSearch)) {
          return item.short_text.includes(this.cacheSearch)
        } else {
          return false
        }
      })
    }
  },
  created() {
    this.searchData = this.data
  },
  methods: {
    change(name) {
      this.cacheSearch = name
    }
  }
}
</script>
