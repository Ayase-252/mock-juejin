<template>
  <div class="bread-crumb-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    seperator: {
      type: String,
      default: '·'
    }
  },
  provide () {
    return {
      seperator: this.seperator
    }
  }
}
</script>

<style lang="less">
.bread-crumb-wrapper {
  display: flex;
}
</style>

