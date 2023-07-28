import { createStore } from "vuex";

let tasks = window.localStorage.getItem('tasks');
let name = window.localStorage.getItem('name') || "";

export default createStore({
  state: {
    name: name,
    tasks: tasks ? JSON.parse(tasks) : [],
    pageNumber: 0,
    pageSize: 4,
    taskContentFocus: null,
  },
  actions: {
    NAME({ commit }) {
      commit('NAME', name);
      localStorage.setItem("name", name)

    }
  },
  mutations: {
    NAME(state) {
      let name = state.name;
    },
    SAVE_FROM_LOCAL_STORAGE_TASKS(state) {
      window.localStorage.setItem('tasks', JSON.stringify(state.tasks), { deep: true });
    },
    CREATE_TASK(state, task) {
      if (task.content == 0) {
        return
      }
      state.tasks.unshift(task);
      this.commit('SAVE_FROM_LOCAL_STORAGE_TASKS');
    },
    SAVE_TASK_DONE(state, task) {
      task.done = !task.done
      this.commit('SAVE_FROM_LOCAL_STORAGE_TASKS');
    },
    EDIT_TASK(state, task) {
      task.editTaskDone = !task.editTaskDone;
      this.commit('SAVE_FROM_LOCAL_STORAGE_TASKS');
    },
    EDIT_TASK_ON(state) {
      let tasks = state.tasks;

      let task = tasks.find(task => task.editTaskDone === false);

      task.editTaskDone = true;

      this.commit('SAVE_FROM_LOCAL_STORAGE_TASKS');
    },
    EDIT_TASK_OFF(state) {
      let tasks = state.tasks;

      let results = tasks.filter(function (task) { return task.editTaskDone === true; });

      results.forEach(function (task) {
        if (task.editTaskDone === true) {
          task.editTaskDone = false
        }
      });
      this.commit('SAVE_FROM_LOCAL_STORAGE_TASKS');
    },
    REMOVE_TASK(state, task) {
      let index = state.tasks.indexOf(task);
      state.tasks.splice(index, 1);
      this.commit('SAVE_FROM_LOCAL_STORAGE_TASKS');
    },
    NEXT_PAGE(state) {
      return state.pageNumber++;
    },
    PREV_PAGE(state) {
      return state.pageNumber--;
    }
  },

  getters: {
    GET_NAME(state) {
      let name = state.name;
      return name;

    },
    EDIT_TASK(state, getters) {
      let tasks = getters.PAGINATE_TASKS;

      const newState = tasks.map(task =>
        task.editTaskDone === true ? { ...task, editTaskDone: false } : task
      );

      console.log(newState)
      return newState
    },
    GET_EDIT_TASK_DONE(state) {
      return state.editTaskDone
    },
    VALID_TASKS(state) {
      return state.tasks.sort((a, b) => {
        return a.createdAt + b.createdAt;
      });
    },
    TASKS_LENGTH(state) {
      return state.tasks.length;
    },
    DONE_TASKS(state) {
      return state.tasks.filter(task => task.done);
    },
    DONE_TASKS_LENGTH(state, getters) {
      return getters.DONE_TASKS.length
    },
    PAGE_NUMBER(state) {
      return state.pageNumber;
    },
    PAGE_COUNT(state, getters) {
      let l = getters.TASKS_LENGTH,
        s = state.pageSize;
      return Math.ceil(l / s);
    },
    PAGINATE_TASKS(state, getters) {
      const start = state.pageNumber * state.pageSize,
        end = start + state.pageSize;
      return getters.VALID_TASKS.slice(start, end)
    },
  }
});
