<script setup>
import { ref, onMounted, computed, watch } from "vue";

import { useStore } from "vuex";

const store = useStore();

const tasksLength = computed(() => {
    return store.getters.TASKS_LENGTH;
});
const tasksDone = computed(() => {
    return store.getters.DONE_TASKS_LENGTH;
});

let pageNumber = computed(() => {
    return store.getters.PAGE_NUMBER;
});

let pageCount = computed(() => {
    return store.getters.PAGE_COUNT;
});

const prevPage = () => {
    return store.commit("PREV_PAGE");
};
const nextPage = () => {
    return store.commit("NEXT_PAGE");
};

const editTaskOff = () => {
    // Отключает редактирование задачи
    return store.commit("EDIT_TASK_OFF");
};
</script>

<template>
    <section @click="editTaskOff()">
        <div v-if="tasksLength > 0" class="task-list-info">
            <h3>Выполнено задач {{ tasksDone }} из {{ tasksLength }}</h3>

            <div class="task-list-info-btns">
                <button
                    class="task-list-info-btn"
                    :disabled="pageNumber === 0"
                    @click="prevPage"
                >
                    <span class="material-symbols-outlined">
                        chevron_left
                    </span>
                </button>

                <button
                    class="task-list-info-btn"
                    :disabled="pageNumber >= pageCount - 1"
                    @click="nextPage"
                >
                    <span
                        class="material-symbols-outlined"
                        style="line-height: none; font-weight: 700"
                    >
                        chevron_right
                    </span>
                </button>
            </div>
        </div>
        <div v-else>
            <h3>Пусто</h3>
        </div>
    </section>
</template>
