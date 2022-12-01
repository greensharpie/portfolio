<template>
  <nav>
    <RouterLink to = '/'>Home</RouterLink>
    <a class = 'btn-about' @click="scrollToAnchorPoint('testBlock')">01. About</a>
    <RouterLink to = '/projects'>Projects</RouterLink>
  </nav>
  
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    scrollToAnchorPoint(refName) {
      const el = this.$ref[refName]
      el.scrollIntoView({behavior: 'smooth'})
    }
  }
}
</script>