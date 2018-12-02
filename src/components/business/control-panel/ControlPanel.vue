<template>
  <div class="control-panel-wrapper">
    <img src="https://via.placeholder.com/50" alt="">
    <ul class="control-panel-menu">
      <li><link-with-icon to="#" icon-name="regular/paper-plane">发沸点</link-with-icon></li>
      <li><link-with-icon to="#" icon-name="regular/file-alt">写文章</link-with-icon></li>
      <li><link-with-icon to="#" icon-name="link">分享链接</link-with-icon></li>
    </ul>
    <div class="control-panel-end">
      <a href="">草稿</a>
    </div>
  </div>
</template>

<script>
import LinkWithIcon from '../../ui/LinkWithIcon.vue'
import 'vue-awesome/icons/regular/paper-plane'
import 'vue-awesome/icons/regular/file-alt'
import 'vue-awesome/icons/link'

export default {
  components: {
    LinkWithIcon
  }
}
</script>



<style lang="less">
@import (reference) '../../../style/common.less';

.control-panel-wrapper {
  height: 50px;
  width: 100%;

  background: #FFFFFF;
  
  display: flex;
  align-items: center;

  font-size: 1.16rem;
}

.control-panel-menu {
  display: flex;
  li {
    margin-left: 30px;
  }
}

ul {
  list-style-type: none;
}

.control-panel-end {
  padding-right: 20px;
  flex: 1 0 auto;
  display: flex;
  justify-content: flex-end;

  a {
    color: #333;
    text-decoration: none;
  }
}


</style>
