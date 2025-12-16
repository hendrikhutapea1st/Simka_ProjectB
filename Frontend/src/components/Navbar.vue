<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Menu, X } from 'lucide-vue-next';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const checkScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});

const navLinks = [
  { name: 'Menu', href: '#products' },
  { name: 'Keunggulan', href: '#features' },
  { name: 'Galeri', href: '#gallery' },
  { name: 'Testimoni', href: '#testimonials' },
  { name: 'Temukan Kami', href: '#location' },
];
</script>

<template>
  <nav class="fixed top-8 left-0 w-full z-50 px-6 flex justify-center pointer-events-none">
    <div 
        class="pointer-events-auto transition-all duration-500 ease-out border border-moss/5 backdrop-blur-xl bg-white/70 rounded-full flex items-center justify-between px-2 py-2 gap-4 shadow-sm"
        :class="[isScrolled ? 'w-auto' : 'w-full max-w-5xl']"
    >

        <a href="#" class="flex items-center gap-2 pl-4 pr-2">
            <img src="/images/Simka Buah Medan_UP.jpg" alt="Simka Buah" class="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md">
            <span class="font-display font-bold text-lg tracking-tight text-moss" v-if="!isScrolled || isMobileMenuOpen">
                Simka.
            </span>
        </a>


        <div class="hidden md:flex items-center bg-cream/50 rounded-full px-2 py-1 border border-white/50">
            <a 
                v-for="link in navLinks" 
                :key="link.name" 
                :href="link.href"
                class="px-5 py-2 rounded-full text-sm font-medium text-moss/70 hover:text-moss hover:bg-white transition-all duration-300"
            >
                {{ link.name }}
            </a>
        </div>


        <div class="flex items-center gap-2">
            <a 
                href="https://wa.me/6281262662497" 
                target="_blank"
                class="bg-moss text-white px-6 py-2.5 rounded-full font-bold text-sm tracking-wide hover:shadow-lg hover:shadow-sky/20 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
            >
                Pesan Sekarang
            </a>
            

            <button 
                @click="isMobileMenuOpen = !isMobileMenuOpen" 
                aria-label="Toggle Navigation"
                class="md:hidden w-10 h-10 rounded-full bg-cream hover:bg-clay/20 flex items-center justify-center transition-colors"
            >
                <Menu v-if="!isMobileMenuOpen" class="w-5 h-5" />
                <X v-else class="w-5 h-5" />
            </button>
        </div>
    </div>


    <div 
        v-if="isMobileMenuOpen" 
        class="absolute top-24 left-6 right-6 pointer-events-auto bg-moss text-cream p-6 rounded-3xl shadow-2xl origin-top animate-in fade-in slide-in-from-top-4 duration-300"
    >
         <div class="flex flex-col gap-4 text-center">
            <a 
                v-for="link in navLinks" 
                :key="link.name" 
                :href="link.href"
                class="text-xl font-display font-bold hover:text-sky transition-colors"
                @click="isMobileMenuOpen = false"
            >
                {{ link.name }}
            </a>
         </div>
    </div>
  </nav>
</template>
