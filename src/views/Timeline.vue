<template>
<div>
  <tag-list :tags="tags"></tag-list>
  <main class="content-wrapper">
    <div class="content-left-column">
      <control-panel class="column-item"></control-panel>
      <post-list class="column-item"></post-list>
    </div>
    <div class="content-right-column">
      <advertisement imgSrc="https://via.placeholder.com/240X200" advUrl="#"></advertisement>
      <interested-book-list></interested-book-list>
    </div>
  </main>
</div>
</template>

<script>
import TagList from 'business/tag-list/TagList.vue'
import Advertisement from 'ui/Advertisement.vue'
import ControlPanel from 'business/control-panel/ControlPanel.vue'
import PostList from 'business/post-list/PostList.vue'
import InterestedBookList from 'business/interested-book-list/InterestedBookList'

export default {
  data () {
    return {
      tags: [{
        name: "前端",
        link: '#'
      }, {
        name: "iOS",
        link: '#'
      }]
    }
  },
  components: {
    TagList,
    Advertisement,
    ControlPanel,
    PostList,
    InterestedBookList
  }
}
</script>


<style lang="less">
.content-wrapper {
  margin: 0 auto;
  margin-top: 30px;
  max-width: 980px;
  
  display: flex;
  justify-content: space-between;
}

.content-left-column {
  flex: 1 1 auto;

  & > div:nth-child(n + 2) {
    margin-top: 20px;
  }
}

.content-right-column {
  margin-left: 30px;
  width: 240px;

  & > div:nth-child(n + 2) {
    margin-top: 20px;
  }
}

@media screen and (max-width: 700px) {
  .content-right-column {
    display: none;
  }
}
</style>
