<template>
  <div class="inicioSesion">
    <form class="formulario">
      <h1>Inicio sesion</h1>
      <label for="email">Correo electronico</label>
      <input type="email" >
      <br>
      <label for="password">Contraseña</label>
      <input type="password" >
      <button type="submit">Aceptar</button>

    </form>
    
  </div>
</template>
<style scoped>
.inicioSesion{
  display: flex;

  justify-content: center;
  align-items: center;

}
.formulario{
  border: 1px solid grey;
  padding: 1.5rem;
  border-radius: 2rem;

}
</style>


