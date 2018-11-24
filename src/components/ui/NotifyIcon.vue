<template>
<div>
  <font-awesome-icon class="notify-icon" icon="bell"></font-awesome-icon>
</div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBell } from '@fortawesome/free-solid-svg-icons'

library.add(faBell)
export default {
  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="less">
@import "../../style/common.less";

.notify-icon {
  font-size: 2rem;
  color: #71777c;
  &:hover {
    color: @active-color;
  }
}
</style>

