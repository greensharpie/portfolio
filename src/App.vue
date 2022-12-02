<template>
  <div id="app">
    <header class='bg-gray-800 text-stone-50 h-38 max-h-full absolute top-0 right-0'>
      <NavBar />
    </header>
      <main>
        <RouterView></RouterView>
        <AboutMe />
        <ExperienceSec />
        <ContactSec />
    </main>
      <footer class='bg-gray-800 text-stone-50'>
        <FooterBar />
      </footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue';
import AboutMe from './components/AboutMe.vue';
import ExperienceSec from './components/ExperienceSec.vue';
import ContactSec from './components/ContactSec.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar,
    AboutMe,
    ExperienceSec,
    ContactSec
  }
}
</script>

