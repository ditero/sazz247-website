<template>
  <section class="elementor-section">
    <div class="container">
      <div class="elementor-content">
        <div class="contact-info">
          <a href="tel:0212072836" class="contact-item">
            <i class="fas fa-phone"></i> 0212072836
          </a>
          <a href="mailto:sazzlimited@gmail.com" class="contact-item">
            <i class="fas fa-envelope"></i> sazzlimited@gmail.com
          </a>
        </div>
        <div class="social-links">
          <a href="#" class="social-icon">
            <i class="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="#" class="social-icon">
            <i class="fab fa-twitter"></i> Twitter
          </a>
          <a href="#" class="social-icon">
            <i class="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.elementor-section {
  background-color: #1f1f1f; /* Black background */
  color: #ffffff;
  text-align: center;
  padding: 10px 0;
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
  font-size: 14px;
}

.contact-item:hover,
.social-icon:hover {
  color: #e0b600; /* Hover color */
}
</style>
