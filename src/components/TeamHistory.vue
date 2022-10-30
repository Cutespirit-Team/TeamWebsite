<template>
  <div class="accordion" id="accordionExample">
    <div class="accordion-item" v-for="(item, key) in log" :key="key">
        <h2 class="accordion-header" :id="`log-id`+item.id">
        <button @click="item.closed = !item.closed" class="accordion-button " :class="{'collapsed':item.closed}" type="button" data-bs-toggle="collapse" :data-bs-target="`#log`+key" aria-expanded="true" :aria-controls="`log`+key">
          <div v-if="key===0">
            <div class="badge rounded-pill bg-danger">最新歷史</div>
            <br>
          </div>
          <!-- <div v-else>
            <span class="badge rounded-pill bg-success">穩定版</span>
          </div> -->
            <div v-if="item.description">
              <span class="badge bg-info">
              &nbsp;{{ item.date }}
              </span>
              {{ item.name }} - {{ item.description }}
            </div>
            <div v-else>
              <span class="badge bg-info">
                &nbsp;{{ item.date }}
              </span>
              {{ item.name }}
            </div>
        </button>
        </h2>
        <div :id="`log`+key" class="accordion-collapse collapse" :class="{'collapsed':!item.closed}" :aria-labelledby="`log-id`+item.id" data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <ul>
                <li
                  v-for="(content, key2) in item.event"
                  :key="key2"
                  style="color: black"
                  >{{ content }}</li>
            </ul>
            <p class="text-dark">發生時間：{{ item.date }}</p>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamHistory',
  props: {
    log: {
      type: Array,
      required: true
    }
  },
  data () {
    return {

    }
  }
}
</script>
