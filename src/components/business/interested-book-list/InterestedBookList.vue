<template>
<div class="interested-book-list-wrapper">
  <div class="block-title">你可能感兴趣的小册</div>
  <ul>
    <book-entry v-for="book in books"
      :book-title="book.bookTitle" 
      :bought-people="book.boughtPeople"
      :key="book.bookTitle">
    </book-entry>
  </ul>
</div>
</template>

<script>
import BookEntry from './BookEntry'
import { BookApi } from 'api'

export default {
  data () {
    return {
      books: []
    }
  },
  components: {
    BookEntry
  },
  async created () {
    try {
      this.books = await BookApi.getInterestedBooks()
    } catch (err) {
      throw err
    }
  }
}
</script>

<style lang="less">
@import "~style/block-ui";
.interested-book-list-wrapper {
  background: #FFFFFF;
}
</style>
