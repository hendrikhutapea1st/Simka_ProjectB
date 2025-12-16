<script setup lang="ts">
import { ref } from 'vue';
import { MessageCircle, X, User } from 'lucide-vue-next';

const isOpen = ref(false);

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
};
</script>

<template>
    <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
        

        <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="transform translate-y-4 opacity-0 scale-95"
            enter-to-class="transform translate-y-0 opacity-100 scale-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="transform translate-y-0 opacity-100 scale-100"
            leave-to-class="transform translate-y-4 opacity-0 scale-95"
        >
            <div v-if="isOpen" class="flex flex-col gap-3 mb-2 pointer-events-auto">
                <a href="https://wa.me/6281262662497" target="_blank" class="bg-white text-moss px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-moss/5 transition-all font-bold flex items-center gap-2 border border-moss/10">
                    <User class="w-5 h-5" />
                    Admin 1
                </a>
                <a href="https://wa.me/6289508284808" target="_blank" class="bg-white text-moss px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-moss/5 transition-all font-bold flex items-center gap-2 border border-moss/10">
                    <User class="w-5 h-5" />
                    Admin 2
                </a>
            </div>
        </Transition>


        <button 
            @click="toggleMenu"
            class="pointer-events-auto flex items-center gap-2 bg-moss text-white px-5 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 font-bold group"
            :class="{ 'bg-moss': !isOpen, 'bg-moss/90': isOpen }"
            aria-label="Butuh Bantuan"
        >
            <div class="relative w-6 h-6">
                 <MessageCircle 
                    class="w-6 h-6 absolute top-0 left-0 transition-all duration-300 transform"
                    :class="isOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100 group-hover:rotate-12'" 
                 />
                 <X 
                    class="w-6 h-6 absolute top-0 left-0 transition-all duration-300 transform"
                    :class="isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'" 
                 />
            </div>
            <span class="hidden md:inline">{{ isOpen ? 'Tutup' : 'Butuh Bantuan' }}</span>
        </button>
    </div>
</template>
