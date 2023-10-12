<template>
    <section class="hero-section">
        <div class="overlay">
          <div class="company-name">
                <h1 class="hero-title">SAZZ24-7</h1>
              </div>
            <div class="content">
                <p class="hero-description">Experience Excellence in Security Services</p>
                <form class="get-in-touch-form">
                    <input type="text" placeholder="Your Name" class="input-field">
                    <input type="email" placeholder="Your Email" class="input-field">
                    <input type="tel" placeholder="Your Phone" class="input-field">
                    <button type="submit" class="submit-button">Get in Touch</button>
                </form>
            </div>
        </div>
    </section>
</template>
  
<style scoped>
/* Existing styles for the hero section and overlay */
.hero-section {
    position: relative;
    background-image: url('~@/assets/sazz-bgg.jpeg');
    background-size: cover;
    background-position: center;
    height: 70vh;
}
.company-name {
  z-index: 9999;
}
.hero-title {
    font-size: 3rem;
    margin-bottom: 2rem;
    color: #ffd700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    margin-top: 90px;
}

.hero-description {
    font-size: 1.5rem;
    color: #ffd700;
    /* Solid gold color */
}

.content {
    text-align: center;
}

.get-in-touch-form {
    max-width: 400px;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
    background-color: rgba(0, 0, 0, 0.446);
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.input-field {
    padding: 1rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
}

.submit-button {
    padding: 1rem;
    background-color: #ffd700;
    color: #1f1f1f;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.submit-button:hover {
    background-color: #e0b600;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* Semi-transparent black overlay */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
  

<!-- <template>
    <section class="hero-section">
      <div class="overlay">
        <div class="content">
          <h1 class="hero-title">Your Trusted Security Partner</h1>
          <p class="hero-description">Experience Excellence in Security Services</p>
          <form class="get-in-touch-form">
            <input type="text" placeholder="Your Name">
            <input type="email" placeholder="Your Email">
            <input type="tel" placeholder="Your Phone">
            <button type="submit">Get in Touch</button>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  /* Existing styles for the hero section and overlay */
  
  .content {
    text-align: center;
  }
  
  .get-in-touch-form {
    max-width: 400px;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 8px;
  }
  
  .get-in-touch-form input,
  .get-in-touch-form button {
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
  }
  
  .get-in-touch-form input {
    background-color: #fff;
  }
  
  .get-in-touch-form button {
    background-color: #ffd700;
    color: #1f1f1f;
    font-weight: bold;
    cursor: pointer;
  }

  .hero-section {
    background-image: url('~@/assets/sazz-bgg.jpeg'); /* Replace with your background image */
  background-size: cover;
  background-position: center;
  padding: 180px 0;
}
  </style> -->
