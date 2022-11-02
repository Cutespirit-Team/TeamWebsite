<template>
    <div class="form-floating text-dark mb-3">
      <textarea class="form-control" placeholder="開始搜尋開發者吧" id="searchDeveloper" v-model="cacheSearch"></textarea>
      <label for="searchDeveloper">搜尋開發者</label>
    </div>
    <div v-if="!searchData[0]">
      <div class="alert alert-danger" role="alert">
        找不到此開發者喔
      </div>
    </div>
    <IntroCard :data="searchData" :row="row"></IntroCard>
</template>

<script>
import IntroCard from '@/components/IntroCard.vue';
export default {
  components: {
    IntroCard,
  },
  name: 'Card',
  data() {
    return {
      row: 4,
      cacheSearch: '',
      searchData: [],
      card_data: [
        {
          name: '夏特稀',
          img: require('@/assets/tershixia.webp'),
          link: 'https://tershi.com',
          yt: 'https://www.youtube.com/@TershiXia',
          github: 'https://github.com/mmm25002500',
          description: '我是一個在台灣通過自主學習程式語言的一個高中生，擁有將近五年使用Linux系統的經驗，也有開發專案的經驗，我也喜歡拍影片剪影片。'
        },
        {
          name: '',
          img: '',
          link: '',
          yt: '',
          github: '',
          description: ''
        }
      ]
    }
  },
  watch: {
    cacheSearch: function (val) {
      this.searchData = this.card_data.filter((item) => {
        return item.name.toUpperCase().includes(val.toUpperCase())
      })
    }
  },
  created() {
    this.searchData = this.card_data
  }
};
</script>
