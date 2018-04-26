<template>
  <section>
    <swiper class="comment" v-if="comments&&comments.length>0" :options="swiperOption">
      <swiper-slide class="swiper-no-swiping" v-for="(item,i) in commentList" :key="i">
        <img class="avatar" :src="item.url" alt=""><span class="comment_content">{{item.content}}</span>
      </swiper-slide>
    </swiper>
  </section>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  created () {
  },
  props: {
    comments: {
      type: Array
    }
  },
  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
          waitForTransition: false
        },
        loop: true
      }
    }
  },
  computed: {
    commentList () {
      var arr = []
      let comments = this.comments
      if (comments.length > 4) {
        arr = comments.splice(0, 4)
      } else {
        arr = comments
      }
      return arr
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  beforeDestroy () {
    clearTimeout(this.timer)
  }
}
</script>
