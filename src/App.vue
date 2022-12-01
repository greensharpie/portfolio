<template>
  <div id="app">
    <header class='bg-gray-800 text-stone-50'>
      <NavBar />
    </header>
      <main>
        <RouterView></RouterView>
        <AboutMe />
    </main>
      <footer>
        <FooterBar />
      </footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue';
import AboutMe from './components/AboutMe.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar,
    AboutMe
  }
}
</script>

