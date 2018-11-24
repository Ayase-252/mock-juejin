<template>
  <a class="link-with-icon" :href="to">
    <v-icon style="margin-right: 10px;" :name="iconName"></v-icon>
    <span><slot></slot></span>
  </a>
</template>

<script>
export default {
  props: {
    to: String,
    iconName: String
  }
}
</script>


<style lang="less">
@import (reference) '../../style/common.less';

.link-with-icon {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: @active-color;
}


</style>
