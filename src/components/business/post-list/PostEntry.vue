<template>
  <article class="article-wrapper">
    <bread-crumb class="meta-list">
      <bread-crumb-item>{{articleObj.category}}</bread-crumb-item>
      <bread-crumb-item><a href="#">{{articleObj.author}}</a></bread-crumb-item>
      <bread-crumb-item>{{articleObj.publishTime | formatDate}}</bread-crumb-item>
      <bread-crumb seperator="/">
        <bread-crumb-item v-for="tag in articleObj.tags">
          <article :href="tag.link">{{tag.name}}</article>
        </bread-crumb-item>
      </bread-crumb>
    </bread-crumb>
    <h2 class="article-title"><router-link :to="{ name:'posts', params: {id: articleObj.id} }">{{articleObj.title}}</router-link></h2>
    <div class="article-operation">
      <div class="button-list">
        <button-with-icon icon-name="thumbs-up" @click.once="likePost">{{articleObj.likes}}</button-with-icon>
        <button-with-icon icon-name="comment-alt">{{articleObj.comments}}</button-with-icon>
      </div>

      <div class="button-list hidden-when-inactive">
        <button-with-icon icon-name="share-square"></button-with-icon>
        <button-with-icon icon-name="star"></button-with-icon>
      </div>
    </div>
    <img class="article-thumb" src="https://via.placeholder.com/60x60" alt="">
  </article>
</template>

<script>
import BreadCrumb from '../../ui/BreadCrumb.vue'
import BreadCrumbItem from '../../ui/BreadCrumbItem.vue'
import ButtonWithIcon from '../../ui/ButtonWithIcon.vue'

export default {
  props: {
    articleObj: Object
  },
  components: {
    BreadCrumb,
    BreadCrumbItem,
    ButtonWithIcon
  },
  methods: {
    likePost (active) {
      this.articleObj.likes++
      active()
    }
  },
  filters: {
    formatDate (val) {
      const date = new Date(val)
      const now = new Date()

      let diff = now - date
      diff /= 1000  // Convert to second
      const formatter = (diff, unit) => {
        const convertFactor = {
          '秒': 1,
          '分': 60,
          '小时': 60 * 60,
          '天': 60 * 60 * 24
        }
        return `${Math.floor(diff / convertFactor[unit])}${unit}前`
      }
      if (diff < 60) {
        return formatter(diff, '秒')
      } else if (diff < 60 * 60) {
        return formatter(diff, '分')
      } else if (diff < 60 * 60 * 24) {
        return formatter(diff, '小时')
      } else {
        return formatter(diff, '天')
      }
    }
  }
}
</script>


<style lang="less">
@import (reference) '../../../style/common.less';
@link-color: #909090;

.article-wrapper {
  padding: 1.5rem 2rem;
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.01);

    .hidden-when-inactive {
      display: flex;
    }
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgba(178, 186, 194, 0.15);
  }
}

.article-thumb {
  width: 5rem;
  height: 5rem;
  border-radius: 2px;

  position: absolute;
  right: 4%;
  top: 50%;
  transform: translateY(-50%);
}

.article-title {
  font-size: 1.4rem;
  a {
    text-decoration: none;
    color: #333;
    &:hover {
      text-decoration: underline;
    }
    &:visited {
      color: #909090;
    }
  }
}

.meta-list {
  font-size: 1rem;
  color: @link-color;
  a {
    color: @link-color;
    text-decoration: none;
    &:hover {
      color: @active-color;
    }
  }
}

.button-list {
  display: flex;
}

.hidden-when-inactive {
  display: none;

  margin-left: 30px;
}

.article-operation {
  display: flex;
}
</style>

