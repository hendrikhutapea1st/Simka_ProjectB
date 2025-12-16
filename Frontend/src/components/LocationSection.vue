<script setup lang="ts">
import { MapPin, Navigation } from 'lucide-vue-next';
</script>

<template>
  <section id="location" class="py-24 bg-cream relative overflow-hidden">

    <div class="absolute top-0 right-0 w-64 h-64 bg-moss/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-orange/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col md:flex-row gap-12 items-center">
        

        <div class="w-full md:w-1/3 space-y-8">
          <div>
            <span class="text-sky font-bold tracking-widest uppercase text-sm mb-2 block animate-pulse">Visit Us</span>
            <h2 class="text-4xl md:text-5xl font-display font-bold text-moss leading-tight">
              TEMUKAN <br> KAMI.
            </h2>
          </div>

          <div class="space-y-6">
            <div class="flex items-start gap-4 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-moss/5 hover:border-moss/20 transition-colors duration-300">
              <div class="w-12 h-12 bg-moss text-cream rounded-xl flex items-center justify-center shrink-0">
                <MapPin class="w-6 h-6" />
              </div>
              <div>
                <h3 class="font-bold text-moss text-lg mb-1">Simka Buah Medan</h3>
                <p class="text-moss/70 leading-relaxed">
                  Pajak Cempaka, Jl. Cempaka,<br>
                  Medan, Sumatera Utara<br>
                  Indonesia
                </p>
              </div>
            </div>

            <a 
              href="https://maps.google.com/?q=Simka+Buah+Medan+Jl+Cempaka" 
              target="_blank"
              class="group flex items-center gap-3 px-8 py-4 bg-moss text-white rounded-full font-bold hover:bg-emerald-900 transition-all hover:shadow-xl w-fit"
            >
              <Navigation class="w-5 h-5 group-hover:rotate-45 transition-transform" />
              Buka di Google Maps
            </a>
          </div>
        </div>


        <div class="w-full md:w-2/3 h-[400px] md:h-[500px] bg-white rounded-[40px] shadow-2xl overflow-hidden border-8 border-white transform hover:scale-[1.02] transition-transform duration-500">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15928.16782298705!2d98.643236!3d3.580327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131d9a0d9c4c9%3A0x600c0b8b8b8b8b8b!2sJl.%20Cempaka%2C%20Medan%2C%20Sumatera%20Utara!5e0!3m2!1sid!2sid!4v1634567890123!5m2!1sid!2sid" 
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </div>
  </section>
</template>
