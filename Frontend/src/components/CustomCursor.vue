<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const cursor = ref<HTMLElement | null>(null);
const cursorFollower = ref<HTMLElement | null>(null);

const moveCursor = (e: MouseEvent) => {
    if (cursor.value && cursorFollower.value) {

        cursor.value.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        

        cursorFollower.value.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    }
};

const hoverElements = ['a', 'button', '.cursor-hover'];

const addHoverEffect = () => {
    if (cursorFollower.value) {
        cursorFollower.value.classList.add('scale-[2.5]', 'bg-sky/20', 'border-transparent');
        cursorFollower.value.classList.remove('border-moss/20');
        if (cursor.value) cursor.value.classList.add('opacity-0');
    }
};

const removeHoverEffect = () => {
    if (cursorFollower.value) {
        cursorFollower.value.classList.remove('scale-[2.5]', 'bg-sky/20', 'border-transparent');
        cursorFollower.value.classList.add('border-moss/20');
         if (cursor.value) cursor.value.classList.remove('opacity-0');
    }
};

onMounted(() => {
    document.addEventListener('mousemove', moveCursor);
    

    document.body.style.cursor = 'none';
    

    document.querySelectorAll(hoverElements.join(',')).forEach(el => {
        el.addEventListener('mouseenter', addHoverEffect);
        el.addEventListener('mouseleave', removeHoverEffect);
    });


    document.addEventListener('mouseover', (e) => {
        const target = e.target as HTMLElement;
        if (target.closest('a') || target.closest('button') || target.closest('.cursor-hover')) {
            addHoverEffect();
        } else {
            removeHoverEffect();
        }
    });
});

onUnmounted(() => {
    document.removeEventListener('mousemove', moveCursor);
    document.body.style.cursor = 'auto';
});
</script>

<template>
  <div class="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">

      <div 
        ref="cursor"
        class="absolute w-3 h-3 bg-moss rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
      ></div>
      

      <div 
        ref="cursorFollower"
        class="absolute w-12 h-12 border border-moss/20 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out will-change-transform"
      ></div>
  </div>
</template>
