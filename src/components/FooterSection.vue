<template>
  <v-footer class="footer">
    <v-container>
      <v-row>
        <v-col cols="12" md="4" class="justify-center">
          <v-img src="@/assets/sazz.png" alt="SAZZ24-7" max-width="150"></v-img>
          <p class="footer-text">Security for All Zones</p>
        </v-col>
        <v-col cols="6" md="4">
          <h3 class="footer-heading">Quick Links</h3>
          <ul class="footer-links">
            <li><router-link to="/" class="nav-link">Home</router-link></li>
            <li><router-link to="/services" class="nav-link">Services</router-link></li>
            <li><router-link to="/about" class="nav-link">About</router-link></li>
            <li><router-link to="/contact" class="nav-link">Contact</router-link></li>
          </ul>
        </v-col>
        <v-col cols="6" md="4">
          <h3 class="footer-heading">Contact Us</h3>
          <p class="footer-text">Phone: 0212072836</p>
          <p class="footer-text">Email: sazzlimited@gmail.com</p>
          <div class="social-icons">
            <!-- <a href="#" class="social-icon">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-instagram"></i>
            </a> -->
            <v-icon >mdi-facebook</v-icon>
            <v-icon >mdi-twitter</v-icon>
            <v-icon >mdi-instagram</v-icon>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style scoped>
.footer {
  background-color: #000000; /* Black background */
  color: #ffffff;
}

.footer-heading {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffd700; /* Solid gold color */
}

.footer-text {
  font-size: 1rem;
  color: #ffffff;
}

.footer-links {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ffd700;
}

.social-icons {
  margin-top: 1rem;
}

.social-links {
  display: flex;
  align-items: center;
  gap: 20px;
}

.social-icon:hover {
  color: #e0b600; /* Hover color */
}
</style>
