<script setup lang="ts">
import { MessageCircle, ShoppingBag } from 'lucide-vue-next';
import { ref, onMounted, onUnmounted } from 'vue';

const heroImages = [
    '/images/Photo 1_Up.png',
    '/images/Apel Fuji.png',
    '/images/Jeruk Medan_UP.png',
    '/images/Mangga Harum Manis_UP.png'
];


const currentSlide = ref(0);
let slideInterval: any;


const typewriterText = ref('');
const phrases = [
    '#HadirUntukAnda',
    '#HealthyFruitHealthyLife',
    '#BuahUntukSetiapAcara',
    '#BuahKupasAntiRibet',
    '#BerbagiKasihUntukOrangTersayang'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeInterval: any;

const typeEffect = () => {
    const currentPhrase = phrases[phraseIndex] || '';
    
    if (isDeleting) {
        typewriterText.value = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterText.value = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeEffect, 500);
        return;
    }

    const typingSpeed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, typingSpeed);
};

onMounted(() => {
    slideInterval = setInterval(() => {
        currentSlide.value = (currentSlide.value + 1) % heroImages.length;
    }, 3000);


    typeEffect();
});

onUnmounted(() => {
    if (slideInterval) clearInterval(slideInterval);
    if (typeInterval) clearTimeout(typeInterval);
});
</script>

<template>
  <section id="home" class="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden flex flex-col justify-center">
    

    <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none select-none z-0">
        <span class="text-[20vw] font-display font-black text-moss/5 tracking-tighter leading-none">
            FRESH
        </span>
    </div>

    <div class="container mx-auto relative z-10 grid lg:grid-cols-12 gap-12 items-center">
      

      <div class="lg:col-span-7 flex flex-col gap-8">
        <div class="space-y-2">
            <div class="flex items-center gap-3">
                <span class="w-12 h-[1px] bg-moss/50"></span>
                <span class="text-moss/60 uppercase tracking-widest text-xs font-bold">Est. 2025</span>
            </div>
            <h1 class="text-6xl md:text-8xl font-display font-bold text-moss leading-[0.9] tracking-tighter h-[3.6em] md:h-[2.7em]">
                SIMKA BUAH <br>
                <span class="italic font-light">KOTA MEDAN</span> <br>
                <span class="text-[28px] md:text-[40px] block mt-2 text-moss/90">
                    {{ typewriterText }}<span class="animate-pulse">|</span>
                </span>
            </h1>
        </div>

        <p class="text-lg md:text-xl text-moss/70 max-w-md leading-relaxed">
            Menyediakan berbagai jenis buah segar, buah organik, dan buah lokal Medan terbaik. <br>
            <span class="font-bold text-moss">Berkualitas tinggi dan dikemas higienis.</span>
        </p>


        <div class="flex flex-wrap gap-3 mt-6 mb-4">
            <a href="https://wa.me/6281262662497" target="_blank" class="px-5 py-2.5 rounded-full bg-[#6B8E6B] text-white font-bold text-sm hover:contrast-125 transition-all flex items-center gap-2 shadow-lg hover:-translate-y-0.5">
                <MessageCircle class="w-4 h-4" /> Pesan Via Admin 1
            </a>
            <a href="https://wa.me/6289508284808" target="_blank" class="px-5 py-2.5 rounded-full bg-[#6B8E9B] text-white font-bold text-sm hover:contrast-125 transition-all flex items-center gap-2 shadow-lg hover:-translate-y-0.5">
                <MessageCircle class="w-4 h-4" /> Pesan Via Admin 2
            </a>
            

            <div class="relative group">
                <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#D97979] text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap shadow-md border border-[#D97979]/30 transition-transform group-hover:scale-110 z-10">
                    Diskon s/d 25%
                </span>
                <a href="https://gofood.co.id/medan/restaurant/simka-fresh-pajak-cempaka-jl-cempaka-6a22dc19-3fcd-4025-900a-6fc76cbf8fb7" class="px-5 py-2.5 rounded-full bg-[#D97979] text-white font-bold text-sm hover:contrast-125 transition-all flex items-center gap-2 shadow-sm hover:-translate-y-0.5">
                    <ShoppingBag class="w-4 h-4" /> GOFOOD
                </a>
            </div>

            <div class="relative group">
                <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#8DB380] text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap shadow-md border border-[#8DB380]/30 transition-transform group-hover:scale-110 z-10">
                    Diskon s/d 35%
                </span>
                <a href="https://r.grab.com/g/2-2-6-C6CTGULVC62XRN" class="px-5 py-2.5 rounded-full bg-[#8DB380] text-white font-bold text-sm hover:contrast-125 transition-all flex items-center gap-2 shadow-sm hover:-translate-y-0.5">
                    <ShoppingBag class="w-4 h-4" /> GRABMART
                </a>
            </div>


            <div class="relative group">
                <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#D99A6C] text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap shadow-md border border-[#D99A6C]/30 transition-transform group-hover:scale-110 z-10">
                    Diskon s/d 50%
                </span>
                <a href="https://id.shp.ee/BRm3M58" class="px-5 py-2.5 rounded-full bg-[#D99A6C] text-white font-bold text-sm hover:contrast-125 transition-all flex items-center gap-2 shadow-sm hover:-translate-y-0.5">
                    <ShoppingBag class="w-4 h-4" /> SHOPEE
                </a>
            </div>
        </div>


      </div>


      <div class="lg:col-span-5 relative h-[500px] lg:h-[700px]">

         <div class="absolute inset-0 bg-sky rounded-t-[100px] rounded-br-[100px] overflow-hidden transform rotate-2 hover:rotate-0 transition-all duration-700 ease-in-out z-10">

            <div class="w-full h-full flex transition-transform duration-1000 ease-in-out" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
                <div v-for="(img, idx) in heroImages" :key="idx" class="w-full h-full flex-shrink-0 relative">
                     <img 
                        :src="img" 
                        alt="Fresh Fruit" 
                        width="1000"
                        height="1000"
                        decoding="async"
                        :loading="idx === 0 ? 'eager' : 'lazy'"
                        :fetchpriority="idx === 0 ? 'high' : 'auto'"
                        class="w-full h-full object-cover mix-blend-multiply opacity-90"
                    />
                </div>
            </div>
         </div>
         

         <div class="absolute bottom-10 -left-10 w-32 h-32 bg-cream rounded-full border border-moss/10 flex items-center justify-center p-4 animate-float z-20 shadow-xl">
            <!-- Rotating Yellow Ring -->
            <div class="absolute inset-1 rounded-full border-[2px] border-dashed border-yellow-500/60 animate-[spin_10s_linear_infinite]"></div>
            <div class="text-center relative z-10">
                <span class="block text-2xl font-display font-bold text-moss">100%</span>
                <span class="text-[10px] uppercase font-bold tracking-normal text-moss/60 leading-tight">Segar &<br>Berkualitas</span>
            </div>
         </div>
      </div>

    </div>
  </section>
</template>
