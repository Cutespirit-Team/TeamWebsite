<template>
  <h1>靈萌團隊官網 - 更新日誌</h1>
  <ChangeLog :log="log"></ChangeLog>
</template>

<script>
import json from '../assets/data/changeLog.json'
import ChangeLog from '../components/ChangeLog.vue'
export default {
  name: 'WebsiteChangeLog',
  components: {
    ChangeLog
  },
  data() {
    return {
      log: json
    }
  }
}
</script>
