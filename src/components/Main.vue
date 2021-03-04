<template>
  <div>
<router-link to="/logout">Выйти?</router-link>
<Video />
<VideoList />
  </div>
</template>

<script>
import Video from './Video.vue'
import VideoList from './VideoList.vue'


export default {
  name: 'Main',
  components: {
    Video,
    VideoList
  }
  
}

</script>

<style scoped>

</style>