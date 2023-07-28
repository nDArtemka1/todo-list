<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

const tasks = computed(() => {
    return store.getters.PAGINATE_TASKS;
});

const saveTaskDone = (task) => {
    return store.commit("SAVE_TASK_DONE", task);
};

const editTask = (task) => {
    // Переключает редактирование задачи
    return store.commit("EDIT_TASK", task);
};

const editTaskOff = () => {
    // Отключает редактирование задачи
    return store.commit("EDIT_TASK_OFF");
};

const removeTask = (task) => {
    // Удаляет задачу
    return store.commit("REMOVE_TASK", task);
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

<template>
    <section class="task-list" ref="taskContentFocus">
        <h3 @click="editTaskOff()">
            Список задач которые необходимо выполнить:
        </h3>
        <div class="list" id="task-list">
            <div
                v-for="(task, index) in tasks"
                :key="index"
                :class="`task-item ${task.done && 'done'}`"
            >
                <label>
                    <input
                        @click="saveTaskDone(task)"
                        type="checkbox"
                        v-model="task.done"
                    />
                    <span
                        :class="`bubble ${
                            task.category == 'business'
                                ? 'business'
                                : 'personal'
                        }`"
                    ></span>
                </label>

                <div class="task-content">
                    <div @click="editTask(task)" v-if="!task.editTaskDone">
                        {{ task.content }}
                    </div>
                    <input
                        v-if="task.editTaskDone"
                        type="text"
                        v-model="task.content"
                        v-on:keyup.enter="editTask(task)"
                    />
                </div>

                <div class="actions">
                    <div class="edit-btn" @click="editTask(task)">
                        <span
                            class="material-symbols-outlined"
                            style="line-height: none; font-size: 17px"
                        >
                            border_color
                        </span>
                    </div>
                    <button class="delete" @click="removeTask(task)">
                        Удалить
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
