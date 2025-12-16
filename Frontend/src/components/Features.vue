<script setup lang="ts">
import { Award, Zap, Tag, Package, MessageCircle, ShieldCheck } from 'lucide-vue-next';

const features = [
  {
    icon: Award,
    title: 'Kualitas Premium',
    description: 'Buah dipilih langsung dari perkebunan terbaik dengan standar quality control yang ketat.',
    iconBg: 'bg-sky',
    iconColor: 'text-moss'
  },
  {
    icon: Zap,
    title: 'Pengiriman Kilat',
    description: 'Garansi pengiriman 1-2 jam untuk area Medan menggunakan kurir instan terpercaya.',
    iconBg: 'bg-cream',
    iconColor: 'text-moss'
  },
  {
    icon: Tag,
    title: 'Harga Kompetitif',
    description: 'Harga terbaik langsung dari supplier tangan pertama tanpa mengurangi kualitas.',
    iconBg: 'bg-moss-light',
    iconColor: 'text-cream'
  },
  {
    icon: Package,
    title: 'Stok Lengkap',
    description: 'Tersedia berbagai varian buah lokal, impor, hingga parsel buah custom.',
    iconBg: 'bg-sky-dim',
    iconColor: 'text-moss'
  },
  {
    icon: MessageCircle,
    title: 'Layanan Ramah',
    description: 'Admin WhatsApp fast response siap membantu konsultasi dan pemesanan Anda.',
    iconBg: 'bg-cream-dark',
    iconColor: 'text-moss'
  },
  {
    icon: ShieldCheck,
    title: 'Jaminan Higienis',
    description: 'Proses packing standar food grade menjamin kebersihan hingga ke tangan Anda.',
    iconBg: 'bg-sky',
    iconColor: 'text-moss'
  }
];
</script>

<template>
  <section id="features" class="py-20 bg-moss text-cream">
    <div class="container mx-auto px-6">
        <div class="mb-16 text-center max-w-5xl mx-auto">
            <h2 class="text-[35px] md:text-[50px] font-display font-bold leading-tight mb-8">
                Kenapa Harus <br> Pesan di <br>
                <span class="text-sky">SIMKA BUAH MEDAN ?</span>
            </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            <div 
              v-for="(feature, index) in features" 
              :key="index"
              class="space-y-4 group hover:transform hover:translate-x-2 transition-transform duration-300"
            >
                <div 
                  class="w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300"
                  :class="[feature.iconBg, feature.iconColor]"
                >
                    <component :is="feature.icon" class="w-6 h-6" />
                </div>
                <h3 class="text-2xl font-display font-bold">{{ feature.title }}</h3>
                <p class="text-cream/80 leading-relaxed">
                    {{ feature.description }}
                </p>
            </div>

        </div>
    </div>
  </section>
</template>
