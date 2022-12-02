<template>
  <nav>
    <div class = 'flex space-x-4 '>
      <div class = 'home-section'>
        <button name="btn-home">
          <a class = 'btn-home' @click="scrollToAnchorPoint('home-section')">01. Home</a>
        </button>
      </div>
        <div class="about-section">
          <button name="btn-about">
            <a class = 'btn-about' @click="scrollToAnchorPoint('about-section')">02. About</a>
          </button>
        </div>
        <div class="experience-section">
          <button name="btn-experience">
            <a class = 'btn-experience' @click="scrollToAnchorPoint('experience-section')">03. Experience</a>
          </button>
        </div>
        <div class="contact-section">
          <button name="btn-contact">
            <a class = 'btn-contact' @click="scrollToAnchorPoint('contact-section')">04. Contact</a>
          </button>
        </div>
    </div>
  </nav>
  
</template>

<script>

export default {
  name: 'NavBar',
  components: {},
  props: ['home-section','about-section', 'experience-section', 'contact-section'],
  methods: {
    scrollToAnchorPoint(refName) {
      const el = this.$ref[refName]
      el.scrollIntoView({behavior: 'smooth'})
    }
  }
}
</script>