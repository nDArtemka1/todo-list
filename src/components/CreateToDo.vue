<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const input_content = ref("");
const input_category = ref(null);

const addTask = () => {
    return store.commit("CREATE_TASK", {
        content: input_content.value,
        category: input_category.value,
        done: false,
        editTaskDone: false,
        createdAt: new Date().getTime(),
    });
};

const editTaskOff = () => {
    return store.commit("EDIT_TASK_OFF");
};
</script>

<template>
    <section class="create-task" @click="editTaskOff()">
        <h3 class="title">У вас есть список задач?</h3>

        <form @submit.prevent="addTask">
            <h4>Создать задачу</h4>
            <input
                type="text"
                placeholder="Например: Сходить в магазин за покупками"
                v-model.trim="input_content"
            />
            <h4>Выбери категорию</h4>

            <div class="options">
                <label>
                    <input
                        type="radio"
                        name="category"
                        id="category1"
                        value="business"
                        v-model.trim="input_category"
                    />
                    <span class="bubble business"></span>
                    <div>Бизнес</div>
                </label>

                <label>
                    <input
                        type="radio"
                        name="category"
                        id="category2"
                        value="personal"
                        v-model.trim="input_category"
                    />
                    <span class="bubble personal"></span>
                    <div>Личное</div>
                </label>
            </div>

            <input type="submit" value="Добавить задачу" />
        </form>
    </section>
</template>
