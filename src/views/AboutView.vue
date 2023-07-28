<template>
    <main id="main-app" ref="taskContentFocus">
        <div class="app">
            <Greeting />
            <CreateToDo />
            <ToDoList />
            <ToDoListInfo />
        </div>
        <div class="footer"></div>
    </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Greeting from "@/components/Greeting.vue";
import CreateToDo from "@/components/CreateToDo.vue";
import ToDoList from "@/components/ToDoList.vue";
import ToDoListInfo from "@/components/ToDoListInfo.vue";
import { useStore } from "vuex";

const store = useStore();

const editTaskOff = () => {
    return store.commit("EDIT_TASK_OFF");
};

const taskContentFocus = ref();

onMounted(() => {
    document.addEventListener("click", (task) => {
        if (task.target === taskContentFocus.value) {
            editTaskOff();
        }
    });
});
</script>
