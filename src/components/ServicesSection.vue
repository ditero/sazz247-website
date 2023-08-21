<template>
  <section class="service-section">
    <div class="container">
      <h2 class="section-title">Our Services</h2>
      <div class="service-list">
        <div v-for="service in services" :key="service.id" class="service-item">
          <div class="service-icon">
            <!-- Use appropriate icon or image for the service -->
            <i class="fas fa-shield-alt"></i>
          </div>
          <h3 class="service-name">{{ service.name }}</h3>
          <p class="service-description">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          id: 1,
          name: "Guard Services",
          description: "Professional security guards for your safety.",
        },
        {
          id: 2,
          name: "Surveillance",
          description: "State-of-the-art surveillance systems for monitoring.",
        },
        {
          id: 3,
          name: "Access Control",
          description: "Control and monitor access to your premises.",
        },
        // Add more services here...
      ],
    };
  },
};
</script>

<style scoped>
/* Existing styles for the service section */
/* ... */

.service-section {
  background-color: #1f1f1f; /* Black background */
  color: #ffffff;
  text-align: center;
  padding: 80px 0;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #ffd700; /* Solid gold color */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8); /* Chrome black text shadow */
}

.service-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}

.service-item {
  max-width: 300px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
}

.service-icon {
  font-size: 36px;
  color: #ffd700; /* Solid gold color */
}

.service-name {
  font-size: 1.5rem;
  margin: 1rem 0;
}

.service-description {
  font-size: 1rem;
  color: #ffffff;
}
</style>
