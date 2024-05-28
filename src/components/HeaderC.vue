<template>
  <q-header v-model="header" flat class="bg-black font-inria-sans">
    <q-toolbar class="bg-transparent text-white q-px-lg">
        <img :src="logoSrc" class="mc header-icon non-selectable cursor-pointer" @click="$router.push({name:'home'})"
          alt="Skyn Gym's Logo">
      <q-space />
      <div class="flex p-header-nav p-no-dec gt-sm panimated non-selectable">
        <ItemHeader v-for="link in exceptMobile.links" :key="link.title" :title="link.title" :dest="link.dest" />
      </div>
      <div class="lt-md">
        <q-btn flat dense icon="menu" class="text-white" :ripple="false"></q-btn>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script>
  import ItemHeader from './tinycomp/ItemHeader.vue'
  export default {
    name: 'HeaderC',
    components: {
      ItemHeader
    },
    data() {
      return {
        header: true,
        logoSrc: require('@/assets/icon.png'),
        exceptMobile: {
          links: [
            { title: 'Home', dest: 'home' },
            { title: 'About', dest: 'about' },
            { title: 'Services', dest: 'services' },
            { title: 'Contact', dest: 'contact' }
          ]
        }
      }
    }
  }
</script>