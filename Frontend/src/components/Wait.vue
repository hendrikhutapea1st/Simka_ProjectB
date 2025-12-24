<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { Clock, Calendar, MessageCircle, AlertCircle } from 'lucide-vue-next';

const props = defineProps<{
    startTime: Date;
    endTime: Date;
    title: string;
    message: string;
}>();


const now = ref(new Date());
let timer: ReturnType<typeof setInterval> | null = null;

const status = computed(() => {
    if (now.value < props.startTime) {
        return 'upcoming';
    } else if (now.value >= props.startTime && now.value <= props.endTime) {
        return 'active';
    } else {
        return 'completed';
    }
});

const timeLeft = computed(() => {
    const target = props.endTime;
    const diff = target.getTime() - now.value.getTime();

    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
});

const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(date);
};

onMounted(() => {
    timer = setInterval(() => {
        now.value = new Date();
    }, 1000);
});

onUnmounted(() => {
    if (timer) clearInterval(timer);
});
</script>

<template>
  <div class="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center relative overflow-hidden font-sans selection:bg-[#FF6B6B] selection:text-white">
    

    <div class="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-5">
        <div class="flex whitespace-nowrap overflow-hidden">
            <span v-for="n in 20" :key="'t'+n" class="text-[10rem] font-black uppercase mx-4 text-moss">MAINTENANCE</span>
        </div>
        <div class="flex whitespace-nowrap overflow-hidden">
             <span v-for="n in 20" :key="'b'+n" class="text-[10rem] font-black uppercase mx-4 text-moss">COMING SOON</span>
        </div>
    </div>


    <div class="absolute top-10 right-10 w-32 h-32 bg-[#FF9F43] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div class="absolute bottom-10 left-10 w-32 h-32 bg-[#FF6B6B] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#4ADE80] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>


    <div class="relative z-10 w-full max-w-3xl px-6">
        <div class="bg-white border-[3px] border-black rounded-[2rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 overflow-hidden">
            

            <div class="bg-[#FF6B6B] p-4 border-b-[3px] border-black flex items-center gap-3">
                <div class="flex gap-2">
                    <div class="w-4 h-4 rounded-full bg-white border-[2px] border-black"></div>
                    <div class="w-4 h-4 rounded-full bg-white border-[2px] border-black"></div>
                </div>
                <div class="flex-1 text-center font-bold text-white uppercase tracking-widest text-sm">System Update v2.0</div>
            </div>

            <div class="p-8 md:p-12 text-center">
                

                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border-[2px] border-black bg-[#4ADE80] text-black font-bold text-xs uppercase mb-8 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span class="w-2 h-2 bg-black rounded-full animate-pulse"></span>
                    Kami Tetap Melayani Anda Via Offline & Online Store 🛍️
                </div>


                <h1 class="text-5xl md:text-7xl font-black text-black mb-6 leading-none tracking-tight">
                    {{ props.title }}
                    <span class="text-[#FF9F43]">.</span>
                </h1>
                
                <p class="text-xl font-medium text-black/70 mb-10 max-w-xl mx-auto leading-relaxed">
                    {{ props.message }}
                </p>


                <div v-if="status !== 'completed'" class="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">

                    <div class="flex flex-col items-center">
                        <div class="w-20 md:w-24 h-20 md:h-24 bg-black rounded-xl flex items-center justify-center mb-2 shadow-[4px_4px_0px_0px_#FF9F43] relative overflow-hidden group">
                             <div class="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                             <span class="text-3xl md:text-5xl font-mono font-bold text-[#FF9F43]">{{ String(timeLeft.days).padStart(2, '0') }}</span>
                        </div>
                        <span class="font-bold text-xs uppercase tracking-widest">Hari</span>
                    </div>


                    <div class="flex flex-col items-center">
                        <div class="w-20 md:w-24 h-20 md:h-24 bg-black rounded-xl flex items-center justify-center mb-2 shadow-[4px_4px_0px_0px_#4ADE80]">
                             <span class="text-3xl md:text-5xl font-mono font-bold text-[#4ADE80]">{{ String(timeLeft.hours).padStart(2, '0') }}</span>
                        </div>
                        <span class="font-bold text-xs uppercase tracking-widest">Jam</span>
                    </div>


                    <div class="flex flex-col items-center">
                        <div class="w-20 md:w-24 h-20 md:h-24 bg-black rounded-xl flex items-center justify-center mb-2 shadow-[4px_4px_0px_0px_#FF6B6B]">
                             <span class="text-3xl md:text-5xl font-mono font-bold text-[#FF6B6B]">{{ String(timeLeft.minutes).padStart(2, '0') }}</span>
                        </div>
                        <span class="font-bold text-xs uppercase tracking-widest">Menit</span>
                    </div>


                    <div class="flex flex-col items-center">
                        <div class="w-20 md:w-24 h-20 md:h-24 bg-white border-[3px] border-black rounded-xl flex items-center justify-center mb-2 shadow-[4px_4px_0px_0px_black]">
                             <span class="text-3xl md:text-5xl font-mono font-bold text-black">{{ String(timeLeft.seconds).padStart(2, '0') }}</span>
                        </div>
                        <span class="font-bold text-xs uppercase tracking-widest">Detik</span>
                    </div>
                </div>




                 <div class="flex justify-center">
                    <a href="https://wa.me/6281262662497" class="group relative inline-block focus:outline-none focus:ring">
                        <span class="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-black transition-transform group-hover:translate-x-0 group-hover:translate-y-0 rounded-full"></span>
                        <span class="relative inline-flex items-center gap-2 rounded-full border-[2px] border-current px-8 py-3 text-sm font-bold bg-[#FF9F43] text-black group-active:text-opacity-75">
                            <MessageCircle class="w-5 h-5" />
                            Butuh Bantuan ? Hubungi Admin
                        </span>
                    </a>
                 </div>

            </div>
            

            <div class="bg-black p-2 flex justify-center gap-2">
                <div class="w-2 h-2 rounded-full bg-white/30"></div>
                <div class="w-2 h-2 rounded-full bg-white/30"></div>
                <div class="w-2 h-2 rounded-full bg-white/30"></div>
            </div>
        </div>

        <p class="text-center mt-8 text-black/40 font-bold text-xs uppercase tracking-widest">
            © 2025 NEO CYBERTECH - Simplify. Innovate. Protect
        </p>

    </div>
  </div>
</template>

<style scoped>
.animate-blob {
    animation: blob 7s infinite;
}

.animation-delay-2000 {
    animation-delay: 2s;
}

@keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
}
</style>
