class Animal {
  name = "";

  asignarNombre(nombre) {
    this.name = nombre;
  }
  caminar() {
    console.log(` hola soy ${this.name} y estoy caminando`);
  }
}

const perro = new Animal();

perro.asignarNombre("Bethoben");
perro.caminar();
