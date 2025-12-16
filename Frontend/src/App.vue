<script setup lang="ts">
import { onMounted } from 'vue';
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

onMounted(() => {
  // Force scroll to top on refresh
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);
});
</script>

<template>
  <main class="font-sans antialiased text-slate-800 bg-cream selection:bg-lime selection:text-moss">

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
