<template>
  <div class="container mt-5">
    <div class="text-center">
      <h1 class="display-4 text-primary mb-4">Esta es mi Aplicacion de tareas con VueJs</h1>
      <p class="lead text-secondary mb-4">
        Esta aplicación facilita la gestión eficiente de tus tareas. Puedes agregar tareas de forma manual o extraerlas automáticamente desde una API.
      </p>
      <img src="@/assets/logo.png" class="img-fluid mb-4 logo" alt="Vue logo" />
      <h2 class="text-info mt-4">Secciones de la Aplicación</h2>
      <p class="text-muted">
        <strong>Añadir Tarea :</strong>Esta sección te permite crear nuevas tareas manualmente.<br />
        <strong>Lista de Tareas:</strong> Aqui se muestran todas las tareas extraídas desde la API, permitiendo marcarlas como completadas o eliminarlas. <br />
        <strong>Vista Combinada:</strong> Combina la opción de agregar tareas manuales y la visualización de tareas de la API en una sola interfaz.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.container {
  max-width: 900px;
}

.display-4 {
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(21, 20, 20, 0.2);
}

.lead {
  font-size: 1.25rem;
}

.logo {
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(6, 186, 141, 0.644);
  transition: transform 0.3s, box-shadow 0.3s;
}

.logo:hover {
  transform: scale(1.1);
  box-shadow: 0 0 30px rgba(10, 202, 84, 0.7);
}

h2 {
  font-weight: bold;
}

.text-muted {
  font-size: 1rem;
}
</style>