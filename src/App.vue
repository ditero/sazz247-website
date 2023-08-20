
<template>
  <div id="app">
    <ElementorSection />
    <HeaderSection /> <!-- Add this line -->
    <router-view></router-view>
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from '@/components/HeaderSection.vue'; // Import the component
import ElementorSection from '@/components/ElementorSection.vue'
import HeroSection from '@/components/HeroSection.vue'
import ServicesSection from '@/components/ServicesSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import ContactSection from '@/components/ContactSection.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
  name: 'App',
  components: {
    ElementorSection,
    HeaderSection, // Register the component
    HeroSection,
    ServicesSection,
    AboutSection,
    ContactSection,
    FooterSection
  }
};
</script>

<style>
/* Apply global styles here if needed */
</style>


<!-- <template>
  <router-view></router-view>
  <HelloWorld/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
-->

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style> 
