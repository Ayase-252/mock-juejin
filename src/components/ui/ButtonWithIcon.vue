<template>
  <div class="button-with-icon-wrapper">
    <v-icon :name="iconName"></v-icon>
    <span v-if="$slots.default" class="button-illustration">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    iconName: String
  }
}
</script>


<style lang="less">
.button-with-icon-wrapper {
  height: 2rem;
  border: 1px solid #909090;
  padding: 0 .8rem;
  border-radius: 2px;

  font-weight: 900;
  font-size: 1.183rem;

  color: #909090;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(0, 0, 0, 0.01);
  }
}

.button-illustration {
  margin-left: 10px;
}

.button-with-icon-wrapper.active {
  color: #1dc400;
}
</style>
