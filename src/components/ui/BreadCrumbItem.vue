<template>
  <div class="bread-crumb-item">
    <slot></slot>
    <span class="bread-crumb-item-seperator">{{ seperator }}</span>
  </div>
</template>

<script>
export default {
  inject: ['seperator']
}
</script>

<style lang="less">
.bread-crumb-item-seperator {
  margin: 0 5px;
}

.bread-crumb-item:last-child {
  .bread-crumb-item-seperator {
    display: none;
  }
}
</style>
