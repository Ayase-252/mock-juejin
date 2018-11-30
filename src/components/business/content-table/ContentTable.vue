<template>
  <ul
    class="content-table"
    :class="{'content-table-wrapper': level === 1}"
  >
    <li
      :class="[levelClass]"
      v-for="heading in headings"
      :key="heading.title"
    > 
    <div class="content-item-wrapper" :class="{active: heading.isActive}">
      <div class="table-marker"></div>
      <a
        :class="[levelClass]"
        :href="heading.link"
      >{{heading.title}}</a>
    </div>
      <content-table
        v-if="heading.subHeadings && heading.subHeadings.length"
        :headings="heading.subHeadings"
        :level="level + 1"
      ></content-table>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'content-table',
  props: {
    headings: Array,
    level: {
      default: 1,
      type: Number
    }
  },
  computed: {
    levelClass () {
      return `lvl-${this.level}-item`
    }
  }
}
</script>

<style lang="less">
@import (reference) "~style/common";

.content-table {
  list-style-type: none;
  display: flex;
  flex-flow: column;
  a {
    display: block;
    text-decoration: none;
    color: #333;
    padding: 4px 0 4px 12px;
  }
}

.content-table-wrapper {
  margin-left: 3px;
  padding-left: 13px;
  border-left: 2px solid rgba(235, 235, 235, 0.5);
}

.content-item-wrapper {
  display: flex;
  align-items: center;
  
  &.active {
    a {
      color: @active-color;
    }
  }

  &.active, &:hover {
    background: #ebedef;
  }
}

.content-item {
  margin-top: 10px;
}

li {
  &.lvl-1-item {
    font-size: 1.167rem;
    line-height: 1.3;
    font-weight: 600;
    color: #000;

    .table-marker {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: #333;
    }
  }
  &.lvl-2-item {
    font-weight: 400;
    color: #300;
    .content-item-wrapper {
      padding-left: 30px;
    }

    .table-marker {
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background-color: #333;
    }
  }
  &.lvl-3-item {
    .content-item-wrapper {
      padding-left: 50px;
    }
  }
}
</style>
