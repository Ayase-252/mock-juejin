<template>
  <li class="block-item bookentry-wrapper">
    <div class="book-thumbnail" src="https://via.placeholder.com/280*230"></div>
    <div class="book-meta">
      <div class="book-title">{{bookTitle}}</div>
      <div class="book-info">
        <div class="book-bought-people">{{boughtPeople}}人已购买</div>
        <button-with-right-icon class="book-read" icon-name="caret-right">试读</button-with-right-icon>
      </div>
    </div>
  </li>
</template>

<script>
import ButtonWithRightIcon from 'ui/ButtonWithRightIcon'

export default {
  props: {
    bookTitle: String,
    boughtPeople: Number
  },
  components: {
    ButtonWithRightIcon
  }
}
</script>


<style lang="less">
@import (reference) "~style/block-ui";

.bookentry-wrapper {
  padding: 15px;
  display: flex;
}

.book-thumbnail {
  width: 52px;
  height: 72px;
  flex: 0 0 auto;

  background-image: url(https://via.placeholder.com/280x230);
  background-size: cover;
  background-position: 50% 50%;
}

.book-meta {
  margin-left: 10px;
  flex: 1 1 auto;
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}

.book-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.book-title {
  max-height: 52px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
}

.book-bought-people {
  font-size: 12px;
  color: #878c90;
}

</style>
