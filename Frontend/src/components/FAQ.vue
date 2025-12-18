<script setup lang="ts">
import { ref } from 'vue';
import { Plus, Minus } from 'lucide-vue-next';

const faqs = [
    {
        q: 'Berapa lama salad buah bisa tahan?',
        a: 'Salad kami dibuat fresh setiap hari tanpa pengawet. Tahan hingga 3 hari jika disimpan di dalam kulkas (suhu 4°C).'
    },
    {
        q: 'Apakah ada minimal pemesanan?',
        a: 'Tidak ada minimal order! Namun, kami memberikan gratis ongkir untuk pemesanan di atas Rp 100.000 dalam radius 5km.'
    },
    {
        q: 'Bisakah saya request buah tertentu?',
        a: 'Tentu saja! Gunakan fitur "Mix Your Salad" atau hubungi kami via WhatsApp untuk mengkustomisasi buah favorit Anda.'
    },
    {
        q: 'Apakah menerima pesanan untuk acara?',
        a: 'Ya, kami melayani pesanan partai besar untuk acara kantor, pernikahan, dan pesta. Mohon hubungi kami H-3 sebelum acara.'
    }
];

const openIndex = ref<number | null>(0);

const toggle = (index: number) => {
    openIndex.value = openIndex.value === index ? null : index;
};
</script>

<template>
  <section class="py-24 bg-white">
    <div class="container mx-auto px-6 max-w-3xl">
        <div class="text-center mb-16">
            <h2 class="text-4xl font-display font-bold text-moss mb-4">FAQ.</h2>
            <p class="text-moss/60">Pertanyaan yang sering diajukan seputar produk dan layanan kami.</p>
        </div>

        <div class="space-y-4">
            <div 
                v-for="(item, index) in faqs" 
                :key="index"
                class="bg-white rounded-3xl overflow-hidden border border-moss/5 transition-all duration-300"
                :class="[openIndex === index ? 'shadow-lg' : 'hover:border-moss/20']"
            >
                <button 
                    @click="toggle(index)"
                    class="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                >
                    <span class="text-lg font-bold text-moss">{{ item.q }}</span>
                    <span class="w-8 h-8 rounded-full bg-cream flex items-center justify-center text-moss transition-transform duration-300" :class="{'rotate-180': openIndex === index}">
                         <Minus v-if="openIndex === index" class="w-4 h-4" />
                         <Plus v-else class="w-4 h-4" />
                    </span>
                </button>
                <div 
                    v-show="openIndex === index"
                    class="px-8 pb-8 text-moss/70 leading-relaxed animate-in slide-in-from-top-2 duration-200"
                >
                    {{ item.a }}
                </div>
            </div>
        </div>
    </div>
  </section>
</template>
