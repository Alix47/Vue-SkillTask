<script setup>
import Navbar from '@/components/Navbar.vue';
import { RouterView } from 'vue-router';
import { f7Page,f7App,f7View } from 'framework7-vue';

</script>
<template>
  <f7-app>
    <f7-view main>
      <Navbar/>
      <f7-page>
        <RouterView />
      </f7-page>
    </f7-view>
  </f7-app>
</template>