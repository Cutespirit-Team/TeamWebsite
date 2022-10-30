<template>
  <!-- 新增找不到結果的提示訊息 -->
  <div class="form-floating text-dark">
    <textarea class="form-control" placeholder="搜尋歷史" id="searchDeveloper" v-model="cacheSearch"></textarea>
    <label for="searchDeveloper">搜尋歷史</label>
  </div>
  <TeamHistory :log="searchData"></TeamHistory>
  <div v-if="!searchData[0]">
    <div class="alert alert-danger" role="alert">
      找不到結果喔
    </div>
  </div>
</template>

<script>
import json from '../assets/data/TeamHistory.json'
import TeamHistory from '../components/TeamHistory.vue'
export default {
  name: 'AboutTeamHistory',
  components: {
    TeamHistory
  },
  data() {
    return {
      log: json,
      cacheSearch: '',
      searchData: []
    }
  },
  watch: {
    cacheSearch: function (val) {
      this.searchData = this.log.filter((item) => {
        // 如果沒有搜尋到 name
        if (item.name.includes(this.cacheSearch)){
          return item.name.includes(this.cacheSearch)
        } else if (item.date.includes(this.cacheSearch)) {
          return item.date.includes(this.cacheSearch)
        } else if (item.description.includes(this.cacheSearch)) {
          return item.description.includes(this.cacheSearch)
        } else {
          return false
        }
      })
    }
  },
  created() {
    this.searchData = this.log
  }
}
</script>
