<template>
<div class="dropdown-button">
  <button @click="config.onMainBtnClick">{{ config.mainBtnText }}</button>
  <div class="dropdown-button-icon" @click.stop="openMenu">
    <v-icon name="caret-down"></v-icon>
  </div>
  <ul class="dropdown-menu" :class="{ 'dropdown-hidden':isMenuHidden }">
    <li class="dropdown-menu-item" v-for="menuItem in config.menuItems" 
      :key="menuItem.text" @click="menuItem.onClick">{{ menuItem.text }}</li>
  </ul>
</div>
</template>

<script>
import 'vue-awesome/icons/caret-down'

export default {
  data () {
    return {
      isMenuHidden: true,
    }
  },
  props: ['config'],
  methods: {
    openMenu () {
      this.isMenuHidden = false
      const closeListener = (e) => {
        this.isMenuHidden = true
        document.removeEventListener('click', closeListener)
        e.stopPropagation()
      }
      document.addEventListener('click', closeListener)
    }
  }
}
</script>

<style lang="less">
@import (reference) '../../style/common.less';

.hover-effect-mixin () {
  transition: background-color .3s;
    &:hover {
      background: #0876E4;
    }
}

.dropdown-button {
  position: relative;
  display: flex;
  background: @active-color;
  height: 2.667rem;
  border-radius: 3px;

  button {
    color: #FFF;
    display: block;
    background: transparent;
    border: none;
    border-right: 1px solid hsla(0, 0%, 100%, .1);
    padding: 0 .9rem;
    font-size: 1.167rem;
    cursor: pointer;
    .hover-effect-mixin();
  }
  .dropdown-button-icon {
    color: #FFF;
    width: 1.25rem;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .hover-effect-mixin();
  }
}

.dropdown-menu {
  position: absolute;
  top: 2.667rem;
  left: 0;
  right: 0;

  padding: .417rem 0;

  background: #FFF;
  border: 1px solid #ebebeb;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  color: #3676C5;

  font-size: 1.167rem;
  
  display: flex;
  flex-flow: column;
  align-items: center;
}

.dropdown-menu-item {
  line-height: 1.9;
  &:hover {
    background: #F9F9F9;
  }
}

.dropdown-hidden {
  display: none;
}
</style>
