<template>
  <div class="button">
    <button>
      <slot></slot>
    </button>
    <v-icon name="caret-right"></v-icon>
  </div>
</template>

<style lang="less">
@import (reference) "~style/common";
.button {
  cursor: pointer;

  height: 20px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 2px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: @active-color;
  color: #ffffff;

  font-size: 12px;
  button {
    cursor: pointer;
    color: #ffffff;
    background: transparent;
    border: none;
  }
}
</style>

