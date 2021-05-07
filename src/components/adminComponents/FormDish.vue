<template>
  <form class="mb-3">
    <div class="form-group">
      <label>Título del plato</label>
      <input type="text" class="form-control" placeholder="Introduce el nombre del plato"/>
      <small class="form-text text-muted">El título no debe de ser demasiado largo</small>
    </div>

    <div class="form-group">
      <label>Precio del plato</label>
      <input type="number" step=".01" class="form-control" placeholder="Introduce el precio del plato"/>
      <small class="form-text text-muted"/>
    </div>

    <div class="form-group">
      <label>Unidades</label>
      <input type="number" class="form-control" placeholder="Introduce las unidades que contiene el plato"/>
      <small class="form-text text-muted"/>
    </div>

    <div><label>Disponible para menú</label></div>
    <div class="form-check form-check-inline mb-2">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1"/>
      <label class="form-check-label">SI</label>
    </div>
    <div class="form-check form-check-inline mb-2">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="0"/>
      <label class="form-check-label">NO</label>
    </div>

    <div class="form-group">
      <label>Precio con menú</label>
      <input type="number" step=".01" class="form-control" placeholder="Introduce el precio con menú"/>
      <small class="form-text text-muted"/>
    </div>

    <div class="form-group">
      <label>Ingredientes</label>
      <input type="text" class="form-control" placeholder="Introduce los ingredientes del plato"/>
      <small class="form-text text-muted"/>
    </div>

    <div><label>Alérgenos</label></div>
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="1"/>
          <label class="form-check-label">Contiene gluten</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="2"/>
          <label class="form-check-label">Crustáceos</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="3"/>
          <label class="form-check-label" >Huevos</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="4"/>
          <label class="form-check-label">Pescado</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox5" value="5"/>
          <label class="form-check-label">Cacahuetes</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox6" value="6"/>
          <label class="form-check-label">Soja</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox7" value="7"/>
          <label class="form-check-label">Lácteos</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox8" value="8"/>
          <label class="form-check-label">Frutos de cáscara</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox9" value="9"/>
          <label class="form-check-label">Apio</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox10" value="10"/>
          <label class="form-check-label">Mostaza</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox11" value="11"/>
          <label class="form-check-label">Granos de sésamo</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox12" value="12"/>
          <label class="form-check-label" >Dioxido de azufre y sulfitos</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox13" value="13"/>
          <label class="form-check-label">Moluscos</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox14" value="14"/>
          <label class="form-check-label">Altramuces</label>
        </div>
      </div>
    </div>

    <div class="form-group mt-2">
      <label>Imagen del plato</label>
      <input type="file" class="form-control"/>
      <small class="form-text text-muted">jpeg, jpg, png. Max: 512KB</small>
    </div>
    <button type="submit" class="btn btn-primary">EDITAR</button>
  </form>
</template>

<script>
export default {
  name: "FormDish"
}
</script>

<style scoped>

</style>