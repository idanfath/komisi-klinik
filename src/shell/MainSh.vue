<template>
  <q-layout view="HHH LpR lff">
    <HeaderC class="font-inria-sans" />
    <FooterC class="font-inria-sans" />
    <!-- ini mw inria apa inter -->
    <q-page-container class="font-inria-sans bg-black">
        <router-view v-slot=" {Component}">
            <component :is="Component" />
        </router-view>
    </q-page-container>
  </q-layout>
  <CustomCursor class="gt-md" />
</template>

<script>
  import FooterC from '@/components/FooterC.vue'
  import CustomCursor from '@/components/CustomCursor.vue'
  import HeaderC from '@/components/HeaderC.vue'
  export default {
    name: 'MainSh',
    components: {
      HeaderC,
      FooterC,
      CustomCursor
    }
  }
</script>

<style>
/* .routerfade-enter-from, .routerfade-leave-to {
  opacity: 0;
}
.routerfade-enter-active, .routerfade-leave-active {
  transition: opacity 0.2s ease-out;
} */
</style>