<template>
  <form class="mb-3">
    <div class="form-group">
      <label>Título de la bebida</label>
      <input type="text" class="form-control" placeholder="Introduce el nombre de la bebida"/>
      <small class="form-text text-muted">El título no debe de ser demasiado largo</small>
    </div>

    <div class="form-group">
      <label>Precio de la bebida</label>
      <input type="number" step=".01" class="form-control" placeholder="Introduce el precio de la bebida"/>
      <small class="form-text text-muted"/>
    </div>

    <div class="form-group mt-2">
      <label>Imagen dela bebida</label>
      <input type="file" class="form-control"/>
      <small class="form-text text-muted">jpeg, jpg, png. Max: 512KB</small>
    </div>
    <button type="submit" class="btn btn-primary mt-2">ACEPTAR</button>
  </form>
</template>

<script>
export default {
  name: "FormDrink"
}
</script>

<style scoped>

</style>