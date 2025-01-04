<!-- eslint-disable vue/multi-word-component-names -->
<template>
      <section class="hero">
        <div class="hero-content">
          <h1>Build Beautiful Websites with Ease</h1>
          <p>Welcome to our platform. Empower your creativity and build responsive, feature-rich websites effortlessly.</p>
          <f7-button large fill class="cta-button" @click="$router.push('/about')">Get Started</f7-button>
        </div>
      </section>
  
      <section class="features">
        <h2>Why Choose Us?</h2>
        <div class="feature-cards">
          <f7-card raised class="feature-card">
            <f7-icon f7="paintbrush" size="40px" class="icon"></f7-icon>
            <h3>Modern Design</h3>
            <p>Create visually stunning websites with modern and responsive designs.</p>
          </f7-card>
          <f7-card raised class="feature-card">
            <f7-icon f7="bolt" size="40px" class="icon"></f7-icon>
            <h3>Fast Performance</h3>
            <p>Optimized for speed and smooth user experience.</p>
          </f7-card>
          <f7-card raised class="feature-card">
            <f7-icon f7="settings" size="40px" class="icon"></f7-icon>
            <h3>Customization</h3>
            <p>Personalize your designs with powerful tools and flexibility.</p>
          </f7-card>
        </div>
      </section>
  
      <section class="cta">
        <h2>Ready to Start?</h2>
        <p>Join thousands of creators building their dream websites.</p>
        <f7-button large fill @click="$router.push('/about')">Learn More</f7-button>
      </section>
  </template>
  
  <script setup>
  import { f7Button, f7Card, f7Icon } from 'framework7-vue';
  </script>
  
  <style scoped>
  /* Hero Section */
  .hero {
    /* background-color: #eaeefa;
    color: black; */
    text-align: center;
    padding: 60px 20px;
  }
  
  .hero-content {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .hero h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
  }
  
  .hero p {
    font-size: 1.2em;
    margin-bottom: 20px;
  }
  
  /* .cta-button {
    background-color: white;
    color: #007aff;
    font-weight: bold;
    border-radius: 25px;
  }
   */
  .features {
    padding: 40px 20px;
    text-align: center;
  }
  
  .features h2 {
    margin-bottom: 30px;
    font-size: 3rem;
    color: #007aff;
  }
  
  .feature-cards {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .feature-card {
    width: 300px;
    padding: 20px;
    border-radius: 10px;
    /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
    /* background: white; */
    text-align: center;
  }
  
  .feature-card h3 {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  
  .feature-card .icon {
    color: #007aff;
  }
  
  .cta {
    /* background: #f7f7f7; */
    text-align: center;
    padding: 40px 20px;
  }
  
  .cta h2 {
    margin-bottom: 10px;
  }
  
  .cta p {
    margin-bottom: 20px;
  }
  </style>
  