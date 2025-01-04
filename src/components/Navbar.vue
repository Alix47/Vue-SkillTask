<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useDark, useToggle } from '@vueuse/core';
import { f7Navbar,f7NavRight,f7Link, f7Button} from 'framework7-vue';

const isDark = useDark();
const toggleDark = useToggle(isDark)

</script>
<template>
       <f7-navbar bg-color id="navbar" class="navbar" :dark title="MyApp" subtitle="skill-task" sliding="true">
           <f7-nav-right class="navbar-right">
                <f7-link @click="$router.push('/')">Home</f7-link>
                <f7-link @click="$router.push('/about')">Contact Us</f7-link>
                <!-- <f7-button raised="true" @click="switchMode">{{ dark === true ? "light" : "dark"}}</f7-button> -->
                    <f7-button raised @click="toggleDark()">
                        {{ isDark === true ? "Light" : "Dark"}}
                    </f7-button>
            </f7-nav-right>
        </f7-navbar>
</template>

<style scoped>
.navbar{
    height: 10vh;
}
.navbar-right{
    display: flex;
    padding: 0 2rem;
    justify-content: center;
    /* width: 20vw; */
}
</style>