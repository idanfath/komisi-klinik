<template>
  <q-header v-model="header" flat class="bg-black font-inria-sans">
    <q-toolbar class="bg-transparent text-white q-px-lg">
      <img :src="logoSrc" class="mc header-icon non-selectable cursor-pointer" @click="$router.push({name:'home'})"
        alt="Skyn Gym's Logo">
      <q-space />
      <div class="flex p-header-nav p-no-dec gt-sm panimated non-selectable">
        <ItemHeader v-for="link in links" :key="link.title" :title="link.title" :dest="link.dest" @click="tryPush(link.dest)"/>
      </div>
      <div class="lt-md">
        <q-btn flat dense icon="menu" class="text-white" :ripple="false" @click="mobileMenu = !mobileMenu"></q-btn>
      </div>
    </q-toolbar>
  </q-header>
  <!-- ini mw inria apa inters -->
  <q-dialog v-model="mobileMenu" class="lt-md font-inter" maximized transition-show="fade" transition-hide="fade">
    <q-card class="bg-black">
      <div class="q-px-lg row q-pt-md q-mb-md">
        <img :src="logoSrc" class="mc q-mt-none q-mb-none header-icon non-selectable cursor-pointer"
          @click="this.$router.push({name: 'home'})" alt="Skyn Gym's Logo">
        <q-space />
        <q-btn flat dense icon="close" class="text-white" :ripple="false" @click="mobileMenu = !mobileMenu"
          v-motion-slide-visible-left></q-btn>
      </div>
      <q-separator inset color="white" />
      <q-card-section class="text-white column items-center" style="gap: 20px;">
        <q-btn :label="link.title" v-for="link in links" :key="link.title" outline square
          class="full-width animated MM-btn" :class="this.$route.name === link.dest ? 'MM-active' : ''"
          @click="tryPush(link.dest)"></q-btn>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style>
  .MM-btn {
    font-size: 1.1rem;
    letter-spacing: 2px;
    font-weight: 350;
  }

  .MM-active {
    background-color: #f5f5f5 !important;
    color: #000 !important;
  }

  .MM-active::before {
    border: 0px !important;
  }
</style>

<script>
  import ItemHeader from './tinycomp/ItemHeader.vue'
  export default {
    name: 'HeaderC',
    components: {
      ItemHeader
    },
    methods: {
      scrollTo(id) {
        let el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      },
      tryPush(dest) {
        console.log('tryPush', dest)
        this.mobileMenu = false
        if (dest === "contact") {
          this.scrollTo("footer")
        } else {
          this.$router.push({ name: dest })
        }
      }
    },
    data() {
      return {
        header: true,
        logoSrc: require('@/assets/icon.png'),
        mobileMenu: false,
        links: [
          { title: 'Home', dest: 'home' },
          { title: 'Service', dest: 'service' },
          { title: 'Result', dest: 'results' },
          { title: 'Contact', dest: 'contact' }
        ]
      }
    }
  }
</script>