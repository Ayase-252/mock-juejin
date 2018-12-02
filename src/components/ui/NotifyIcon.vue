<template>
<div>
  <v-icon class="notify-icon" name="bell" :scale="1.4"></v-icon>
</div>
</template>

<script>
import 'vue-awesome/icons/bell'
export default {
}
</script>

<style lang="less">
@import "../../style/common.less";

.notify-icon {
  color: #71777c;
  &:hover {
    color: @active-color;
  }
}
</style>

