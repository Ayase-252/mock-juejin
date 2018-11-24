<template>
  <header class="header-wrapper">
    <div class="header-container">
      <a class="header-logo" href="/">
        <img src="https://via.placeholder.com/98x38" alt="logo">
      </a>
      <nav class="header-nav">
        <header-nav-menu></header-nav-menu>
        <div id="header-search-box" class="nav-item search">
          <search-box placeholder="搜索掘金"></search-box>
        </div>
        <dropdown id="header-dropdown" :config="dropDownConfig"></dropdown>
        <a class="nav-item" href="/notification"><notify-icon></notify-icon></a>
        <avatar></avatar>
      </nav>
    </div>
  </header>
</template>

<script>
import Avatar from '../../ui/Avatar.vue'
import SearchBox from '../../ui/SearchBox.vue'
import Dropdown from '../../ui/Dropdown.vue'
import NotifyIcon from '../../ui/NotifyIcon.vue'
import HeaderNavMenu from './HeaderNavMenu.vue'

export default {
  data () {
    return {
      dropDownConfig: {
        mainBtnText: '写文章',
        onMainBtnClick () {
          console.log('write')
        },
        menuItems: [{
          text: '发布沸点',
          onClick () {
            console.log('publish thoughts')
          }
        }, {
          text: '分享链接',
          onClick () {
            console.log('share link')
          }
        }]
      }
    }
  },
  components: {
    Avatar,
    SearchBox,
    Dropdown,
    NotifyIcon,
    HeaderNavMenu
  },
  methods: {
  }
}
</script>

<style lang="less">
@import '../../../style/common.less';

.header-wrapper {
  height: 60px;
  width: 100%;
  background: @component-bg-color;
  border-bottom: 1px solid #f1f1f1;
  li {
    list-style-type: none;
  }
}

.header-container {
  max-width: 960px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
}

.header-logo {
  margin-right: 2rem;
  @media screen and (max-width: 980px) {
    & {
      margin-right: 0;
    }
  }
}

.header-nav {
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex: 1 0 auto;
  align-items: center;

  font-size: 1.33rem;
}

.nav-item {
  padding: 0 1.2em;
  a {
    text-decoration: none;
  }
}

.nav-item.search {
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-end;
}

.list-item {
  a {
    color: #333;
    &:hover {
      color: @active-color;
    }
  }
}

.header-homepage {
  a {
    color: @active-color;
  }
}

@media screen and (max-width: 980px) {
  #header-search-box, #header-dropdown, #header-nav-menu {
    display: none;
  }
}

</style>
