<template>
  <v-app>
    <v-main>
      <ElementorSection />
      <HeaderSection /> <!-- Add this line -->
      <router-view></router-view>
      <HeroSection />
      <ServicesSection />
      <!-- <AboutSection />
      <ContactSection /> -->
      <FooterSection />
    </v-main>
  </v-app>
</template>

<script>
import HeaderSection from '@/components/HeaderSection.vue'; // Import the component
import ElementorSection from '@/components/ElementorSection.vue'
import HeroSection from '@/components/HeroSection.vue'
import ServicesSection from '@/components/ServicesSection.vue';
// import AboutSection from '@/components/AboutSection.vue';
// import ContactSection from '@/components/ContactSection.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
  name: 'App',
  components: {
    ElementorSection,
    HeaderSection, // Register the component
    HeroSection,
    ServicesSection,
    // AboutSection,
    // ContactSection,
    FooterSection
  },
  data: () => ({
    //
  }),
}
</script>
<style scoped>
  .v-main {
    --v-layout-bottom: 0px !important;
  }
</style>
