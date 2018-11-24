<template>
  <div class="post-list-header">
    <ul class="post-colnum-list">
      <li class="post-list-header-item"><a href="#">热门</a></li>
      <li class="post-list-header-item"><a href="#">最新</a></li>
      <li class="post-list-header-item"><a href="#">评论</a></li>
    </ul>
    <ul class="post-hot-list">
      <li class="post-list-header-item"><a href="">本周最热</a></li>
      <li class="post-list-header-item"><a href="">本月最热</a></li>
      <li class="post-list-header-item"><a href="">历史最热</a></li>
    </ul>
  </div>
</template>

<style lang="less">
@import (reference) '../../../style/common.less';

.post-list-header {
  padding: 1.3rem 1rem;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.16rem;
  ul {
    display: flex;
  }
  a {
    text-decoration: none;
    color: #909090;
    &:hover {
      color: @active-color;
    }
  }
}

.post-colnum-list{
  display: flex;

  .post-list-header-item:not(:last-child) {
    border-right: 1px solid hsla(0,0%,59%,.2);
  }
}

.post-hot-list {
  display: flex;

  .post-list-header-item:not(:last-child) {
    display: block;
    position: relative;
    &::after {
      content: "";
      width: 2px;
      height: 2px;
  
      background: #909090;
      border-radius: 50%;
  
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}

.post-list-header-item {
  padding: 0 1.2rem;
}
</style>
