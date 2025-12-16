<script setup lang="ts">
import { Star, Quote } from 'lucide-vue-next';

const reviews = [
    { 
        name: 'Sarah', 
        text: 'Buahnya beneran segar, ga nyesel beli disini! Kualitasnya juara.', 
        rating: 5, 
        role: 'Pelanggan Setia' 
    },
    { 
        name: 'Budi Santoso', 
        text: 'Salad buah terbaik di Medan so far. Sausnya creamy dan kejunya melimpah.', 
        rating: 5, 
        role: 'Foodie' 
    },
    { 
        name: 'Linda W.', 
        text: 'Packaging-nya lucu banget & aman, cocok banget buat dikirim sebagai kado.', 
        rating: 5, 
        role: 'Pegawai Swasta' 
    },
    { 
        name: 'Reza', 
        text: 'Pengiriman sat set, pesan pagi siang udah sampai kantor. Mantap!', 
        rating: 5, 
        role: 'Karyawan' 
    },
    { 
        name: 'Ibu Tini', 
        text: 'Manis banget buahnya, anak-anak di rumah pada suka. Bakal langganan.', 
        rating: 5, 
        role: 'Ibu Rumah Tangga' 
    },
    { 
        name: 'Aris', 
        text: 'Pelayanan ramah, admin fast respon kalau ditanya-tanya. Recommended!', 
        rating: 5, 
        role: 'Wiraswasta' 
    }
];
</script>

<template>
  <section id="testimonials" class="py-24 overflow-hidden bg-cream relative">
    
    <div class="container mx-auto px-6 mb-12 text-center relative z-10">
        <span class="text-moss/60 font-bold tracking-widest uppercase text-sm mb-2 block">Apa Kata Mereka?</span>
        <h2 class="text-4xl md:text-5xl font-display font-bold text-moss">TESTIMONI PELANGGAN.</h2>
    </div>
    

    <div class="relative flex overflow-x-hidden group pb-10">

        <div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-cream to-transparent z-20"></div>
        <div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-cream to-transparent z-20"></div>

        <div class="animate-marquee whitespace-nowrap flex gap-6 hover:[animation-play-state:paused]">
            <span v-for="i in 2" :key="i" class="flex gap-6">
                <div v-for="(review, index) in reviews" :key="index" 
                    class="inline-block w-[400px] bg-white p-8 rounded-[32px] border border-moss/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 whitespace-normal group/card cursor-pointer"
                >
                    <div class="flex flex-col h-full justify-between gap-6">

                        <div class="flex gap-1">
                            <Star v-for="s in review.rating" :key="s" class="w-5 h-5 fill-orange-400 text-orange-400" />
                        </div>


                        <div class="relative">
                            <Quote class="absolute -top-2 -left-2 w-8 h-8 text-sky/20 transform -scale-x-100" />
                            <p class="text-moss text-lg leading-relaxed relative z-10 pl-2">
                                "{{ review.text }}"
                            </p>
                        </div>


                        <div class="flex items-center gap-4 mt-2">
                            <div class="w-12 h-12 rounded-full bg-sky/20 flex items-center justify-center font-bold text-moss text-lg">
                                {{ review.name.charAt(0) }}
                            </div>
                            <div>
                                <h4 class="font-bold text-moss">{{ review.name }}</h4>
                                <span class="text-sm text-moss/60">{{ review.role }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </span>
        </div>
    </div>
  </section>
</template>
