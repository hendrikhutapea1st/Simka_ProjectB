<script setup lang="ts">
import { Facebook, MessageCircle, Video, Clock } from 'lucide-vue-next';
</script>

<template>
  <footer class="bg-moss text-cream pt-20 pb-10 px-6 rounded-t-[50px] -mt-10 overflow-hidden relative">
    <div class="container mx-auto text-center relative z-10">
      

      <div class="max-w-3xl mx-auto mb-16">
        <h3 class="text-3xl md:text-4xl font-display font-bold mb-4">
            Siap Menikmati Buah Segar Medan Terbaik?
        </h3>
        <p class="text-cream/60 mb-8 leading-relaxed">
            Dapatkan informasi terupdate, tips & trick, dan promo menarik dari SIMKA Buah Medan melalui akun media sosial kami dibawah ini
        </p>

        <div class="flex flex-wrap justify-center gap-4">

            <a href="https://whatsapp.com/channel/0029VbBW7zD2UPB9UNgfYH3E" target="_blank" rel="noopener noreferrer" aria-label="Hubungi kami via WhatsApp" class="px-6 py-3 rounded-full bg-[#25D366] text-white font-bold hover:brightness-110 transition-all flex items-center gap-2 shadow-lg hover:-translate-y-1">
                <MessageCircle class="w-5 h-5 fill-current" /> Saluran Resmi Via WhatsApp
            </a>
            

            <a href="https://www.tiktok.com/@simka_buah_medan?_t=ZS-90SEdaONXpi&_r=1" target="_blank" rel="noopener noreferrer" aria-label="Ikuti kami di TikTok" class="px-6 py-3 rounded-full bg-black text-white font-bold hover:bg-gray-900 transition-all flex items-center gap-2 shadow-lg hover:-translate-y-1 border border-white/10">
                <Video class="w-5 h-5" /> Tiktok
            </a>


            <a href="https://www.facebook.com/share/1A2DjPbWMf/" target="_blank" rel="noopener noreferrer" aria-label="Ikuti kami di Facebook" class="px-6 py-3 rounded-full bg-[#1877F2] text-white font-bold hover:brightness-110 transition-all flex items-center gap-2 shadow-lg hover:-translate-y-1">
                <Facebook class="w-5 h-5 fill-current" /> Facebook
            </a>
        </div>
      </div>


      <div class="max-w-2xl mx-auto mb-16">
        <div class="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden group">
            <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:rotate-12 duration-700">
                <Clock class="w-24 h-24" />
            </div>
            
            <div class="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                <div class="text-center md:text-right">
                    <h4 class="text-white text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-center md:justify-end gap-2">
                        <Clock class="w-4 h-4 text-sky" /> Toko Offline
                    </h4>
                    <p class="text-xl font-bold text-cream">Senin - Minggu</p>
                    <p class="text-sky font-bold text-2xl">10:00 - 23:00 WIB</p>
                </div>
                
                <div class="hidden md:block w-px h-12 bg-white/10"></div>
                
                <div class="text-center md:text-left">
                    <h4 class="text-white text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-center md:justify-start gap-2">
                        <Clock class="w-4 h-4 text-sky" /> Pemesanan Online
                    </h4>
                    <p class="text-xl font-bold text-cream">Setiap Hari</p>
                    <p class="text-sky font-bold text-2xl">10:00 - 23:00 WIB</p>
                </div>
            </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row justify-between items-center mt-12 pt-12 border-t border-white/10 gap-6">
        <div class="text-sm font-medium text-cream/60">
            &copy; 2025 NEO CYBERTECH - Simplify. Innovate. Protect.
        </div>
        

        <div class="text-cream/40 text-sm">
            Make Healthy Habits ✨
        </div>
      </div>
    </div>
  </footer>
</template>
