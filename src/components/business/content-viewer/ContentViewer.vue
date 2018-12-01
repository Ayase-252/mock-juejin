<template>
  <div
    ref="contentViewerWrapper"
    class="content-viewer-wrapper"
  >
    <h1>{{title}}</h1>
    <div
      v-html="content"
      class="content-viewer-content"
    >
    </div>
  </div>
</template>

<script>
import debounce from 'lodash.debounce'

export default {
  props: ['content', 'title'],
  data () {
    return {
      offsets: [],
      targets: [],
      activeTargetIdx: 0,
      onScrollHandler: null,
    }
  },
  methods: {
    parseHeadingPosition () {
      this.offsets = []
      this.targets = []
      const headings = document.querySelectorAll('h2, h3, h4')
      headings.forEach(elem => {
        elem.setAttribute('id', elem.innerHTML)
        this.offsets.push(elem.offsetTop)
        this.targets.push(elem.innerHTML)
      })
    },
    notifyActiveHeading () {
      this.$emit('active-heading-change', this.targets[this.activeTargetIdx])
    }
  },
  watch: {
    activeTargetIdx (oldVal, newVal) {
      if (oldVal !== newVal) {
        this.notifyActiveHeading()
      }
    }
  },
  mounted () {
    this.parseHeadingPosition()
    const onScroll = () => {
      const scrollY = window.scrollY
      const offsets = this.offsets
      const numHeadings = offsets.length
      let activeTargetIdx = this.activeTargetIdx
      if (activeTargetIdx + 1 < numHeadings && offsets[activeTargetIdx + 1] < scrollY) {
        while (activeTargetIdx + 1 < numHeadings && offsets[activeTargetIdx + 1] < scrollY) {
          activeTargetIdx++
        }
      }
      if (activeTargetIdx > 0 && offsets[activeTargetIdx] > scrollY) {
        while (activeTargetIdx > 0 && offsets[activeTargetIdx] > scrollY) {
          activeTargetIdx--
        }
      }
      this.activeTargetIdx = activeTargetIdx
    }
    this.onScrollHandler = debounce(onScroll, 50, { maxWait: 70 })
    window.addEventListener('scroll', this.onScrollHandler, true)
  },

  updated () {
    // Reparse headings for updated document
    this.parseHeadingPosition()
    this.onScrollHandler()
    this.notifyActiveHeading()
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.onScrollHandler)
  }
}
</script>

<style lang="less">
.content-viewer-wrapper {
  word-break: break-word;
  font-size: 15px;
  font-weight: 400;
  padding: 10px 20px;
  background: #ffffff;

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: #333;
    line-height: 1.5;
    margin-bottom: 10px;
    padding-bottom: 5px;
  }

  h1 {
    margin: 0.67em 0;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.5;
  }

  h2 {
    padding-bottom: 12px;
    font-size: 24px;
    border-bottom: 1px solid #ececec;
  }

  h3 {
    font-size: 16px;
  }

  p {
    margin: 22px 0;
  }

  blockquote {
    color: #666;
    margin: 22px 0;
    padding: 1px 23px;
    background: #f8f8f8;
    border-left: 4px solid #cbcbcb;
    p {
      margin: 10px 0;
    }
  }

  strong {
    font-weight: 700;
  }

  a {
    border-bottom: 1px solid #d1e9ff;

    color: #0269c8;
    text-decoration: none;
  }

  code,
  pre {
    font-family: Menlo, Monaco, Consolas, Courier New, monospace;
  }
  code {
    background-color: #fff5f5;
    color: #ff502c;
    font-size: 0.87em;
    padding: 0.065em 0.4em;
  }
}
</style>

