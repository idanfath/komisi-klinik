<template>
  <router-view />
  
</template>

<style>
  html {
    scroll-behavior: smooth;
  }

  /* ubah warna seleksi teks ke invert */
  ::selection {
    background-color: #f5f5f5;
    color: #000;
  }

  /* noscrollbar */
  ::-webkit-scrollbar {
    scrollbar-width: none;
    width: 0px;
    display: none;
  }
</style>