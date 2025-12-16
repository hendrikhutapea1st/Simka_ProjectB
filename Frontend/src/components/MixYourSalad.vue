<script setup lang="ts">
import { ref, computed } from 'vue';
import { Check, ArrowRight, RotateCcw } from 'lucide-vue-next';

const steps = ['Base', 'Fruits', 'Topping'];
const currentStep = ref(0);

const selections = ref({
  base: null as any,
  fruits: [] as any[],
  topping: null as any
});

const bases = [
  { id: 'yoghurt', name: 'Original Yoghurt', price: 0, image: '🍦' },
  { id: 'mayo', name: 'Creamy Mayo', price: 0, image: '🥣' },
  { id: 'lemon', name: 'Lemon Honey', price: 5000, image: '🍋' }
];

const fruits = [
  { id: 'melon', name: 'Melon', image: '🍈' },
  { id: 'apple', name: 'Apple', image: '🍎' },
  { id: 'grape', name: 'Grape', image: '🍇' },
  { id: 'mango', name: 'Mango', image: '🥭' },
  { id: 'dragon', name: 'Dragon Fruit', image: '🐉' },
  { id: 'kiwi', name: 'Kiwi', image: '🥝' }
];

const toppings = [
  { id: 'cheese', name: 'Cheddar Cheese', price: 0, image: '🧀' },
  { id: 'almond', name: 'Almond Slice', price: 5000, image: '🥜' },
  { id: 'chiaseed', name: 'Chia Seeds', price: 3000, image: '🌱' }
];

const toggleFruit = (fruit: any) => {
  const index = selections.value.fruits.findIndex(f => f.id === fruit.id);
  if (index === -1) {
    if (selections.value.fruits.length < 4) {
      selections.value.fruits.push(fruit);
    }
  } else {
    selections.value.fruits.splice(index, 1);
  }
};

const nextStep = () => {
  if (currentStep.value < steps.length) {
    currentStep.value++;
  }
};

const reset = () => {
    currentStep.value = 0;
    selections.value = { base: null, fruits: [], topping: null };
};

const whatsappLink = computed(() => {
  const base = selections.value.base?.name || 'Belum pilih';
  const fruitList = selections.value.fruits.map(f => f.name).join(', ');
  const topping = selections.value.topping?.name || 'Belum pilih';
  
  const text = `Halo Simka Buah, saya mau pesan Custom Salad:%0A%0A- Base: ${base}%0A- Buah: ${fruitList}%0A- Topping: ${topping}%0A%0ATerima kasih!`;
  return `https://wa.me/6281234567890?text=${text}`;
});
</script>

<template>
  <section id="mix" class="py-24 bg-moss relative overflow-hidden">
    <div class="container mx-auto px-6 relative z-10">
      
      <div class="text-center mb-16">
        <span class="text-sky font-bold tracking-widest uppercase text-sm mb-2 block">Interactive</span>
        <h2 class="text-5xl md:text-6xl font-display font-bold text-cream">MIX YOUR <br> SALAD.</h2>
      </div>

      <div class="max-w-4xl mx-auto bg-cream rounded-[40px] p-8 md:p-12 shadow-2xl relative">
        

        <div class="flex justify-between mb-12 relative">
            <div class="absolute top-1/2 left-0 w-full h-1 bg-moss/10 -translate-y-1/2 z-0"></div>
            <div 
                v-for="(step, index) in steps" 
                :key="index"
                class="relative z-10 flex flex-col items-center gap-2"
            >
                <div 
                    class="w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-500"
                    :class="[
                        currentStep > index ? 'bg-moss text-sky' : 
                        currentStep === index ? 'bg-sky text-moss scale-125' : 
                        'bg-white text-moss/30 border border-moss/10'
                    ]"
                >
                    <Check v-if="currentStep > index" class="w-5 h-5" />
                    <span v-else>{{ index + 1 }}</span>
                </div>
                <span class="text-xs font-bold uppercase tracking-wider text-moss/60">{{ step }}</span>
            </div>
        </div>


        <div class="min-h-[300px]">
            

            <div v-if="currentStep === 0" class="animate-in slide-in-from-right fade-in duration-300">
                <h3 class="text-2xl font-bold text-moss mb-6 text-center">Choose your dressing base</h3>
                <div class="grid md:grid-cols-3 gap-6">
                    <div 
                        v-for="base in bases" 
                        :key="base.id"
                        @click="selections.base = base"
                        class="cursor-pointer border-2 rounded-3xl p-6 flex flex-col items-center gap-4 transition-all hover:bg-white"
                        :class="selections.base?.id === base.id ? 'border-moss bg-white shadow-xl scale-105' : 'border-transparent bg-white/50'"
                    >
                        <div class="text-6xl">{{ base.image }}</div>
                        <div class="text-center">
                            <h4 class="font-bold text-moss">{{ base.name }}</h4>
                            <p class="text-sm text-moss/60">{{ base.price === 0 ? 'Free' : '+ ' + base.price }}</p>
                        </div>
                    </div>
                </div>
            </div>


            <div v-if="currentStep === 1" class="animate-in slide-in-from-right fade-in duration-300">
                <h3 class="text-2xl font-bold text-moss mb-2 text-center">Pick up to 4 fruits</h3>
                <p class="text-center text-moss/50 mb-6 text-sm">Selected: {{ selections.fruits.length }} / 4</p>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div 
                        v-for="fruit in fruits" 
                        :key="fruit.id"
                        @click="toggleFruit(fruit)"
                        class="cursor-pointer border-2 rounded-2xl p-4 flex items-center justify-between gap-4 transition-all hover:bg-white"
                        :class="selections.fruits.find(f => f.id === fruit.id) ? 'border-moss bg-white shadow-lg' : 'border-transparent bg-white/50'"
                    >
                         <div class="flex items-center gap-3">
                             <span class="text-2xl">{{ fruit.image }}</span>
                             <span class="font-bold text-moss text-sm">{{ fruit.name }}</span>
                         </div>
                         <div v-if="selections.fruits.find(f => f.id === fruit.id)" class="w-5 h-5 rounded-full bg-sky flex items-center justify-center">
                            <Check class="w-3 h-3 text-moss" />
                         </div>
                    </div>
                </div>
            </div>


            <div v-if="currentStep === 2" class="animate-in slide-in-from-right fade-in duration-300">
                <h3 class="text-2xl font-bold text-moss mb-6 text-center">Final Touch</h3>
                <div class="grid md:grid-cols-3 gap-6">
                    <div 
                        v-for="topping in toppings" 
                        :key="topping.id"
                        @click="selections.topping = topping"
                        class="cursor-pointer border-2 rounded-3xl p-6 flex flex-col items-center gap-4 transition-all hover:bg-white"
                        :class="selections.topping?.id === topping.id ? 'border-moss bg-white shadow-xl scale-105' : 'border-transparent bg-white/50'"
                    >
                        <div class="text-6xl">{{ topping.image }}</div>
                        <div class="text-center">
                            <h4 class="font-bold text-moss">{{ topping.name }}</h4>
                             <p class="text-sm text-moss/60">{{ topping.price === 0 ? 'Free' : '+ ' + topping.price }}</p>
                        </div>
                    </div>
                </div>
            </div>


            <div v-if="currentStep === 3" class="text-center animate-in zoom-in duration-300">
                <div class="w-20 h-20 bg-sky rounded-full flex items-center justify-center text-moss mx-auto mb-6">
                    <Check class="w-10 h-10" />
                </div>
                <h3 class="text-3xl font-display font-bold text-moss mb-2">Perfect Mix!</h3>
                <p class="text-moss/60 mb-8">Your custom salad is ready to verify.</p>
                
                <div class="bg-moss/5 rounded-2xl p-6 max-w-sm mx-auto text-left space-y-2 mb-8">
                    <div class="flex justify-between">
                        <span class="text-moss/60">Base</span>
                        <span class="font-bold text-moss">{{ selections.base?.name }}</span>
                    </div>
                     <div class="flex justify-between">
                        <span class="text-moss/60">Fruits</span>
                        <span class="font-bold text-moss text-right">{{ selections.fruits.map(f => f.name).join(', ') }}</span>
                    </div>
                     <div class="flex justify-between">
                        <span class="text-moss/60">Topping</span>
                        <span class="font-bold text-moss">{{ selections.topping?.name }}</span>
                    </div>
                </div>

                <div class="flex gap-4 justify-center">
                    <button @click="reset" class="px-6 py-3 rounded-full border border-moss/20 font-bold text-moss hover:bg-white transition-colors flex items-center gap-2">
                        <RotateCcw class="w-4 h-4" /> Reset
                    </button>
                    <a :href="whatsappLink" target="_blank" class="px-8 py-3 rounded-full bg-moss text-sky font-bold hover:shadow-xl transition-all hover:scale-105">
                        Order via WhatsApp
                    </a>
                </div>
            </div>

        </div>


        <div class="flex justify-end mt-8 border-t border-moss/10 pt-8" v-if="currentStep < 3">
            <button 
                @click="nextStep" 
                :disabled="(currentStep === 0 && !selections.base) || (currentStep === 1 && selections.fruits.length === 0) || (currentStep === 2 && !selections.topping)"
                class="bg-moss text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-emerald-900 transition-colors"
            >
                Next Step <ArrowRight class="w-4 h-4" />
            </button>
        </div>

      </div>
    </div>
  </section>
</template>
