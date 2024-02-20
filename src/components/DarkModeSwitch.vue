<script setup>
import { ref, onMounted } from 'vue';

const darkModeOn = ref(false);

onMounted(() => {
    const storedDarkModeStatus = localStorage.getItem('darkModeOn')
    if (storedDarkModeStatus !== null) {
        darkModeOn.value = storedDarkModeStatus === 'true';
        darkModeOn.value ? setDarkModeStyles() : setLightModeStyles();
    }
})

const toggleDarkMode = () => {
    darkModeOn.value = !darkModeOn.value;
    if (darkModeOn.value) {
        setDarkModeStyles();
    } else {
        setLightModeStyles();
    }
    localStorage.setItem('darkModeOn', darkModeOn.value)
};

const setDarkModeStyles = () => {
    document.documentElement.style.setProperty('--box-shadow', '0 1px 3px rgba(255, 255, 255, 0.12), 0 1px 2px rgba(255, 255, 255, 0.24)'); // Heller Schatten
    document.documentElement.style.setProperty('--background-color', '#1c1c1c'); // Dunkler Hintergrund
    document.documentElement.style.setProperty('--text-color', '#efefef'); // Heller Text
    document.documentElement.style.setProperty('--text-field-color', '#414141'); // Graues Textfeld
    document.documentElement.style.setProperty('--secondary-text-color', '#e7e7e7'); // Hellgrau Text
}

const setLightModeStyles = () => {
    document.documentElement.style.setProperty('--box-shadow', '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)'); // Dunkler Schatten
    document.documentElement.style.setProperty('--background-color', '#f7f7f7'); // Heller Hintergrund
    document.documentElement.style.setProperty('--text-color', '#000000'); // Dunkler Text
    document.documentElement.style.setProperty('--text-field-color', '#fff'); // Weisses Textfeld
    document.documentElement.style.setProperty('--secondary-text-color', '#333'); // Dunkelgrau Text
}
</script>
 
<template>
    <div class="toggle-container">
        <input type="checkbox" id="darkmode-toggle" @click="toggleDarkMode">
        <label for="darkmode-toggle" :style="{ backgroundColor: darkModeOn ? '#414141' : '#e7e7e7' }">
            <img v-if="!darkModeOn" class="moon" src="../assets/icons/moon-svgrepo-com.svg" alt="moon">
            <img v-else src="../assets/icons/sun-svgrepo-com.svg" class="sun" alt="sun">
        </label>
    </div>
</template>

<style scoped>
label {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 34px;
    width: 34px;
    background-color: #8b8b8b;
    margin: 0;
    padding: 0;
    transition: 0.3s;
    border-radius: 99px;
    box-shadow: var(--box-shadow);
}

input {
    height: 0;
    width: 0;
    opacity: 0;
}

img {
    height: 24px;
    width: 24px;

}
img.sun {
    filter: invert(0.9);
}

img.moon {
    filter: invert(0.2);
}
</style>
