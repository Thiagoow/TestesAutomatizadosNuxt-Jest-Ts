<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
/* Todos os estilos da fonte Jetbrains Mono: */
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

.container {
  width: 400px;
  font-family: 'Jetbrains Mono';
  display: grid;
  justify-items: center;
  grid-gap: 1rem;
}
</style>
