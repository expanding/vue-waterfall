<template>
  <section>
    <!--纯css先排完第一列再排第二列不是想要的（对于排序）-->
    <template v-if="mold === 'basic'">
      <ul class="list">
        <li class="item">
          <div>
            <div class="img-wrapper">
              <img src="" alt="">
            </div>
            <div class="info">
              <p class="name">SK-II </p>
              <p class="price"><span class="newPrice"><em>￥</em>1368.00</span><s class="oldPrice">￥2999.00</s></p>
            </div>
          </div>
        </li>
        <li class="item">
          <div>
            <div class="img-wrapper">
              <img src="" alt="">
            </div>
            <div class="info">
              <p class="label"><span class="offer">尝鲜价</span></p>
              <p class="name">SK-II 小灯泡肌因光蕴环采钻白精华露</p>
              <p class="price"><span class="newPrice"><em>￥</em>1368.00</span><s class="oldPrice">￥2999.00</s></p>
            </div>
          </div>
        </li>
        <li class="item">
          <div>
            <div class="img-wrapper">
              <img src="" alt="">
            </div>
            <div class="info">
              <p class="label"><span class="offer">尝鲜价</span></p>
              <p class="name">SK-II 小灯泡肌</p>
              <p class="price"><span class="newPrice"><em>￥</em>1368.00</span><s class="oldPrice">￥2999.00</s></p>
            </div>
          </div>
        </li>
        <li class="item">
          <div>
            <div class="img-wrapper">
              <img src="" alt="">
            </div>
            <div class="info">
              <p class="name">SK-II 小灯泡</p>
              <p class="price"><span class="newPrice"><em>￥</em>1368.00</span><s class="oldPrice">￥2999.00</s></p>
            </div>
          </div>
        </li>
        <li class="item">
          <div>
            <div class="img-wrapper">
              <img src="" alt="">
            </div>
            <div class="info">
              <p class="label"><span class="offer">尝鲜价</span></p>
              <p class="name">SK-II 小灯泡肌因光蕴环采钻白精华露</p>
              <p class="price"><span class="newPrice"><em>￥</em>1368.00</span><s class="oldPrice">￥2999.00</s></p>
            </div>
          </div>
        </li>
        <li class="item">
          <div>
            <div class="img-wrapper">
              <img src="" alt="">
            </div>
            <div class="info">
              <p class="label"><span class="offer">尝鲜价</span></p>
              <p class="name">SK-II 小灯泡肌因光蕴环采钻白精华露</p>
              <p class="price"><span class="newPrice"><em>￥</em>1368.00</span><s class="oldPrice">￥2999.00</s></p>
            </div>
          </div>
        </li>
        <li class="item">
          <div>
            <div class="img-wrapper">
              <img src="" alt="">
            </div>
            <div class="info">
              <p class="label"><span class="offer">尝鲜价</span></p>
              <p class="name">SK-II 小灯泡肌因光蕴环采钻白精华露</p>
              <p class="price"><span class="newPrice"><em>￥</em>1368.00</span><s class="oldPrice">￥2999.00</s></p>
            </div>
          </div>
        </li>
        <li class="item">
          <div>
            <div class="img-wrapper">
              <img src="" alt="">
            </div>
            <div class="info">
              <p class="label"><span class="offer">尝鲜价</span></p>
              <p class="name">SK-II 小灯泡肌因光蕴环采钻白精华露</p>
              <p class="price"><span class="newPrice"><em>￥</em>1368.00</span><s class="oldPrice">￥2999.00</s></p>
            </div>
          </div>
        </li>
        <li class="item">
          <div>
            <div class="img-wrapper">
              <img src="" alt="">
            </div>
            <div class="info">
              <p class="label"><span class="offer">尝鲜价</span></p>
              <p class="name">SK-II 小灯泡肌因光蕴环采钻白精华露</p>
              <p class="price"><span class="newPrice"><em>￥</em>1368.00</span><s class="oldPrice">￥2999.00</s></p>
            </div>
          </div>
        </li>
        <li class="item">
          <div>
            <div class="img-wrapper">
              <img src="" alt="">
            </div>
            <div class="info">
              <p class="label"><span class="offer">尝鲜价</span></p>
              <p class="name">SK-II 小灯泡肌因光蕴环采钻白精华露</p>
              <p class="price"><span class="newPrice"><em>￥</em>1368.00</span><s class="oldPrice">￥2999.00</s></p>
            </div>
          </div>
        </li>
        <li class="item">
          <div>
            <div class="img-wrapper">
              <img src="" alt="">
            </div>
            <div class="info">
              <p class="label"><span class="offer">尝鲜价</span></p>
              <p class="name">SK-II 小灯泡肌因光蕴环采钻白精华露</p>
              <p class="price"><span class="newPrice"><em>￥</em>1368.00</span><s class="oldPrice">￥2999.00</s></p>
            </div>
          </div>
        </li>
        <li class="item">
          <div>
            <div class="img-wrapper">
              <img src="" alt="">
            </div>
            <div class="info">
              <p class="label"><span class="offer">尝鲜价</span></p>
              <p class="name">SK-II 小灯泡肌因光蕴环采钻白精华露</p>
              <p class="price"><span class="newPrice"><em>￥</em>1368.00</span><s class="oldPrice">￥2999.00</s></p>
            </div>
          </div>
        </li>
        <li class="item">
          <div>
            <div class="img-wrapper">
              <img src="" alt="">
            </div>
            <div class="info">
              <p class="label"><span class="offer">尝鲜价</span></p>
              <p class="name">SK-II 小灯泡肌因光蕴环采钻白精华露</p>
              <p class="price"><span class="newPrice"><em>￥</em>1368.00</span><s class="oldPrice">￥2999.00</s></p>
            </div>
          </div>
        </li>
        <li class="item">
          <div>
            <div class="img-wrapper">
              <img src="" alt="">
            </div>
            <div class="info">
              <p class="label"><span class="offer">尝鲜价</span></p>
              <p class="name">SK-II 小灯泡肌因光蕴环采钻白精华露</p>
              <p class="price"><span class="newPrice"><em>￥</em>1368.00</span><s class="oldPrice">￥2999.00</s></p>
            </div>
          </div>
        </li>
        <li class="item">
          <div>
            <div class="img-wrapper">
              <img src="" alt="">
            </div>
            <div class="info">
              <p class="label"><span class="offer">尝鲜价</span></p>
              <p class="name">SK-II 小灯泡肌因光蕴环采钻白精华露</p>
              <p class="price"><span class="newPrice"><em>￥</em>1368.00</span><s class="oldPrice">￥2999.00</s></p>
            </div>
          </div>
        </li>
        <li class="item">
          <div>
            <div class="img-wrapper">
              <img src="" alt="">
            </div>
            <div class="info">
              <p class="label"><span class="offer">尝鲜价</span></p>
              <p class="name">SK-II 小灯泡肌因光蕴环采钻白精华露</p>
              <p class="price"><span class="newPrice"><em>￥</em>1368.00</span><s class="oldPrice">￥2999.00</s></p>
            </div>
          </div>
        </li>
        <li class="item">
          <div>
            <div class="img-wrapper">
              <img src="" alt="">
            </div>
            <div class="info">
              <p class="label"><span class="offer">尝鲜价</span></p>
              <p class="name">SK-II 小灯泡肌因光蕴环采钻白精华露</p>
              <p class="price"><span class="newPrice"><em>￥</em>1368.00</span><s class="oldPrice">￥2999.00</s></p>
            </div>
          </div>
        </li>
        <li class="item">
          <div>
            <div class="img-wrapper">
              <img src="" alt="">
            </div>
            <div class="info">
              <p class="label"><span class="offer">尝鲜价</span></p>
              <p class="name">SK-II 小灯泡肌因光蕴环采钻白精华露</p>
              <p class="price"><span class="newPrice"><em>￥</em>1368.00</span><s class="oldPrice">￥2999.00</s></p>
            </div>
          </div>
        </li>
        <li class="item">
          <div>
            <div class="img-wrapper">
              <img src="" alt="">
            </div>
            <div class="info">
              <p class="label"><span class="offer">尝鲜价</span></p>
              <p class="name">SK-II 小灯泡肌因光蕴环采钻白精华露</p>
              <p class="price"><span class="newPrice"><em>￥</em>1368.00</span><s class="oldPrice">￥2999.00</s></p>
            </div>
          </div>
        </li>
        <li class="item">
          <div>
            <div class="img-wrapper">
              <img src="" alt="">
            </div>
            <div class="info">
              <p class="label"><span class="offer">尝鲜价</span></p>
              <p class="name">SK-II 小灯泡肌因光蕴环采钻白精华露</p>
              <p class="price"><span class="newPrice"><em>￥</em>1368.00</span><s class="oldPrice">￥2999.00</s></p>
            </div>
          </div>
        </li>
        <li class="item">
          <div>
            <div class="img-wrapper">
              <img src="" alt="">
            </div>
            <div class="info">
              <p class="label"><span class="offer">尝鲜价</span></p>
              <p class="name">SK-II 小灯泡肌因光蕴环采钻白精华露</p>
              <p class="price"><span class="newPrice"><em>￥</em>1368.00</span><s class="oldPrice">￥2999.00</s></p>
            </div>
          </div>
        </li>
        <!-- <li class="item" v-for="(item,index) in items" :key="index">
          <div @click="goProductDetail(item)">
            <div class="img-wrapper">
              <CommentBubble :comments="item.comment"/>
              <img class="img-wrapper-img" :src="item.thumbnail" alt="">
            </div>
            <div class="info">
              <p class="label" v-if="JSON.stringify(item.tags) !== '[]'"><span class="offer">{{ tagsText(item.tags) }}</span></p>
              <p class="name">{{ item.title }}</p>
              <p class="price"><span class="newPrice price_reset"><em>￥</em>{{ item.price }}</span><s class="oldPrice price_reset">￥{{ item.price_origin }}</s></p>
            </div>
          </div>
        </li> -->
      </ul>
    </template>
    <template v-if="mold === 'productsList'">
      <ul class="list">
        <li class="item" v-for="(item,index) in productList" :key="index">
          <div @click="goProductDetail(item)">
            <div class="img-wrapper">
              <CommentBubble :comments="item.comment"/>
              <img class="img-wrapper-img" :src="item.thumbnail" alt="">
            </div>
            <div class="info">
              <p class="label" v-if="JSON.stringify(item.tags) !== '[]'"><span class="offer">{{ tagsText(item.tags) }}</span></p>
              <p class="name">{{ item.title }}</p>
              <p class="price"><span class="newPrice price_reset"><em>￥</em>{{ item.price }}</span><s class="oldPrice price_reset">￥{{ item.price_origin }}</s></p>
              <!-- <p class="label" v-if="JSON.stringify(item.tags) === '[]'"><span class="offer">{{ tagsText(item.tags) }}</span></p> -->
            </div>
          </div>
        </li>
        <infinite-loading force-use-infinite-wrapper="true" @infinite="loadMore" ref="loadMore" spinner="bubbles">
          <span slot="no-more">
            <div class="bottom_line">
              <p class="icon_img">
                <img src="../assets/img/icon/image_ bottom_line@2x.png" alt="">
              </p>
              <p class="text">~人家是有底线的~</p>
            </div>
          </span>
          <span slot="no-results"></span>
        </infinite-loading>
      </ul>
    </template>
  </section>
</template>

<script>
import CommentBubble from '../components/CommentBubble'
import InfiniteLoading from 'vue-infinite-loading'

import { mapGetters, mapActions } from 'vuex'

import Utils from '../libs/utils'

export default {
  created () {
    // this.init()
  },
  props: {
    mold: {
      type: String,
      default: 'basic'
    },
    page: {
      default: 1
    },
    search: {
      type: Object,
      default: function () {
        return {
          tag_id: 0, // 按标签查询，不需要不传
          kw: '', // 首页搜索，不需要不传
          cat_id: 0, // 分类页面，传入分类id，不需要不传
          brand_id: '', // 按品牌查询，不需要不传
          is_recommend: '', // 今日推荐：1：推荐，不需要不传。
          price_sort: '', // 按价格排序,倒序排序，不需要不传
          fake_sales_sort: '' // 按显示销量排序，倒序排序，不需要不传
        }
      }
    }
  },
  data () {
    return {
      items: [],
      productList: [],
      selectProducts: 1,
      LoadingItems: [],
      currentPage: this.page,
      firstState: null,
      firstFetch: true,
      width: 162
    }
  },
  mounted () {
    let clientWidth = document.body.clientWidth
    if (clientWidth === 320) {
      this.width = 138
    } else if (clientWidth === 360) {
      this.width = 156
    } else if (clientWidth === 414) {
      this.width = 180
    } else if (clientWidth === 411) {
      this.width = 178
    }
  },
  computed: {
    ...mapGetters({
      notProductIds: 'normal/notProductIds',
      fetchIndexCount: 'normal/fetchIndexCount'
    }),
    ...mapActions([
      'normal/updateNotProductIds',
      'normal/updateFetchIndexCount'
    ])
  },
  methods: {
    // 判断来源初始化并且触发加载
    init () {
      this.items = []
      this.productList = []
      switch (this.mold) {
        case 'basic':
          this.fetchRecommend()
          break
        case 'productsList':
          this.currentPage = this.page
          this.$nextTick(() => {
            this.currentPage = 1
            this.$refs.loadMore.$emit('$InfiniteLoading:reset')
          })
          break
      }
    },
    // 加载更多
    loadMore ($state) {
      this.$nextTick(() => {
        this.currentPage++
        this.fetchSelect($state)
      })
    },
    fetchRecommend ($state) {
      let self = this
      this.$http.get('api/products', {
        params: {
          is_recommend: 1,
          take: 4
        }
      }).then(res => {
        let data = res.data.meta
        this.items = data.rows
        let noIdsAry = []
        this.items.forEach(item => {
          if (item.hasOwnProperty('product_id')) {
            noIdsAry.push(item.product_id)
          }
        })
        let newAry = []
        for (let id in self.notProductIds) {
          newAry.push(self.notProductIds[id])
        }
        if (newAry.length > 0) {
          newAry = Utils.uniqueAry(newAry.concat(noIdsAry))
        } else {
          newAry = Utils.uniqueAry(noIdsAry)
        }
        self.$store.dispatch('normal/updateNotProductIds', newAry)
        let indexLoadCount = self.fetchIndexCount + 1
        self.$store.dispatch('normal/updateFetchIndexCount', indexLoadCount)
      })
    },
    fetchSelect ($state) {
      if (!$state) {
        return
      }
      let noProductIdsObj = this.notProductIds
      let noProductIdsAry = []
      for (let id in noProductIdsObj) {
        noProductIdsAry.push(noProductIdsObj[id])
      }
      let noProductIdsStr = noProductIdsAry.join(',')
      this.$http.get('api/products', {
        params: {
          tag_id: this.search.tag_id, // 按标签查询，不需要不传
          kw: this.search.kw, // 首页搜索，不需要不传
          cat_id: this.search.cat_id, // 分类页面，传入分类id，不需要不传
          brand_id: this.search.brand_id, // 按品牌查询，不需要不传
          page: this.currentPage - 1, // 当前页，不需要不传
          take: 6, // 每页读取商品条数，不需要不传
          is_recommend: this.search.is_recommend, // 今日推荐：1：推荐，不需要不传。
          price_sort: this.search.price_sort, // 按价格排序,倒序排序，不需要不传
          fake_sales_sort: this.search.fake_sales_sort, // 按显示销量排序，倒序排序，不需要不传
          not_product_ids: noProductIdsStr // 排除指定商品
        }
      }).then(res => {
        let data = res.data.meta
        let productListData = data.rows
        if (data.total <= 0) {
          $state.complete()
          this.$store.commit('allProductList/onempty', true)
          return
        } else {
          this.$store.commit('allProductList/onempty', false)
        }
        if (productListData.length < data.take) {
          $state.complete()
          this.productList = this.productList.concat(productListData)
        } else {
          this.productList = this.productList.concat(productListData)
          $state.loaded()
        }
      })
    },
    tagsText (tags) {
      let result = []
      if (tags.length > 2) {
        tags.forEach((tag, index) => {
          if (index < 2) {
            result.push(tag)
          }
        })
        return result.join(' ')
      } else {
        return tags.join(' ')
      }
    },
    goProductDetail (item) {
      if (Utils.isIOS()) {
        location.href = location.origin + '/productIndex/detail/' + item.product_id
      } else {
        this.$router.push({
          name: 'ProductIndex',
          params: {
            pId: item.product_id
          }
        })
      }
    },
    rendered () {
      console.log('waterfall was rendered')
    }
  },
  components: {
    InfiniteLoading,
    CommentBubble
  },
  watch: {
    search: function (val) {
      this.init()
    },
    fetchIndexCount (newVal) {
      if (newVal === 5 && this.mold === 'productsList') {
        this.fetchSelect(this.firstState)
      }
    }
  }
}
</script>
<style>
  .list .img-wrapper {
    position: relative;
  }
  .img-wrapper .comment {
    position: absolute;
    margin-top: 0.2rem;
    margin-left: 0.2rem;
    border-radius: 0.25rem;
    width: 2.16rem;
    height: 0.35rem;
    line-height: 0.35rem;
    background-color: rgba(0,0,0,0.3);
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }

  .img-wrapper .avatar {
    float: left;
    padding-left: 0.02rem;
    width: 0.3rem;
    height: 0.3rem;
    line-height: 0.35rem;
    border-radius: 50%;
    top: 0;
    bottom: 0;
    padding: 0.025rem;
  }

  .img-wrapper .comment_content{
    font-size: 0.2rem;
    width: 1.69rem;
    color: #ffffff;
    padding-right: 0.2rem;
    padding-left: 0.05rem;
    overflow: hidden;
    text-overflow: ellipsis;
    height: .35rem;
    line-height: .35rem;
    display: inline-block;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
</style>

<style scoped>
em{
  font-style: normal;
}

.list {
  width:100%;
  overflow: hidden;
  -webkit-column-count: 2;
  -moz-column-count: 2;
  column-count: 2;
  -moz-column-gap:0.46rem;
  -webkit-column-gap:0.46rem;
  column-gap:0.46rem;
  -moz-column-fill: balance;
  column-fill: balance;
}

.list .item {
  /* width: 47%; */
  /* height: auto; */
  margin-bottom: 0.51rem;
  -moz-page-break-inside: avoid;
  -webkit-column-break-inside:avoid;
  break-inside: avoid;
  /* display: flex;
  flex-direction: column; */
}
/* .list .item a{
  display: block;
  width: 3.22rem;
  height: auto;
  margin:0 auto;
} */
/* .list .item:nth-of-type(2n) {
  float: right;
}

.list item:nth-of-type(2n+1) {
  float: left;
} */

.list .img-wrapper {
  /* width: 3.22rem; */
  width: 100%;
  height: 2.76rem;
  background: #ddd;
  margin-bottom: 0.16rem;
  position: relative;
}

.list .img_wrapper img {
  width: 100%;
  height: 100%;
}

.list .info {
  height: auto;
}

.list .label {
  height: auto;
  margin-bottom: 0.08rem;
}
.list .label span{
  display: inline-block;
  height: 0.2rem;
  line-height: 0.2rem;
  font-size: 0.2rem;
  margin-right:0.14rem;
}
.list .label span:nth-last-of-type(1){
  margin-right: 0;
}
.list .label span{
  color: #A40303;
}
/* .list .label .offer{
  color: rgb(197, 155, 122);
}
.list .label .exclusive{
  color: rgb(164,3,3);
}
.list .label .full_reduction{
  color:rgb(35,86,71);
} */
.list .name {
  min-height: 0.38rem;
  max-height:0.76rem;
  line-height: 0.38rem;
  font-size: 0.26rem;
  color: rgb(51, 51, 51);
  margin-bottom: 0.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.list .price {
  height: 0.32rem;
  line-height: 0.32rem;
  color: rgb( 255, 82, 62);
}

.list .newPrice {
  margin-right: 0.12rem;
  font-weight: 900;
  color: rgb( 255, 82, 62);
  font-size: 0.32rem;
}

.list .newPrice em {
  font-size: 0.24rem;
  font-weight: 900;
  color: rgb( 255, 82, 62);

}

.list .oldPrice {
  color: rgb(193,193,193);
  font-size: 0.24rem;
}
/* .list .item a .img-wrapper .img-wrapper-img{
  width: 100%;
  height: 100%;
} */
.list .item .img-wrapper .img-wrapper-img{
  width: 100%;
  height: 100%;
}
.bottom_line{
  width:100%;
  height: auto;
  margin:0.31rem 0 0.69rem;
}
.bottom_line .icon_img{
  width: 100%;
  height: auto;
  text-align: center;
  margin-bottom: 0.12rem;
}
.bottom_line .icon_img img{
  width:0.96rem;
  height:0.36rem;
}
.bottom_line .text{
  height: 0.22rem;
  line-height: 0.22rem;
  text-align: center;
  color:rgb( 193, 193, 193);
  font-size: 0.22rem;
}
.infinite-loading-container{
  width:100%;
  -webkit-column-span: all; /* Chrome, Safari, Opera */
  column-span: all;
}
</style>
