<template>
  <div class="header-nav-menu-wrapper">
    <div class="phone-show-menu" @click.stop="openMenu">
      <span>首页</span>
      <font-awesome-icon icon="caret-down"></font-awesome-icon> 
    </div>
    <ul class="navmenu-wrapper" :class="{'phone-show': isShowInPhone}">
      <li class="nav-item list-item header-homepage"><a href="#">首页</a></li>
      <li class="nav-item list-item"><a href="#">动态</a></li>
      <li class="nav-item list-item"><a href="#">小册</a></li>
      <li class="nav-item list-item"><a href="#">开源库</a></li>
      <li class="nav-item list-item"><a href="#">活动</a></li>
    </ul>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

library.add(faCaretDown)

export default {
  data () {
    return {
      isShowInPhone: false
    }
  },
  components: {
    FontAwesomeIcon
  },
  methods: {
    openMenu () {
      this.isShowInPhone = true
      const closeListener = (e) => {
        this.isShowInPhone = false
        document.removeEventListener('click', closeListener)
        e.stopPropagation()
      } 
      document.addEventListener('click', closeListener)
    }
  }
}
</script>



<style lang="less">
@import '../../../style/common.less';
.header-nav-menu-wrapper {
  display: block;
}

.navmenu-wrapper {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
}

.nav-item {
  padding: 0 1.2em;
  font-size: 1.33rem;
  a {
    text-decoration: none;
  }
}

.list-item {
  a {
    color: #333;
    &:hover {
      color: @active-color;
    }
  }
}

.phone-show-menu {
  display: none;
}

@media screen and (max-width: 980px) {
  .header-nav-menu-wrapper {
    position: absolute;
    left: 0;
    display: flex;
    flex-flow: column;
  }

  .navmenu-wrapper {
    display: none;
  }

  .phone-show-menu {
    height: 5rem;
    padding: 0 2rem;
    display: flex;
    color: @active-color;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    span {
      margin-right: .5rem;
    }
  }

  .phone-show {
    position: absolute;
    top: 60px;
    left: 0px;
    
    display: flex;
    flex-flow: column;
    
    border: 1px solid hsla(217, 5%, 71%, .45);
    border-radius: 4px;
    
    background: #FFFFFF;
    
  }
  .nav-item {
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header-homepage {
    color: @active-color;
  }
}
</style>
