<template>
  <Card
    v-for="(item, key) in data"
    :key="key"
    :name="item.name"
    :role="item.role"
    :img="item.img"
    :description="item.description"
    :short_text="item.short_text"
    :link="item.link"
    :experience="item.experience"
    ></Card>
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
      data: [
        {
          name: '夏特稀',
          role: '靈萌團隊 團長',
          img: '',
          link: {
            website: 'https://tershi.com',
            github: 'https://github.com/mmm25002500',
            youtube: 'https://youtube.com/@TershiXia',
            facebook: 'https://facebook.com/TershiXia',
            instagram: 'https://instagram.com/TershiXia',
            twitter: 'https://twitter.com/TershiXia',
            twitch: 'https://twitch.tv/TershiXia',
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
          name: '',
          role: '',
          img: '',
          description: ''
        }
      ]
    }
  }
}
</script>
