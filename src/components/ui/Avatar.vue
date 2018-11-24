<template>
  <div class="avatar" :style="styleObject">

  </div>
</template>

<script>
export default {
  props: {
    avatarUrl: {
      type: String,
      default: 'https://via.placeholder.com/200'
    }
  },
  computed: {
    styleObject() {
      return {
        backgroundImage: `url(${this.avatarUrl})`
      }
    }
  }
}
</script>


<style lang="less">
.avatar {
  width: 2.5rem;
  height: 2.5rem;
  background-size: cover;
  border-radius: 50%;
}
</style>
