<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { f7Page } from 'framework7-vue';
import { f7Card } from "framework7-vue"
import FormCard from '@/components/Form-Card.vue';

</script>
<template>
    <f7-page name="about">
        <div class="about-us-page">
            <section class="about-hero">
                <div class="hero-content">
                    <h1>About Us</h1>
                    <p>
                        Welcome to our platform! We are passionate about empowering creators with the tools they need to build stunning, responsive, and feature-rich applications. Our mission is to make your journey seamless and enjoyable.
                    </p>
                </div>
            </section>
            
      <section class="values-section">
        <h2>Our Values</h2>
        <div class="values-cards">
            <f7-card raised class="value-card">
                <img src="../assets/heart.svg" height="50px"/>
            <h3>Passion</h3>
            <p>We are driven by a passion for innovation and excellence.</p>
        </f7-card>
        <f7-card raised class="value-card">
          <img src="../assets/people-group-solid.svg" height="50px"/>
            <h3>Community</h3>
            <p>We believe in building a strong and supportive community.</p>
        </f7-card>
        <f7-card raised class="value-card">
          <img src="../assets/earth.svg" height="50px"/>
          <h3>Sustainability</h3>
            <p>Our work is grounded in sustainable and ethical practices.</p>
        </f7-card>
    </div>
</section>
</div>
<Form-Card/>
</f7-page>
</template>
<style scoped>
.about-hero {
  /* background-color: #eaeefa;
  color: black; */
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
  font-size: 2.5rem;
  margin-bottom: 30px;
  /* color: #007aff; */
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
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: white; */
  text-align: center;
}

.value-card .icon {
  /* color: #007aff; */
  margin-bottom: 10px;
}
.card-title{
  font-size: 3vw;
}
</style>