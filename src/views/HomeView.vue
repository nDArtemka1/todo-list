<script setup>
import { ref, onMounted, computed, watch } from "vue";

import { useStore } from "vuex";

const store = useStore();

const name = ref(store.getters.GET_NAME);

watch(name, (newVal) => {
    localStorage.setItem("name", newVal);
});

onMounted(() => {
    name.value = localStorage.getItem("name") || "";
});

let onBtn = computed(() => (name.value.length > 0 ? true : false));
</script>

<template>
    <main id="main-app">
        <div class="app">
            <section class="greeting">
                <h2 class="title">
                    <span>Здравствуйте, как вас зовут?</span>
                    <input
                        type="text"
                        placeholder="Введите ваше имя"
                        v-model="name"
                    />
                </h2>
                <transition name="fade" mode="out-in">
                    <router-link v-if="onBtn" class="greeting-btn" to="/about"
                        >Перейти к списку задач</router-link
                    ></transition
                >
            </section>
        </div>
    </main>
</template>

<style scoped>
#main-app {
    height: 100vh;
}

@media (max-width: 500px) {
    .app {
        padding: 60px 10px 60px 10px;
        border-radius: 0;
    }
    .greeting .title {
        flex-direction: column;
    }
}
</style>
