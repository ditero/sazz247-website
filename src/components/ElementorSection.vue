<template>
  <section class="elementor-section">
    <div class="container">
      <div class="elementor-content">
        <div class="contact-info">
          <a href="tel:0212072836" class="contact-item">
            <v-icon left>mdi-phone</v-icon> 0212072836
          </a>
          <a href="mailto:sazzlimited@gmail.com" class="contact-item">
            <v-icon left>mdi-email</v-icon> sazzlimited@gmail.com
          </a>
        </div>
        <div class="social-links">
            <v-icon @click="openSocialLink('facebook')">mdi-facebook</v-icon>
            <v-icon @click="openSocialLink('twitter')">mdi-twitter</v-icon>
            <v-icon @click="openSocialLink('instagram')">mdi-instagram</v-icon>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    openSocialLink(platform) {
      const socialLinks = {
        facebook: 'https://www.facebook.com/your-page',
        twitter: 'https://twitter.com/your-profile',
        instagram: 'https://www.instagram.com/your-account',
      };

      window.open(socialLinks[platform], '_blank');
    },
  },
};
</script>

<style scoped>
.elementor-section {
  background-color: #1f1f1f; /* Black background */
  color: #ffffff;
  text-align: center;
  padding: 10px 0;
  position: fixed; /* Set position to fixed */
  /* top: 60px; Adjust as needed */
  left: 0;
  width: 100%;
  z-index: 1000;
}

.container {
  display: flex;
  justify-content: center;
}

.elementor-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info,
.social-links {
  display: flex;
  align-items: center;
  gap: 20px;
}

.contact-item,
.social-icon {
  color: #ffd700; /* Gold color */
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 5px;
}

.social-icon {
  /* Adjust the font size to make the icons smaller */
  font-size: 12px;
}

.contact-item:hover,
.social-icon:hover {
  color: #e0b600; /* Hover color */
}
</style>
