<script setup lang="ts">
import { ArrowUpRight, Plus } from 'lucide-vue-next';

const products = [
  {
    id: 1,
    name: 'Salad Buah Premium + Segar',
    price: 'Mulai 35K',
    desc: 'Creamy dressing, premium cheddar.',
    image: '/images/Buah Potong_UP.jpg',
    type: 'large'
  },
  {
    id: 2,
    name: 'Parcel Buah + Susu',
    price: 'Mulai dari 50K',
    desc: 'Perfect for special moments.',
    image: '/images/ParcelSusu_UP.jpg',
    type: 'tall'
  },
  {
    id: 3,
    name: 'Apple Fuji',
    price: 'Mulai dari 30K',
    desc: 'Sweet & crunchy per kg.',
    image: '/images/Apel Fuji.png',
    type: 'small'
  },
  {
    id: 4,
    name: 'Buah Potong Mix',
    price: 'Mulai dari 15K',
    desc: 'Healthy snack option.',
    image: '/images/Buah Potong_UP.webp',
    type: 'small'
  },
];
</script>

<template>
  <section id="products" class="py-24 bg-cream">
    <div class="container mx-auto px-6">
      

      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
            <h2 class="text-5xl md:text-7xl font-display font-bold text-moss mb-4">BEST <br> SELLER.</h2>
        </div>
        <p class="text-moss/70 max-w-xs mb-2">
            Jelajahi pilihan buah-buahan dan camilan sehat kami yang dipasok secara lokal dan musiman..
        </p>
      </div>


      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
        

        <div class="md:col-span-2 row-span-2 group relative rounded-[40px] overflow-hidden bg-white">
            <img :src="products[0]?.image" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="" loading="lazy">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-8 flex flex-col justify-end">
                <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 class="text-3xl font-display font-bold text-white mb-2">{{ products[0]?.name }}</h3>
                    <p class="text-white/80 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{{ products[0]?.desc }}</p>
                    <div class="flex justify-between items-center bg-white/20 backdrop-blur-md rounded-full p-2 pr-6 w-max">
                        <div class="w-10 h-10 rounded-full bg-sky flex items-center justify-center text-moss font-bold text-sm">IDR</div>
                        <span class="text-xl font-bold text-white ml-3">{{ products[0]?.price }}</span>
                    </div>
                </div>
            </div>
            <button class="absolute top-6 right-6 w-14 h-14 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                <ArrowUpRight class="w-6 h-6 text-moss" />
            </button>
        </div>


        <div class="md:col-span-1 row-span-2 group relative rounded-[40px] overflow-hidden bg-moss">
            <img :src="products[1]?.image" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="" loading="lazy">
            <div class="absolute bottom-0 left-0 w-full p-6">
                 <div class="bg-white p-6 rounded-3xl">
                    <h3 class="text-xl font-bold text-moss mb-1">{{ products[1]?.name }}</h3>
                    <div class="flex justify-between items-center mt-3">
                        <span class="text-lg font-bold text-moss">{{ products[1]?.price }}</span>
                        <button class="w-8 h-8 rounded-full border border-moss flex items-center justify-center hover:bg-moss hover:text-white transition-colors">
                            <Plus class="w-4 h-4" />
                        </button>
                    </div>
                 </div>
            </div>
        </div>


        <div v-for="item in products.slice(2)" :key="item.id" class="md:col-span-1 row-span-1 group relative rounded-[40px] overflow-hidden bg-white border border-moss/5 hover:border-moss/20 transition-colors">
             <div class="p-6 h-full flex flex-col justify-between">
                <div class="flex justify-between items-start">
                    <h3 class="text-lg font-bold text-moss leading-tight">{{ item.name }}</h3>
                    <span class="font-bold text-sky-600">{{ item.price }}</span>
                </div>
                <div class="w-full h-32 rounded-2xl overflow-hidden mt-4">
                    <img :src="item.image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" loading="lazy">
                </div>
             </div>
        </div>



      </div>
    </div>
  </section>
</template>
