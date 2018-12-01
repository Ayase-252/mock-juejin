<template>
<div class="post-wrapper">
  <div class="post-left-col">
    <content-viewer :title="title" :content="content" @active-heading-change="onActiveHeadingChange"></content-viewer>
  </div>
  <div class="post-right-col">
    <content-table :headings="headings"></content-table>
  </div>
</div>
</template>

<script>
import ContentTable from 'business/content-table/ContentTable.vue'
import ContentViewer from 'business/content-viewer/ContentViewer.vue'

import parseHeadings from 'libs/heading-parser'
import { PostApi } from 'api'

export default {
  data () {
    return {
      headings: [],
      content: '',
      title: '',
      activeHeading: null,
      headingMap: {}
    }
  },
  components: {
    ContentTable,
    ContentViewer
  },

  methods: {
    onActiveHeadingChange(heading) {
      if(this.activeHeading) {
        this.activeHeading.isActive = false
      }
      this.headingMap[heading].isActive = true
      this.activeHeading = this.headingMap[heading]
    }
  },

  async created() {
    const dfs = (node) => {
      node.forEach(elem => {
        this.headingMap[elem.title] = elem
        dfs(elem.subHeadings)
      })
    }
    const post = await PostApi.getPost(this.$route.params.id)
    this.headings = parseHeadings(post.content)
    this.content = post.content
    this.title = post.title
    dfs(this.headings)
  }
}
</script>

<style lang="less">
.post-wrapper {
  display: flex;
  max-width: 980px;
  margin: 0 auto;
  margin-top: 30px;
  justify-content: space-between;
}

.post-left-col {
  flex: 1 1 auto;
  margin-right: 30px;
}

.post-right-col {
  width: 240px;
}
</style>
