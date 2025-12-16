<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { X, Gift, AlertCircle } from 'lucide-vue-next';

const isVisible = ref(false);
const hasSeenValues = localStorage.getItem('simka_newsletter_seen');
const email = ref('');
const error = ref('');
const isSubmitting = ref(false);

const close = () => {
    isVisible.value = false;
    localStorage.setItem('simka_newsletter_seen', 'true');
    error.value = '';
    email.value = '';
};

const sanitizeInput = (input: string) => {

    return input.replace(/[<>]/g, '').trim();
};

const validateAndSubmit = async () => {
    error.value = '';
    const cleanEmail = sanitizeInput(email.value);
    

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!cleanEmail) {
        error.value = 'Email wajib diisi';
        return;
    }
    
    if (!emailRegex.test(cleanEmail)) {
        error.value = 'Mohon masukkan alamat email yang valid';
        return;
    }

    if (cleanEmail.length > 100) {
        error.value = 'Alamat email terlalu panjang';
        return;
    }

    isSubmitting.value = true;
    

    try {
        await new Promise(resolve => setTimeout(resolve, 1000));

        close();
    } catch (e) {
        error.value = 'Terjadi kesalahan. Silakan coba lagi.';
    } finally {
        isSubmitting.value = false;
    }
};

const handleMouseLeave = (e: MouseEvent) => {
    if (e.clientY <= 0 && !hasSeenValues && !isVisible.value) {
        isVisible.value = true;
    }
};

onMounted(() => {
    if (!hasSeenValues) {
        document.addEventListener('mouseleave', handleMouseLeave);
    }
    

    setTimeout(() => {
        if (!hasSeenValues && !isVisible.value) {
            isVisible.value = true;
        }
    }, 30000);
});
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 scale-95 translate-y-4"
    enter-to-class="opacity-100 scale-100 translate-y-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 scale-100 translate-y-0"
    leave-to-class="opacity-0 scale-95 translate-y-4"
  >
    <div v-if="isVisible" class="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-moss/50 backdrop-blur-sm">
        
        <div class="bg-cream rounded-[40px] p-2 max-w-lg w-full shadow-2xl relative overflow-hidden">
            <button @click="close" class="absolute top-6 right-6 p-2 rounded-full bg-white/50 hover:bg-white transition-colors z-20">
                <X class="w-5 h-5 text-moss" />
            </button>

            <div class="flex flex-col md:flex-row">

                <div class="md:w-2/5 h-48 md:h-auto bg-sky rounded-[32px] relative overflow-hidden flex items-center justify-center">
                    <img 
                        src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&q=80&w=400" 
                        class="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply" 
                        alt="Gift"
                    >
                    <div class="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center animate-bounce">
                        <Gift class="w-8 h-8 text-sky" />
                    </div>
                </div>


                <div class="md:w-3/5 p-8 text-center md:text-left">
                    <span class="text-sky font-bold tracking-widest uppercase text-xs">Tunggu! Jangan Lewatkan</span>
                    <h3 class="text-3xl font-display font-bold text-moss mt-2 mb-4 leading-none">Dapatkan Diskon 10%</h3>
                    <p class="text-moss/60 text-sm mb-6">Bergabunglah dengan komunitas sehat kami dan dapatkan kode diskon spesial untuk pesanan pertama Anda.</p>
                    
                    <form @submit.prevent="validateAndSubmit" class="space-y-3">
                        <div class="relative">
                            <input 
                                v-model="email"
                                type="email" 
                                aria-label="Alamat Email"
                                placeholder="Masukkan email Anda" 
                                maxlength="100"
                                :class="{'border-red-500 focus:border-red-500': error}"
                                class="w-full px-6 py-3 rounded-full border border-moss/10 bg-white focus:outline-none focus:border-sky font-sans text-sm transition-colors"
                            >
                            <div v-if="error" class="absolute -bottom-5 left-0 text-[10px] text-red-500 flex items-center gap-1 pl-2">
                                <AlertCircle class="w-3 h-3" /> {{ error }}
                            </div>
                        </div>
                        
                        <button 
                            type="submit" 
                            :disabled="isSubmitting"
                            class="w-full px-6 py-3 rounded-full bg-moss text-sky font-bold hover:shadow-lg transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            <span v-if="isSubmitting">Memproses...</span>
                            <span v-else>Klaim Kode Diskon</span>
                        </button>
                    </form>
                </div>
            </div>

        </div>
    </div>
  </Transition>
</template>
