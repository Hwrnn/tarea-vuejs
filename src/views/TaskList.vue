<template>
    <div class="container mt-4">
        <!-- Título con diseño consistente -->
        <h1 class="text-center text-primary mb-4 title">Lista de Tareas</h1>

        <!-- Botón para cargar tareas desde la API -->
        <button @click="fetchTasks" class="btn btn-info mb-3">
            <i class="bi bi-arrow-clockwise me-2"></i>Cargar Tareas
        </button>

        <!-- Mostrar las tareas traídas de la API -->
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
            tasks: [], // Almacenamiento de tareas traídas de la API
        };
    },
    methods: {
        fetchTasks() {
            axios
                .get("https://dummyjson.com/todos")
                .then((response) => {
                    this.tasks = response.data.todos; // Almacenar las tareas en el arreglo 'tasks'
                })
                .catch((error) => {
                    console.error("Error fetching tasks:", error);
                });
        },
        toggleTaskCompletion(task) {
            task.completed = !task.completed; // Alternar el estado de la tarea (completado/no completado)
        },
        deleteTask(task) {
            this.tasks = this.tasks.filter((t) => t.id !== task.id); // Eliminar la tarea de la lista local
        },
    },
};
</script>

<style scoped>
.container {
    max-width: 800px;
    padding: 20px;
}

/* Estilo del título */
.title {
    font-size: 2.5rem;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    margin-bottom: 30px;
}
</style>