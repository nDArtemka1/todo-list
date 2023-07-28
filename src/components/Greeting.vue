<script setup>
import { ref, onMounted, watch } from "vue";

import { useStore } from "vuex";

const store = useStore();

const name = ref(store.getters.GET_NAME);

watch(name, (newVal) => {
    localStorage.setItem("name", newVal);
});

onMounted(() => {
    name.value = localStorage.getItem("name") || "";
});
</script>

<template>
    <section class="greeting">
        <h2 class="title">
            <span>Добро пожаловать,</span>
            <input type="text" placeholder="Введите ваше имя" v-model="name" />
        </h2>
    </section>
</template>
