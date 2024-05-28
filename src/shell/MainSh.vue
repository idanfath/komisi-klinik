<template>
  <q-layout view="HHH LpR fff">
    <HeaderC class="font-inria-sans" />
    <FooterC class="font-inria-sans" />
    <q-page-container class="font-inria-sans bg-black">
      <router-view></router-view>
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

</style>