<template>
    <div class="card mb-3">
        <div class="card-body d-flex justify-content-between align-items-center">
            <div class="flex-grow-1 me-2">
                <h5 class="card-title m-0" :class="{ 'text-decoration-line-through': completed }">
                    {{ title }}
                </h5>
                <span class="badge" :class="{ 'bg-success': completed, 'bg-warning': !completed }">
                    {{ completed ? 'Completada' : 'Pendiente' }}
                </span>
            </div>
            <div class="d-flex">
                <button @click="$emit('toggle-completion')" class="btn btn-outline-success me-2"
                    aria-label="Marcar como completada">
                    <i class="bi bi-check-circle"></i>
                </button>
                <button @click="$emit('delTodo')" class="btn btn-outline-danger" aria-label="Eliminar tarea">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
    props: {
        title: String,
        completed: Boolean,
    }
}
</script>

<style scoped>
.card {
    border: 1px solid green;
}

.card-title {
    font-weight: bold;
    overflow-wrap: break-word;
    max-height: 3em;
    overflow: hidden;
}

.text-decoration-line-through {
    text-decoration: line-through;
}
</style>