<template>
<div class="taglist-wrapper">
  <nav class="taglist-main">
    <ul class="taglist-list">
      <li class="taglist-item taglist-focused"><a href="#">我关注的</a></li>
      <li class="taglist-item" v-for="tag in tags" :key="tag.link"><a :href="tag.link">{{ tag.name }}</a></li>
    </ul>
    <a class="taglist-item taglist-phone-hidden" href="">标签管理</a>
  </nav>
</div>
</template>

<script>
export default {
  props: ['tags']
}
</script>


<style lang="less">
@import (reference) '../../../style/common.less';

.taglist-wrapper {
  width: 100%;
  height: 3.833rem;

  background: #ffffff;
  overflow: auto;
}

.taglist-main {
  max-width: 980px;
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;

    li:first-child {
      padding-left: 0;
    }
  }

  a {
    padding-right: 0;
    text-decoration: none;
    white-space: nowrap;
    color: #333;
    &:hover {
      color:@active-color;
    }
  }
}

.taglist-focused {
  a {
    color: @active-color;
  }
}

.taglist-list {
  display: block;
}

.taglist-item {
  padding: 0 1.5rem;
  font-size: 1.16rem;
  
  line-height: 3.833rem;
}

@media screen and (max-width: 700px) {
  .taglist-phone-hidden {
    display: none;
  }
}
</style>
