<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Navbar from './components/Navbar.vue';
import Hero3D from './components/Hero3D.vue';
import Features from './components/Features.vue';
import Products from './components/Products.vue';
import Gallery from './components/Gallery.vue';
import Testimonials from './components/Testimonials.vue';
import FAQ from './components/FAQ.vue';
import LocationSection from './components/LocationSection.vue';
import Footer from './components/Footer.vue';
import NewsletterModal from './components/NewsletterModal.vue';
import FloatingHelpButton from './components/FloatingHelpButton.vue';
import Wait from './components/Wait.vue';


const maintenanceConfig = {

  startTime: new Date('2025-12-18T22:00:00'),
  endTime: new Date('2025-12-18T22:23:00'),
  title: 'Kami Sedang Berbenah',
  message: 'Simka Buah sedang melakukan peningkatan layanan untuk pengalaman belanja yang lebih baik. Kami akan segera kembali dengan kesegaran baru!',
};

const isMaintenance = ref(false);

const checkMaintenanceStatus = () => {
  const now = new Date();
  if (now >= maintenanceConfig.startTime && now <= maintenanceConfig.endTime) {
    isMaintenance.value = true;
  } else {
    isMaintenance.value = false;
  }
};

onMounted(() => {

  checkMaintenanceStatus();

  setInterval(checkMaintenanceStatus, 1000);


  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);
});
</script>

<template>
  <Wait 
    v-if="isMaintenance" 
    :start-time="maintenanceConfig.startTime"
    :end-time="maintenanceConfig.endTime"
    :title="maintenanceConfig.title"
    :message="maintenanceConfig.message"
  />
  
  <main v-else class="font-sans antialiased text-moss bg-cream selection:bg-sky selection:text-moss">

    <Navbar />


    <Hero3D />


    <Features />


    <Products />


    <Gallery />


    <Testimonials />


    <FAQ />


    <LocationSection />


    <Footer />


    <NewsletterModal />


    <FloatingHelpButton />
  </main>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
