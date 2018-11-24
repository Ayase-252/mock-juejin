<template>
  <form class="search-box-wrapper" :class="{'search-active': isFocus}">
    <input type="text" @focus="onFocus" @blur="onBlur" v-model="text" :placeholder="placeholder" @change="$emit('change', $event.target.value)">
    <font-awesome-icon class="search-box-icon" icon="search" @click="$emit('click', $event)"></font-awesome-icon>
  </form>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

export default {
  data () {
    return {
      isFocus: false,
      text: ''
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    }
  },
  components: {
    FontAwesomeIcon
  },
  methods: {
    onFocus () {
      this.isFocus = true
    },
    onBlur () {
      this.isFocus = false
    }
  },
  model: {
    prop: 'text',
    event: 'change'
  }
}
</script>

<style lang="less">
.search-box-wrapper {
  border: 1px solid #777;
  border-radius: 2px;
  background: rgba(227, 231, 236, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    border: none;
    width: 8rem;
    padding: 0.6rem 1rem;
    font-size: 1.1rem;
    background: transparent;
    outline: none;
  }
  .search-box-icon {
    padding: 0 0.5rem;
    cursor: pointer;
  }

  &.search-active {
    background: #fff;
    border-color: #007fff;
    .search-box-icon {
      color: #007fff;
    }
  }
}
</style>

