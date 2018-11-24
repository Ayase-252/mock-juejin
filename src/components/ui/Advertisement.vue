<template>
  <div class="advertisement-wrapper">
    <a :href="advUrl">
      <img :src="imgSrc" alt="">
    </a>
    <p class="advertisement-label">广告</p>
  </div>
</template>

<script>
export default {
  props: ['imgSrc', 'advUrl']
}
</script>

<style lang="less">
.advertisement-wrapper {
  position: relative;
  cursor: pointer;
}

.advertisement-label {
  position: absolute;
  right: 20px;
  bottom: 20px;
  padding: 5px 10px;
  margin: 0;

  border: 1px solid black;
  border-radius: 2px;
}
</style>

