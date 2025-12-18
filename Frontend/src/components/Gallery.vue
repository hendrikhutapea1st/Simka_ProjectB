<script setup lang="ts">
import { Instagram } from 'lucide-vue-next';

const images = [
    '/images/Apel Fuji.png',
    '/images/Apel Hijau_UP.jpg',
    '/images/Apel Merah_UP.jpg',
    '/images/Buah Potong_UP.jpg',
    '/images/Buah Potong_UP.webp',
    '/images/Jeruk Medan_UP.png',
    '/images/Mangga Harum Manis_UP.png',
    '/images/Nanas_UP.jpg',
    '/images/ParcelSusu_UP.jpg',
    '/images/Pepaya_UP.jpg',
    '/images/Photo 1_Up.png',
    '/images/Photo 2_UP.png',
    '/images/Photo 3_UP.png',
    '/images/Photo 4_UP.png',
    '/images/Promo 1_UP.png',
    '/images/Promo 2_UP.png',
    '/images/Promo 3_UP.png',
    '/images/Simka Buah Medan_UP.jpg'
];
</script>

<template>
  <section id="gallery" class="py-24 bg-white overflow-hidden">
    <div class="container mx-auto px-6 mb-12">
        <div class="flex flex-col md:flex-row justify-between items-end">
            <div>
                <h2 class="text-4xl md:text-5xl font-display font-bold text-moss">GALERI SIMKA BUAH MEDAN.</h2>
                <p class="text-moss/60 mt-2">Follow us @simka_buah_medan</p>
            </div>
            <a href="https://www.instagram.com/simka_buah_medan?igsh=MTkybjlyanVvdmEzMw==" class="inline-flex items-center gap-2 font-bold text-moss hover:text-sky transition-colors">
                <Instagram class="w-5 h-5" /> View Profile
            </a>
        </div>
    </div>


    <div class="flex gap-6 w-full">

        <div class="flex gap-6 animate-marquee shrink-0 items-center h-[450px]">
            <div 
                v-for="(img, i) in images" 
                :key="i"
                class="relative group rounded-[32px] overflow-hidden shrink-0 h-[400px] w-[300px] md:w-[350px]"
            >
                <img :src="img" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Gallery Image" loading="lazy">
                <div class="absolute inset-0 bg-moss/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Instagram class="w-10 h-10 text-white drop-shadow-md" />
                </div>
            </div>
        </div>


        <div class="flex gap-6 animate-marquee shrink-0 items-center h-[450px]" aria-hidden="true">
            <div 
                v-for="(img, i) in images" 
                :key="'d-'+i"
                class="relative group rounded-[32px] overflow-hidden shrink-0 h-[400px] w-[300px] md:w-[350px]"
            >
                <img :src="img" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Gallery Image" loading="lazy">
                <div class="absolute inset-0 bg-moss/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Instagram class="w-10 h-10 text-white drop-shadow-md" />
                </div>
            </div>
        </div>
    </div>
  </section>
</template>
