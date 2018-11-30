<template>
  <div class="content-viewer-wrapper">
    <h1>{{title}}</h1>
    <div v-html="content" class="content-viewer-content">
    </div>
  </div>
</template>

<script>
export default {
  props: ['content', 'title']
}
</script>

<style lang="less">
.content-viewer-wrapper {
  word-break: break-word;
  font-size: 15px;
  font-weight: 400;
  padding: 10px 20px;
  background: #FFFFFF;

  h1, h2, h3, h4, h5 {
    color: #333;
    line-height: 1.5;
    margin-bottom: 10px;
    padding-bottom: 5px;
  }

  h1 {
    margin: .67em 0;
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
  
  code, pre {
    font-family: Menlo,Monaco,Consolas,Courier New,monospace;
  }
  code {
    background-color: #fff5f5;
    color: #ff502c;
    font-size: .87em;
    padding: .065em .4em;
  }
}
</style>

