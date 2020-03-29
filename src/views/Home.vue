<template>
  <div class="home">
    <Header />
    <LowerHeader />
    <Benefits />
    <Main />
    <FooterImage />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/home/Header.vue'
import LowerHeader from '@/components/home/LowerHeader.vue'
import Benefits from '@/components/home/Benefits.vue'
import Main from '@/components/home/Main.vue'
import Footer from '@/components/home/Footer.vue'
import FooterImage from '@/components/home/FooterImage.vue'

export default {
  name: 'Home',
  components: {
    Header,
    LowerHeader,
    Benefits,
    Main,
    FooterImage,
    Footer
  }
}
</script>
