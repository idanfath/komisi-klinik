<script setup>
  import { ref, computed } from 'vue'
  import { useMouseInElement } from '@vueuse/core'

  const ct_construct = (elementX, elementY, elementHeight, elementWidth, isOutside, maxRotation) => {
    if (window.innerWidth > 1405) {
      const MAX_ROTATION = maxRotation;
      const rX = (
        MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION
      ).toFixed(2)
      const rY = (
        (elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2
      ).toFixed(2)

      return isOutside.value ? '' : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
    } else {
      return ''
    }
  }

  const cl_construt = (elementX, elementY, elementHeight, elementWidth, isOutside, blur, color) => {
    if (window.innerWidth > 1405) {
      if (isOutside.value) {
        return ''
      } else {
        const offsetX = (1 - elementX.value / elementWidth.value) * 20 - 10
        const offsetY = (1 - elementY.value / elementHeight.value) * 20 - 10
        return `drop-shadow(${offsetX}px ${offsetY}px ${blur}px ${color})`
      }
    }
  }

  const card1R = ref(null)
  const { elementX: card1X, elementY: card1Y, elementHeight: card1H, elementWidth: card1W, isOutside: card1S } = useMouseInElement(card1R)
  const ct_card1 = computed(() => { return ct_construct(card1X, card1Y, card1H, card1W, card1S, 2) })
  const cl_card1 = computed(() => { return cl_construt(card1X, card1Y, card1H, card1W, card1S, 10, 'rgba(55, 55, 55, 0.5)') })

  const card2R = ref(null)
  const { elementX: card2X, elementY: card2Y, elementHeight: card2H, elementWidth: card2W, isOutside: card2S } = useMouseInElement(card2R)
  const ct_card2 = computed(() => { return ct_construct(card2X, card2Y, card2H, card2W, card2S, 2) })
  const cl_card2 = computed(() => { return cl_construt(card2X, card2Y, card2H, card2W, card2S, 10, 'rgba(55, 55, 55, 0.5)') })
  
  const card3R = ref(null)
  const { elementX: card3X, elementY: card3Y, elementHeight: card3H, elementWidth: card3W, isOutside: card3S } = useMouseInElement(card3R)
  const ct_card3 = computed(() => { return ct_construct(card3X, card3Y, card3H, card3W, card3S, 2) })
  const cl_card3 = computed(() => { return cl_construt(card3X, card3Y, card3H, card3W, card3S, 10, 'rgba(0, 0, 0, 0.3)') })

  const but1R = ref(null)
  const { elementX: but1X, elementY: but1Y, elementHeight: but1H, elementWidth: but1W, isOutside: but1S } = useMouseInElement(but1R)
  const ct_but1 = computed(() => { return ct_construct(but1X, but1Y, but1H, but1W, but1S, 3) })

  const but2R = ref(null)
  const { elementX: but2X, elementY: but2Y, elementHeight: but2H, elementWidth: but2W, isOutside: but2S } = useMouseInElement(but2R)
  const ct_but2 = computed(() => { return ct_construct(but2X, but2Y, but2H, but2W, but2S, 3) })

</script>


<template>
  <main class="home-container">

    <div id="main-home" class="img-container" :style="{ 'max-width': max + 'px' }">
      <!-- !IMPORTANT: mau yang maxwidth 1200px atau tidak?? soalnya aneh -->

      <img v-for="img in imgSrc" :key="img.alt" :src="img.src" :alt="img.alt"
        class="home-hero-img non-selectable cursor-pointer" @click="scrollTo('service-home')">
    </div>

    <div id="service-home" class="home-services text-white">
      <!-- container for text -->

      <!-- container for cards -->
      <div class="sc-container">

        <div class="sc-titles non-selectable ">
          <div class="panimated sc-t-c">
            <div class="text-italic sc-t-1 mc">
              Discover Our
            </div>
            <div class="sc-t-2 mc">
              SERVICES
            </div>
          </div>
        </div>

        <div class="panimated-card sc-card non-selectable">
          <img src="../assets/home/service-cards/1.png" class="mc" ref="card1R"
            :style="{transform: ct_card1, filter: cl_card1}" alt="Card">
          <img src="../assets/home/service-cards/2.png" class="mc" ref="card2R"
            :style="{transform: ct_card2, filter: cl_card2}" alt="Card">
        </div>
        <div>
          <q-btn label="See More" no-caps outline size="xl" square class="my-buttonx animated-btn" ref="but1R"
            :style="{transform: ct_but1}" :ripple="false"></q-btn>
        </div>
      </div>
    </div>

    <div id="results-home" class="home-results text-white column">

      <div class="sc-container">

        <!-- !IMPORTANT pilih wir -->
        <!-- <div class=" non-selectable flex justify-center">
          <div class="panimated sc-t-c">
            <div class="sc-t-2 ct-t-3 mc">
              The Results
            </div>
          </div>
        </div> -->

        <div class="sc-titles non-selectable ">
          <div class="panimated sc-t-c">
            <div class="text-italic sc-t-1 mc">
              See Our
            </div>
            <div class="sc-t-2 mc">
              RESULTS
            </div>
          </div>
        </div>

      </div>
      <div class="sc-container sc-container-2">
        <swiper :modules="swiperOptions.module" :mousewheel="true" :autoplay="swiperOptions.autoplay"
          :coverflowEffect="swiperOptions.coverflowEffect" :slides-per-view="slidesPerView" gap="29" loop
          :space-between="50" :effect="swiperOptions.effect" class="sc-swiper non-selectable ">

          <swiper-slide v-for="(item, i) in resultSrc" :key="i" :name="i + 1" @mouseover="hoveredS1 = i"
            @mouseleave="hoveredS1 = null" class="panimated-swipe">
            <img :src="item.src" class="sc-items"
              :class="{ dim: hoveredS1 !== null && hoveredS1 !== i && mobileCheck !== 1}" alt="Card" :style="is">
          </swiper-slide>
        </swiper>
      </div>
      <div class="sc-container">
        <div>
          <q-btn label="See More" no-caps outline size="xl" square class="q-py-sm q-px-xl animated-btn my-buttonx" ref="but2R"
            :style="{transform: ct_but2}" :ripple="false"></q-btn>
        </div>
      </div>
    </div>

    <div id="doctors-home" class="home-doctors text-white" :style="{'background': 'url(' + require('@/assets/doctors.png') + ')'}">


      <div class="sc-container" style="z-index: 3;" >
        <div class="sc-titles non-selectable ">
          <div class="panimated sc-t-c sc-t-c-2">
            <div class="text-italic sc-b-1 mc">
              Meet Our
            </div>
            <div class="sc-b-2 mc">
              DOCTORS
            </div>
          </div>
        </div>
        <div class="panimated-card sc-card sc-card-2 non-selectable">
          <img src="../assets/doctors.png" class="mc" ref="card3R" style="border-radius: 16px;"
            :style="{transform: ct_card3, filter: cl_card3}" alt="Card">
        </div>
      </div>
    </div>
  </main>
</template>



<script>
  // import simpleParallax from 'simple-parallax-js';
  import { Autoplay, Mousewheel } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/effect-coverflow';
  import 'swiper/css/effect-fade';
  export default {
    name: 'HomeV',
    components: {
      Swiper,
      SwiperSlide
    },
    methods: {
      scrollTo(id) {
        let el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      },
      toggleMax() {
        this.max = this.max === -1 ? 1250 : -1
      },
    },
    computed: {
      slidesPerView() {
        let size = this.$q.screen.width;
        if (size < 850) {
          return 1;
        } else if (size < 1400) {
          return 2;
        } else {
          return 3;
        }
      },
      mobileCheck() {
        return this.$q.screen.width < 850 ? 1 : 0
      },
    },
    data() {
      return {
        hoveredS1: null,
        max: 1250,
        imgSrc: [
          {
            id: 1,
            src: require('@/assets/home/hero-img/1.png'),
            alt: "Skyn's Hero Image"
          },
          {
            id: 2,
            src: require('@/assets/home/hero-img/2.jpg'),
            alt: "Skyn's Second Image"
          }
        ],
        resultSrc: [
          {
            id: 1,
            src: require('@/assets/home/results/1.png'),
          },
          {
            id: 2,
            src: require('@/assets/home/results/2.png'),
          },
          {
            id: 3,
            src: require('@/assets/home/results/3.png'),
          },
          {
            id: 4,
            src: require('@/assets/home/results/4.png'),
          }
        ],
        swiperOptions: {
          modules: [Autoplay, Mousewheel],
          effect: 'coverflow',
          autoplay: {
            delay: 7000
          },
          coverflowEffect: {
            rotate: 0,
            stretch: -40,
            depth: 40,
            modifier: 1,
            slideShadows: false,
          }
        }
      }
    }
  }
</script>

