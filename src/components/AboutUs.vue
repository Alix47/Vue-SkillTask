<script setup>
import { f7Card, f7Icon, } from "framework7-vue"
</script>
<template>
    <div class="about-us-page">
      <!-- Hero Section -->
      <section class="about-hero">
        <div class="hero-content">
          <h1>About Us</h1>
          <p>
            Welcome to our platform! We are passionate about empowering creators with the tools they need to build stunning, responsive, and feature-rich applications. Our mission is to make your journey seamless and enjoyable.
          </p>
        </div>
      </section>
  
      <!-- Our Values Section -->
      <section class="values-section">
        <h2>Our Values</h2>
        <div class="values-cards">
          <f7-card class="value-card">
            <f7-icon f7="heart_fill" size="40px" class="icon"></f7-icon>
            <h3>Passion</h3>
            <p>We are driven by a passion for innovation and excellence.</p>
          </f7-card>
          <f7-card class="value-card">
            <f7-icon f7="group_fill" size="40px" class="icon"></f7-icon>
            <h3>Community</h3>
            <p>We believe in building a strong and supportive community.</p>
          </f7-card>
          <f7-card class="value-card">
            <f7-icon f7="leaf_fill" size="40px" class="icon"></f7-icon>
            <h3>Sustainability</h3>
            <p>Our work is grounded in sustainable and ethical practices.</p>
          </f7-card>
        </div>
      </section>
    </div>
  </template>
  
  
  <style scoped>
  .about-hero {
    background: linear-gradient(to bottom right, #4a90e2, #6fc3df);
    color: white;
    text-align: center;
    padding: 60px 20px;
  }
  
  .hero-content h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
  }
  
  .hero-content p {
    font-size: 1.2em;
    margin-top: 10px;
  }
  
  /* Values Section */
  .values-section {
    padding: 40px 20px;
    text-align: center;
  }
  
  .values-section h2 {
    margin-bottom: 30px;
    color: #007aff;
  }
  
  .values-cards {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .value-card {
    width: 300px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background: white;
    text-align: center;
  }
  
  .value-card .icon {
    color: #007aff;
    margin-bottom: 10px;
  }
  </style>
  