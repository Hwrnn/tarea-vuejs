<template>
    <div class="container mt-4">
        <h1 class="text-center text-primary mb-4 title">Lista de tareas</h1>
        <button @click="fetchTasks" class="btn btn-info mb-3">
            <i class="bi bi-arrow-clockwise me-2"></i>Cargar tareas
        </button>
        <div class="row">
            <div class="col-12 mb-4" v-for="task in tasks" :key="task.id">
                <TodoItem :title="task.todo" :completed="task.completed" @toggle-completion="toggleTaskCompletion(task)"
                    @delTodo="deleteTask(task)" />
            </div>
        </div>
    </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";
import axios from "axios";

export default {
    name: "TaskList",
    components: { TodoItem },
    data() {
        return {
            tasks: [],
        };
    },
    methods: {
        fetchTasks() {
            axios
                .get("https://dummyjson.com/todos")
                .then((response) => {
                    this.tasks = response.data.todos;
                })
                .catch((error) => {
                    console.error("Error fetching tasks:", error);
                });
        },
        toggleTaskCompletion(task) {
            task.completed = !task.completed;
        },
        deleteTask(task) {
            this.tasks = this.tasks.filter((t) => t.id !== task.id);
        },
    },
};
</script>

<style scoped>
.container {
    max-width: 800px;
    padding: 20px;
}
.title {
    font-size: 2.5rem;
    font-weight: bold;
    text-shadow: 1px 1px 2px black;
    margin-bottom: 30px;
}
</style>