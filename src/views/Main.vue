<template>
<div>
  <header-component></header-component>
  <router-view></router-view>
</div>
</template>

<script>
import HeaderComponent from '../components/business/header/HeaderComponent.vue'
export default {
  components: {
    HeaderComponent
  }
}
</script>
